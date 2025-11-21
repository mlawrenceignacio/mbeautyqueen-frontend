import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading.jsx";

import reservationImg from "../assets/images/reservationImage.png";

import useUserStore from "../store/useUserStore.js";
import axios from "../api/axiosInstance.js";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name || !number || !email || !address || !date || !time || !service) {
      setIsLoading(false);
      toast.error("All fields are required.");
      return;
    }

    try {
      const res = await axios.post("/reservations", {
        clientName: name,
        phone: number,
        email,
        address,
        date,
        time,
        service,
        note,
      });

      toast.success(
        "Reservation booked successfully!\nPlease wait for our response."
      );
      setName("");
      setNumber("");
      setEmail("");
      setAddress("");
      setDate("");
      setTime("");
      setService("");
      setNote("");
      console.log(res.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
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

            <p className="hidden lg:flex text-lg text-center bg-pink-300/50 p-3 rounded-lg w-[85%]">
              After booking a reservation, please wait for an email or chat
              response from us. If the reservation remains pending for 24 hours
              without a reply from our team, it will be automatically canceled.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className=" p-4 flex flex-col w-full items-center"
          >
            <h2 className="text-xl text-center font-bold my-2 md:mb-4 w-full lg:text-2xl lg:mb-0">
              BOOK RESERVATION
            </h2>
            <p className="text-sm md:text-lg md:mb-2 text-center bg-pink-300/50 p-3 rounded-lg md:w-[70%] lg:w-[80%] lg:hidden">
              After booking a reservation, please wait for an email or chat
              response from us. If the reservation remains pending for 24 hours
              without a reply from our team, it will be automatically canceled.
            </p>

            <div className="flex flex-col px-3 pb-5 pt-3 mt-2 w-full items-center lg:items-end gap-1.5 bg-red-950 rounded-lg shadow-[1px_1px_1px_black] md:w-[70%] lg:w-[80%]">
              <p className="text-start text-pink-100 px-3 mb-2 w-full bg-red-900 py-1.5 rounded-lg shadow-[1px_1px_1px_black]">
                Personal Information
              </p>
              <div className="input-reservation-cont">
                <label htmlFor="fullName">Full Name: </label>
                <input
                  type="text"
                  id="fullName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Maricar Dumon"
                  className="input-reservation"
                />
              </div>

              <div className="input-reservation-cont">
                <label htmlFor="contactNo">Contact No: </label>
                <input
                  type="text"
                  placeholder="Ex: 09372639263"
                  id="contactNo"
                  className="input-reservation"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>

              <div className="input-reservation-cont">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  placeholder="Ex: mbeautyqueen@gmail.com"
                  id="email"
                  className="input-reservation"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-reservation-cont">
                <label htmlFor="address">Address: </label>
                <input
                  type="text"
                  placeholder="Ex: Brgy. Mahabang Parang, Angono, Rizal"
                  id="address"
                  className="input-reservation"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <p className="text-start text-pink-100 px-3 mt-5 mb-2 w-full bg-red-900 py-1.5 rounded-lg shadow-[1px_1px_1px_black]">
                Reservation Details
              </p>

              <div className="input-reservation-cont">
                <label htmlFor="date">Date: </label>
                <input
                  type="date"
                  id="date"
                  className="input-reservation"
                  value={date}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="input-reservation-cont">
                <label htmlFor="time">Time: </label>
                <select
                  name="time"
                  id="time"
                  className="input-reservation "
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
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

              <div className="input-reservation-cont">
                <label htmlFor="serviceAvailed">Service/s: </label>
                <input
                  type="text"
                  placeholder="Ex: Manicure, Pedicure..."
                  id="serviceAvailed"
                  className="input-reservation"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                />
              </div>

              <div className="input-reservation-cont">
                <label htmlFor="extraNote">Extra Note: </label>
                <input
                  type="text"
                  id="extraNote"
                  placeholder="Ex: Blue color for hair..."
                  className="input-reservation"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              {user?.email ? (
                <button
                  className="bg-pink-600 text-white py-2 w-[150px] rounded-lg mt-3 hover:bg-pink-800 hover:shadow-[1px_1px_1px_black]"
                  type="submit"
                >
                  BOOK
                </button>
              ) : (
                <div
                  className="bg-green-600 text-white py-2 w-[150px] rounded-lg mt-3 hover:bg-green-800 hover:shadow-[1px_1px_1px_black] cursor-pointer text-center"
                  onClick={() => nav("/signup")}
                >
                  Sign In
                </div>
              )}
            </div>
          </form>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Reservation;
