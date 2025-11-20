import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://192.168.100.32/api",
  withCredentials: true,
});

export default axiosInstance;
