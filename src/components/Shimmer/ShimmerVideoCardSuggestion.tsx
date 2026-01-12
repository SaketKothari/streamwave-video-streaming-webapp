const ShimmerVideoCardSuggestion: React.FC = () => {
  return (
    <div className="flex gap-2 p-1 animate-pulse">
      <div className="flex-shrink-0 w-40 md:w-44 aspect-video rounded-lg bg-gray-300 dark:bg-gray-700">
        {/* Thumbnail */}
      </div>

      <div className="flex flex-col flex-1 py-0.5 gap-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full">
          {/* Video Title */}
        </div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4">
          {/* Video Title line 2 */}
        </div>
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2">
          {/* Channel name */}
        </div>
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3">
          {/* views and date */}
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoCardSuggestion;
