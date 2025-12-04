import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import toast from "react-hot-toast";

import useUserStore from "../store/useUserStore.js";
import EditUsername from "./EditUsername.jsx";

import menuIcon from "../assets/images/menu.png";
import logo from "../assets/images/logo.jpg";
import settingIcon from "../assets/images/settings.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showEditUsername, setShowEditUsername] = useState(false);
  const nav = useNavigate();

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const { user, logout } = useUserStore();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
  };

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 bg-red-950 md:hidden">
        <img
          className="w-[50px] h-[50px] rounded-3xl border border-black object-contain bg-white"
          src={logo}
          alt="MBeautyQueen Logo 1"
        />

        <div className="flex items-center gap-3">
          {!user && (
            <div
              className="bg-green-600 text-white px-3 py-1 h-[40px] flex items-center rounded-lg cursor-pointer hover:bg-green-800 hover:shadow-[2px_2px_1px_black]"
              onClick={() => nav("/signup")}
            >
              SIGN IN
            </div>
          )}

          <img
            className="w-[40px] h-[40px] cursor-pointer"
            src={menuIcon}
            alt="Menu Icon"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        {showMenu && (
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setShowMenu(false)}
          ></div>
        )}

        <ul
          className={`fixed top-[72px] right-4 z-50 bg-pink-700/50 text-pink-100 font-sans backdrop-blur-md py-3 px-5 rounded-lg border border-black w-[200px] flex flex-col items-center text-center gap-2 transition-all duratiom-300 ${
            showMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <li className="dropdownli">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="dropdownli">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="dropdownli">
            <Link to={"/reservation"}>Reservation</Link>
          </li>
          <li className="dropdownli">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="dropdownli">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          {user && (
            <li
              className="dropdownli"
              onClick={() => {
                setShowSettings(true);
                setShowMenu(false);
              }}
            >
              SETTINGS
            </li>
          )}
        </ul>
      </div>

      {showSettings && <div className="md:hidden inset-0 fixed"></div>}

      {showSettings && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowSettings(false)}
        ></div>
      )}

      {showSettings && (
        <ul className="absolute z-50 text-white bg-pink-950  right-5 top-[70px] lg:top-[67px] p-3 rounded-lg text-center">
          <li
            className="px-2 py-1 hover:bg-red-800 rounded-lg cursor-pointer"
            onClick={() => {
              setShowEditUsername(true);
              setShowSettings(false);
            }}
          >
            Edit Username
          </li>
          <li
            className="px-2 py-1 hover:bg-red-800 rounded-lg cursor-pointer"
            onClick={() => {
              setShowSettings(false);
              handleLogout();
            }}
          >
            Logout
          </li>
        </ul>
      )}

      {showEditUsername && (
        <EditUsername setShowEditUsername={setShowEditUsername} />
      )}

      <div className="hidden md:flex items-center justify-between px-5 py-1.5 bg-red-950 text-pink-100 text-lg w-full overflow-hidden lg:gap-20 gap-16">
        <img
          className="w-[65px] h-[50px] rounded-lg border border-black object-contain bg-white"
          src={logo}
          alt="MBeautyQueen Logo 1"
        />

        <ul className="flex gap-5 items-center h-[40px] text-xs lg:text-[14px]">
          <li
            className={`navbarli lg:w-[110px] md:w-[100px] ${
              isActive("/") ? "bg-red-800 shadow-lg" : ""
            }`}
          >
            <Link to={"/"}>Home</Link>
          </li>

          <li
            className={`navbarli lg:w-[110px] ${
              isActive("/services") ? "bg-red-800 shadow-lg" : ""
            }`}
          >
            <Link to={"/services"}>Services</Link>
          </li>

          <li
            className={`navbarli lg:w-[110px] ${
              isActive("/reservation") ? "bg-red-800 shadow-lg" : ""
            }`}
          >
            <Link to={"/reservation"}>Reservation</Link>
          </li>

          <li
            className={`navbarli lg:w-[110px] ${
              isActive("/about") ? "bg-red-800 shadow-lg" : ""
            }`}
          >
            <Link to={"/about"}>About Us</Link>
          </li>

          <li
            className={`navbarli lg:w-[110px] ${
              isActive("/contact") ? "bg-red-800 shadow-lg" : ""
            }`}
          >
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>

        {user ? (
          <div
            className="w-[50px] h-[50px] cursor-pointer"
            onClick={() => setShowSettings(!showSettings)}
          >
            <img src={settingIcon} alt="Setting Icon" />
          </div>
        ) : (
          <div
            className="bg-green-600 text-white px-3 py-1 rounded-lg cursor-pointer h-[35px] lg:h-[40px] flex items-center hover:bg-green-800 hover:shadow-[2px_2px_1px_black]"
            onClick={() => nav("/login")}
          >
            Sign In
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
