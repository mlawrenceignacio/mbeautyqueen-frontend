import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

import useUserStore from "./store/useUserStore.js";
import axios from "./api/axiosInstance.js";
import Loading from "./components/Loading.jsx";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Reservation from "./pages/Reservation.jsx";
import ContactUs from "./pages/ContactUs.jsx";

const App = () => {
  const { setUser, user } = useUserStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      if (!user) {
        try {
          const res = await axios.get("/user", { withCredentials: true });
          if (res.data.user) setUser(res.data.user);
        } catch (err) {
          console.warn("Could not verify user:", err.message);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    verifyUser();
  }, [setUser, user]);

  return isLoading ? (
    <Loading />
  ) : (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Toaster position="top-center" />
    </Router>
  );
};

export default App;
