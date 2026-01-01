import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies?.length > 0 && (
        <div className="ml-12 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

export default CommentList;
