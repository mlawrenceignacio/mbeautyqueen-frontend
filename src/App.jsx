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

const App = () => {
  const { setUser, clearUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get("/user", { withCredentials: true });

        if (res.data.user) {
          setUser(res.data.user);
        } else {
          clearUser();
        }
      } catch (err) {
        setIsLoading(false);
        clearUser();
        console.warn(
          "Could not verify user (token might be missing/expired):",
          err.message
        );
      } finally {
        setIsLoading(false);
      }
    };

    verifyUser();
  }, [setUser, clearUser]);

  return isLoading ? (
    <Loading />
  ) : (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <Toaster position="top-center" />
    </Router>
  );
};

export default App;
