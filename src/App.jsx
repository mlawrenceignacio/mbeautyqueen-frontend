import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

import useUserStore from "./store/useUserStore.js";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Reservation from "./pages/Reservation.jsx";
import ContactUs from "./pages/ContactUs.jsx";

const App = () => {
  const loadUser = useUserStore((s) => s.loadUser);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
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
