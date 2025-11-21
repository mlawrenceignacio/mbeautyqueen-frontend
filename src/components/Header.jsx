import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useUserStore from "../store/useUserStore.js";

import menuIcon from "../assets/images/menu.png";
import logo from "../assets/images/logo.jpg";
import settingIcon from "../assets/images/settings.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const nav = useNavigate();

  const user = useUserStore((state) => state.user);

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
          className={`fixed top-16 right-4 z-50 bg-pink-200/50 backdrop-blur-md py-3 px-5 rounded-lg border border-black w-[200px] flex flex-col items-center text-center gap-2 transition-all duratiom-300 ${
            showMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <li className="dropdownli">
            <a href="/home">HOME</a>
          </li>
          <li className="dropdownli">
            <a href="/services">SERVICES</a>
          </li>
          <li className="dropdownli">
            <a href="/reservation">RESERVATION</a>
          </li>
          <li className="dropdownli">
            <a href="/about">ABOUT US</a>
          </li>
          <li className="dropdownli">
            <a href="/contact">CONTACT US</a>
          </li>
          {user && <li className="dropdownli">SETTINGS</li>}
        </ul>
      </div>

      <div className="hidden md:flex items-center justify-between px-5 py-1.5 bg-red-950 text-pink-100 text-lg w-full overflow-hidden lg:gap-20 gap-16">
        <img
          className="w-[65px] h-[50px] rounded-lg border border-black object-contain bg-white"
          src={logo}
          alt="MBeautyQueen Logo 1"
        />

        <ul className="flex gap-1 items-center h-[40px] text-xs lg:text-[14px]">
          <li className="navbarli lg:w-[110px] md:w-[100px]">
            <a href="/home">HOME</a>
          </li>
          <li className="navbarli lg:w-[110px]">
            <a href="/services">SERVICES</a>
          </li>
          <li className="navbarli lg:w-[110px]">
            <a href="/reservation">RESERVATION</a>
          </li>
          <li className="navbarli lg:w-[110px] ">
            <a href="/about">ABOUT US</a>
          </li>
          <li className="navbarli lg:w-[110px]">
            <a href="/contact">CONTACT US</a>
          </li>
        </ul>

        {user ? (
          <div className="w-[50px] h-[50px] cursor-pointer">
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
