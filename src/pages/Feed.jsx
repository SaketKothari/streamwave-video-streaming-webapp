import { useContext, useEffect } from "react";
import { DataContext } from "../context/ApiContext";

import ShimmerVideoCard from "../components/Shimmer/ShimmerVideoCard";
import Sidebar from "../components/Sidebar/Sidebar";
import VideoCard from "../components/Videos/VideoCard";

import Offline from "../shared/Offline";
import useOnline from "../utils/useOnline";

const Feed = () => {
  const { loading, searchResults } = useContext(DataContext);
  // console.log(searchResults);

  const isOnline = useOnline();

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex h-[calc(100%-56px)]">
      <Sidebar />

      {!isOnline && (
        <div className="grow w-[calc(100%-220px)] h-full overflow-y-auto bg-[#0f0f0f]">
          <Offline />
        </div>
      )}
      {isOnline && (
        <div className="grow w-[calc(100%-220px)] h-full overflow-y-auto bg-[#f9f9f9] dark:bg-[#0f0f0f]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 p-4 md:p-6 max-w-[1800px] mx-auto">
            {/* when data fetching is done means loading is false and that means we get searchResults */}
            {loading
              ? Array(12)
                  .fill("")
                  .map((e, index) => {
                    return <ShimmerVideoCard key={index} />;
                  })
              : searchResults.map((item, index) => {
                  if (item.type !== "video") return false;
                  return <VideoCard key={index} video={item?.video} />;
                })}
          </div>
          {!loading && searchResults && searchResults.length > 0 && (
            <div className="text-center py-8 pb-12">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                You've reached the end! 🎉
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Feed;
