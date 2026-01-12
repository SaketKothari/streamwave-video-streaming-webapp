const ShimmerVideoSearchResult: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-2 md:p-3 animate-pulse">
      <div className="flex-shrink-0 aspect-video md:w-80 lg:w-96 rounded-xl bg-gray-300 dark:bg-gray-700">
        {/*Thumbnail*/}
      </div>

      <div className="flex flex-col flex-1 gap-3">
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-full">
          {/*Video Title*/}
        </div>
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4">
          {/*Video Title line 2*/}
        </div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3">
          {/* views and Date */}
        </div>

        <div className="hidden md:flex items-center gap-2 mt-1">
          <div className="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-700">
            {/* Avatar */}
          </div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-24">
            {/* Channel Name */}
          </div>
        </div>

        <div className="hidden md:block h-3 bg-gray-200 dark:bg-gray-800 rounded w-full mt-1">
          {/* Description */}
        </div>
        <div className="hidden md:block h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3">
          {/* Description line 2 */}
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoSearchResult;
