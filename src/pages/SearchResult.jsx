import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { DataContext } from "../context/ApiContext";
import { fetchDataFromApi } from "../utils/api";

import Sidebar from "../components/Sidebar/Sidebar";
import ShimmerVideoSearchResult from "../components/Shimmer/ShimmerVideoSearchResult";
import VideoCardSearchResult from "../components/Videos/VideoCardSearchResult";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(DataContext);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    setLoading(true);
    const data = await fetchDataFromApi(`search/?q=${searchQuery}`);
    // console.log(data);
    setResult(data?.contents);
    setLoading(false);
  };

  return (
    <div className="flex h-[calc(100%-56px)]">
      <Sidebar />

      <div className="grow w-[calc(100%-220px)] h-full overflow-y-auto bg-[#f9f9f9] dark:bg-[#0f0f0f]">
        <div className="flex flex-col gap-2 p-4 md:p-6 max-w-5xl min-h-full">
          {result === ""
            ? Array(20)
                .fill("")
                .map((e, index) => {
                  return <ShimmerVideoSearchResult key={index} />;
                })
            : result?.map((item, index) => {
                if (item?.type !== "video") return false;
                return (
                  <VideoCardSearchResult key={index} video={item?.video} />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
