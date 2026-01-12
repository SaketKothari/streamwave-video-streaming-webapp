import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const HeaderLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center shadow-md shadow-red-500/20">
        <FaPlay className="text-white text-xs md:text-sm ml-0.5" />
      </div>
      <span className="hidden sm:block text-lg md:text-xl font-bold text-black dark:text-white tracking-tight">
        Streamwave
      </span>
    </Link>
  );
};

export default HeaderLogo;
