import CommentList from "./CommentList";
import { commentsData } from "../../utils/commentData";

const CommentContainer: React.FC = () => {
  return (
    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-base font-medium text-gray-900 dark:text-white mb-4">
        {commentsData.length} Comments
      </h2>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
