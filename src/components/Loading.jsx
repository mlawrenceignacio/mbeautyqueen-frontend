import { RiLoader4Fill } from "react-icons/ri";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-50 transition-opacity duration-300">
      <RiLoader4Fill className="text-5xl text-red-600 animate-spin" />
    </div>
  );
};

export default Loading;
