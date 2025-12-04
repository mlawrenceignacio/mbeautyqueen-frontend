import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import useUserStore from "../store/useUserStore.js";
import {
  getAllFeedbacks,
  addFeedback,
  updateFeedback,
} from "../utils/feedbackStorage.js";

import FeedbackCard from "./FeedbackCard.jsx";
import Loading from "./Loading";
import Modal from "./Modal.jsx";

import star from "../assets/images/star.png";
import emptyStar from "../assets/images/emptyStar.png";
import sendButton from "../assets/images/send.png";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [editingFeedbackId, setEditingFeedbackId] = useState(null);

  const inputRef = useRef(null);
  const nav = useNavigate();
  const user = useUserStore((state) => state.user);

  const loadFeedbacks = () => {
    setFeedbacks(getAllFeedbacks());
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!user?.email) return setShowModal(true);
    if (!rating) return toast.error("Please select a star rating.");
    if (!comment.trim()) return toast.error("Comment cannot be empty.");

    const finalRating = rating || 1;

    if (editingFeedbackId) {
      updateFeedback(editingFeedbackId, {
        star: finalRating,
        message: comment,
      });
      setIsLoading(false);
      toast.success("Feedback updated!");
    } else {
      addFeedback({
        id: crypto.randomUUID(),
        username: user.username,
        email: user.email,
        star: finalRating,
        message: comment.trim(),
        createdAt: new Date().toISOString(),
      });
      setIsLoading(false);
      toast.success("Feedback posted!");
    }

    loadFeedbacks();
    setComment("");
    setRating(0);
    setHover(0);
    setEditingFeedbackId(null);
    setIsLoading(false);
  };

  const averageRating =
    feedbacks.length > 0
      ? (
          feedbacks.reduce((acc, fb) => acc + fb.star, 0) / feedbacks.length
        ).toFixed(1)
      : 1;

  const filteredFeedbacks =
    sortOption === ""
      ? feedbacks
      : feedbacks.filter((fb) => fb.star === Number(sortOption));

  return (
    <div className="flex flex-col items-center text-red-100 bg-pink-950 p-5 gap-3 overflow-hidden ">
      {isLoading && <Loading />}

      {showModal && (
        <Modal
          message="Please sign in to access this feature."
          function1={() => setShowModal(false)}
          function2={() => nav("/signup")}
          f1Text="Cancel"
          f2Text="Sign In"
        />
      )}

      <h2 className="text-xl mt-2">CLIENT FEEDBACKS</h2>

      {/* FEEDBACK LIST */}
      <div className="flex-1 flex flex-col w-[95%] md:w-[85%] lg:w-[60%] bg-white px-2 rounded-lg gap-1 max-h-[300px] overflow-y-auto pb-10">
        <div className="flex w-full justify-between px-3 sticky top-0 bg-white py-2 z-30">
          <div className="flex gap-2 items-center bg-red-950 rounded-2xl py-0.5 px-2">
            <img src={star} alt="Star Icon" className="star" />
            {averageRating} | ({feedbacks.length})
          </div>

          <div className="flex gap-1 items-center bg-red-900 rounded-2xl py-0.5 px-1.5">
            <img src={star} alt="Star Icon" className="star" />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="text-white py-0.5 px-0.5 bg-red-900 rounded-xl outline-none"
            >
              <option value="">Most Recent</option>
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex-1 flex flex-col md:items-center text-red-950 p-2 gap-2">
          {filteredFeedbacks.length === 0 ? (
            <p className="text-center text-sm italic text-gray-500 pb-3">
              No feedback found.
            </p>
          ) : (
            filteredFeedbacks.map((fb) => (
              <FeedbackCard
                key={fb.id}
                fb={fb}
                getFeedbacks={loadFeedbacks}
                onEdit={(fb) => {
                  setComment(fb.message);
                  setRating(fb.star);
                  setEditingFeedbackId(fb.id);
                  inputRef.current.focus();
                }}
              />
            ))
          )}
        </div>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 bg-white w-[95%] md:w-[85%] lg:w-[60%] rounded-lg p-3"
      >
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((num) => (
            <img
              key={num}
              src={(hover || rating) >= num ? star : emptyStar}
              onMouseEnter={() => setHover(num)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(num)}
              className="starInput"
            />
          ))}
        </div>

        <div className="flex w-full gap-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="pl-2 md:flex-1 outline-none bg-red-200 text-black shadow-md rounded-lg text-md placeholder:text-red-900 py-1.5 w-[70%] md:w-full"
          />

          {user ? (
            <button type="submit">
              <img src={sendButton} alt="Send Icon" className="feedbackBtn" />
            </button>
          ) : (
            <div
              className="bg-green-600 text-white px-2 py-2 rounded-lg cursor-pointer text-sm text-center md:text-lg w-[30%] md:w-[20%]"
              onClick={() => setShowModal(true)}
            >
              Sign In
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Feedback;
