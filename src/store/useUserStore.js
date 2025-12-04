import { create } from "zustand";
import { getCurrentUser, logoutUser, saveCurrentUser } from "../utils/mockDB";

const useUserStore = create((set) => ({
  user: null,

  loadUser: () => {
    const stored = getCurrentUser();
    set({ user: stored });
  },

  setUser: (user) => {
    saveCurrentUser(user);
    set({ user });
  },

  logout: () => {
    logoutUser();
    set({ user: null });
  },
}));

export default useUserStore;
