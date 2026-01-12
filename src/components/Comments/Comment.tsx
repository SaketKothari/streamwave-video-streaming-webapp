import { FaUserCircle } from "react-icons/fa";
import type { CommentData } from "../../types";

interface CommentProps {
  data: CommentData;
}

const Comment: React.FC<CommentProps> = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex gap-3 py-3">
      <FaUserCircle className="w-10 h-10 flex-shrink-0 text-gray-400 dark:text-gray-600" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-medium text-gray-900 dark:text-white">
            {name}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-500">
            2 days ago
          </span>
        </div>
        <p className="text-sm text-gray-800 dark:text-gray-200 mt-1">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
