import { HiOutlineStatusOnline, HiOutlineStatusOffline } from "react-icons/hi";

interface OnlineStatusProps {
  isOnline: boolean;
}

const OnlineStatus: React.FC<OnlineStatusProps> = ({ isOnline }) => {
  return (
    <div
      className={`flex justify-center items-center h-10 w-10 rounded-full ${
        isOnline ? "hover:bg-[#34a0a4]/[0.7]" : "hover:bg-[#f2bad5]/[0.4]"
      }`}
    >
      {isOnline ? (
        <HiOutlineStatusOnline className="text-[#1795a8] dark:text-[#7cf6fd] text-xl" />
      ) : (
        <HiOutlineStatusOffline className="text-[#f74a8a] text-xl" />
      )}
    </div>
  );
};

export default OnlineStatus;
