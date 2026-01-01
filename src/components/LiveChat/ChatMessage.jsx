import { BiSolidUserCircle } from "react-icons/bi";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start gap-3 py-2 px-2 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors">
      <BiSolidUserCircle className="h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-medium text-gray-700 dark:text-gray-300">
            {name}
          </span>
          <span className="text-[11px] text-gray-500 dark:text-gray-500">
            2 min ago
          </span>
        </div>
        <p className="text-sm text-gray-900 dark:text-white mt-0.5 break-words">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
