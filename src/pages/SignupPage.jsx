import { IoPersonSharp } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

import Loading from "../components/Loading.jsx";
import useUserStore from "../store/useUserStore.js";

import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

import { getUsers, saveUsers, saveCurrentUser } from "../utils/mockDB.js";
import { handleGoogleLogin } from "../api/handleGoogleLogin.js";

function generateUniqueUsername(existingUsers) {
  const adjectives = [
    "glam",
    "queen",
    "beauty",
    "blush",
    "lash",
    "brow",
    "style",
    "user",
  ];
  const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNum = Math.floor(10000 + Math.random() * 90000);

  let username = `${randomAdj}_${randomNum}`;

  while (existingUsers.some((u) => u.username === username)) {
    const newNum = Math.floor(10000 + Math.random() * 90000);
    username = `${randomAdj}_${newNum}`;
  }

  return username;
}

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    // VALIDATION
    if (!email.trim() || !password.trim()) {
      toast.error("All fields are required.");
      setIsLoading(false);
      return;
    }

    if (password.trim().length < 8) {
      toast.error("Password must be at least 8 characters.");
      setIsLoading(false);
      return;
    }

    const users = getUsers();
    const exists = users.find((u) => u.email === email.trim());

    if (exists) {
      toast.error("Email already registered");
      setIsLoading(false);
      return;
    }

    // CREATE USER
    const username = generateUniqueUsername(users);

    const newUser = {
      id: String(Date.now()),
      email: email.trim(),
      password: password.trim(),
      username,
    };

    saveUsers([...users, newUser]);
    saveCurrentUser(newUser);
    setUser(newUser);

    toast.success("Account created!");
    setIsLoading(false);
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center h-[100dvh] w-[100vw] overflow-hidden lg:justify-center ">
      {isLoading && <Loading />}

      <div className="flex-1 flex flex-col items-center w-full lg:flex-none lg:w-[50%] lg:h-[100%] pink-bg lg:py-[20px] justify-center">
        <h1 className="font-bold red-color text-2xl mb-2 lg:text-2xl lg:mb-[25px]">
          Create an Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-[90%] flex flex-col items-center"
        >
          <div className="w-[85%] sm:w-[60%] lg:w-[80%] p-2 flex flex-col gap-3 items-center">
            <div className="auth-input md:w-[60%] md:text-lg lg:bg-white lg:text-xl lg:w-[85%] lg:p-[5px]">
              <IoPersonSharp color="darkred" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="outline-none"
              />
            </div>

            <div className="auth-input md:w-[60%] md:text-lg lg:bg-white lg:text-xl lg:w-[85%] lg:p-[5px]">
              <IoIosLock color="darkred" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="outline-none"
              />
            </div>

            <button
              type="submit"
              className="red-bg w-full p-2 rounded-lg hover:bg-red-500 mt-1 md:w-[60%] md:text-lg lg:w-[85%]"
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="text-sm my-2">OR</p>

        <div
          onClick={handleGoogleLogin}
          className="flex items-center justify-center py-1.5 rounded-md gap-2 bg-red-200 w-[71%] sm:w-[51%] red-color text-md hover:bg-red-100 md:w-[45%] md:text-lg lg:bg-white lg:w-[58%] lg:shadow-md lg:py-2"
        >
          <FcGoogle /> Sign In with Google
        </div>

        <p className="mt-7 text-sm red-color md:text-lg">
          Already have an account?{" "}
          <Link to={"/login"} className="font-bold">
            Log in.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
