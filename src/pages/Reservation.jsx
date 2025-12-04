import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading.jsx";

import reservationImg from "../assets/images/reservationImage.png";

import useUserStore from "../store/useUserStore.js";
import { getReservations, saveReservations } from "../utils/mockDB";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Reservation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useUserStore((state) => state.user);
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // VALIDATIONS
    if (!name || !number || !email || !address || !date || !time || !service) {
      toast.error("All fields are required.");
      setIsLoading(false);
      return;
    }

    if (!/^\d{11}$/.test(number)) {
      toast.error("Phone number must be 11 digits.");
      setIsLoading(false);
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Invalid email format.");
      setIsLoading(false);
      return;
    }

    if (new Date(date) < new Date()) {
      toast.error("Date must be in the future.");
      setIsLoading(false);
      return;
    }

    const newReservation = {
      id: Date.now(),
      clientName: name,
      phone: number,
      email,
      address,
      date,
      time,
      service,
      note,
      status: "pending",
      createdAt: Date.now(),
    };

    const reservations = getReservations();
    saveReservations([...reservations, newReservation]);

    toast.success("Reservation booked successfully!");

    // RESET FORM
    setName("");
    setNumber("");
    setEmail("");
    setAddress("");
    setDate("");
    setTime("");
    setService("");
    setNote("");

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col w-[100%] h-[100dvh]">
      {isLoading && <Loading />}
      <Header />

      <div className="flex-1 flex flex-col items-center w-full overflow-y-auto">
        <section
          id="reservation"
          className="flex flex-col lg:flex-row lg:justify-center"
        >
          <div className="flex flex-col items-center text-center p-4 w-full bg-[url('src/assets/images/desktopBG.jpg')] bg-no-repeat bg-cover bg-center">
            <h1 className="mt-4 text-2xl lg:text-3xl font-bold text-red-950 mb-2 lg:mt-5">
              MBeautyQueen Salon Booking Form
            </h1>

            <img
              src={reservationImg}
              alt="Storyset Generated Salon Image"
              className="h-[150px] w-[80%] md:w-[55%] md:h-[250px] lg:h-[250px] lg:w-[65%] object-cover"
            />

            <p className="hidden lg:flex text-lg text-center bg-pink-300/50 p-3 rounded-lg w-[85%] mt-3">
              After booking a reservation, please wait for an email or chat
              response from us. If the reservation remains pending for 24 hours
              without a reply from our team, it will be automatically canceled.
            </p>
          </div>

          {/* FORM SECTION */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-[55%] bg-[#ffffff] shadow-lg rounded-2xl p-8 border border-red-200"
          >
            <h2 className="text-2xl font-bold text-red-800 text-center mb-6 tracking-wide">
              Reservation Form
            </h2>

            {/* FORM GRID */}
            <div className="space-y-8">
              {/* PERSONAL INFO */}
              <div>
                <p className="text-red-800 font-semibold mb-2">
                  Personal Information
                </p>
                <div className="h-[2px] bg-red-300 w-full rounded-full mb-4"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="Ex: Maricar Dumon"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Contact No
                    </label>
                    <input
                      type="text"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="Ex: 09372639263"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="Ex: mbeautyqueen@gmail.com"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="Ex: Brgy. Mahabang Parang, Angono"
                    />
                  </div>
                </div>
              </div>

              {/* RESERVATION DETAILS */}
              <div>
                <p className="text-red-800 font-semibold mb-2">
                  Reservation Details
                </p>
                <div className="h-[2px] bg-red-300 w-full rounded-full mb-4"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Time
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                      <option value="" disabled>
                        Select Time
                      </option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Service/s
                    </label>
                    <input
                      type="text"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="Ex: Haircut, Pedicure..."
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-medium text-red-900 mb-1">
                      Extra Note
                    </label>
                    <input
                      type="text"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#ffecec] border border-red-200 text-red-900 placeholder-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="Optional"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            {user?.email ? (
              <button className="w-full mt-8 py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-xl shadow-md transition-all">
                BOOK RESERVATION
              </button>
            ) : (
              <div
                onClick={() => nav("/signup")}
                className="w-full mt-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md cursor-pointer text-center"
              >
                Sign In First
              </div>
            )}
          </form>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Reservation;
