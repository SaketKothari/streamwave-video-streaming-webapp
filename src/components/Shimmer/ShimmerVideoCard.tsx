const ShimmerVideoCard: React.FC = () => {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="aspect-video rounded-xl bg-gray-300 dark:bg-gray-700">
        {/*Thumbnail*/}
      </div>

      <div className="flex mt-3 gap-3">
        <div className="h-9 w-9 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0">
          {/*Avatar*/}
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full">
            {/*Video Title*/}
          </div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4">
            {/*Video Title line 2*/}
          </div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mt-1">
            {/*Author Details*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoCard;
