import useUserStore from "../store/useUserStore.js";
import { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../components/Loading.jsx";

import { getUsers, saveUsers, saveCurrentUser } from "../utils/mockDB.js";

const EditUsername = ({ setShowEditUsername }) => {
  const [username, setUsername] = useState("");
  const { user, setUser } = useUserStore();

  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = () => {
    setIsLoading(true);

    if (!username.trim()) {
      toast.error("Please enter a username.");
      setIsLoading(false);
      return;
    }

    const users = getUsers();

    const usernameTaken = users.some(
      (u) => u.username === username.trim() && u.email !== user.email
    );

    if (usernameTaken) {
      toast.error("Username already taken.");
      setIsLoading(false);
      return;
    }

    const updatedUsers = users.map((u) =>
      u.email === user.email ? { ...u, username: username.trim() } : u
    );

    saveUsers(updatedUsers);

    const updatedUser = { ...user, username: username.trim() };
    saveCurrentUser(updatedUser);
    setUser(updatedUser);

    toast.success("Username updated!");
    setIsLoading(false);
    setShowEditUsername(false);
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center p-4 bg-black/30 z-50">
      {isLoading && <Loading />}

      <div className="bg-pink-950 py-5 px-7 md:py-10 md:px-16 rounded-lg text-white flex flex-col items-center gap-3 md:gap-4">
        <h3 className="text-lg md:text-xl">EDIT USERNAME</h3>

        <input
          type="text"
          className="rounded outline-none mb-2 md:mb-1 px-2 py-1 text-center text-black md:text-lg"
          placeholder={user?.username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="flex gap-3 md:text-lg">
          <button
            className="bg-red-700 px-3 py-1 rounded-lg hover:shadow-[1px_1px_1px_black] md:px-5 hover:bg-red-800"
            onClick={() => setShowEditUsername(false)}
          >
            Cancel
          </button>

          <button
            onClick={handleEdit}
            className="bg-green-600 hover:bg-green-800 px-3 py-1 rounded-lg hover:shadow-[1px_1px_1px_black] md:px-5"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUsername;
