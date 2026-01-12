import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { AiFillLike } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

import { abbreviateNumber } from "js-abbreviation-number";
import ReactPlayer from "react-player";

import { DataContext } from "../context/ApiContext";
import { fetchDataFromApi } from "../utils/api";
import type { DataContextType, Video, RelatedVideosResponse } from "../types";

import CommentContainer from "../components/Comments/CommentContainer";
import ShimmerVideoCardSuggestion from "../components/Shimmer/ShimmerVideoCardSuggestion";
import VideoCardSuggestion from "../components/Videos/VideoCardSuggestion";

const VideoDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [relatedVideos, setRelatedVideos] = useState<
    RelatedVideosResponse | undefined
  >();
  const [video, setVideo] = useState<Video | undefined>();

  const { setLoading } = useContext(DataContext) as DataContextType;

  useEffect(() => {
    document.getElementById("root")?.classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  // fetch Data for that particular video
  const fetchVideoDetails = async () => {
    setLoading(true);
    const data = await fetchDataFromApi<Video>(`video/details/?id=${id}`);
    setVideo(data);
    setLoading(false);
  };

  // fetch Data for the suggestion videos
  const fetchRelatedVideos = async () => {
    setLoading(true);
    const data = await fetchDataFromApi<RelatedVideosResponse>(
      `video/related-contents/?id=${id}`
    );
    setRelatedVideos(data);
    setLoading(false);
  };

  return (
    <div className="flex justify-center h-[calc(100%-56px)] bg-[#f9f9f9] dark:bg-[#0f0f0f] overflow-y-auto">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row p-0 lg:p-6 lg:gap-6">
        <div className="flex flex-col flex-1 lg:max-w-[calc(100%-360px)] xl:max-w-[calc(100%-420px)]">
          <div className="aspect-video w-full bg-black">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
            />
          </div>

          <div className="px-4 lg:px-0 py-3">
            <h1 className="text-gray-900 dark:text-white font-semibold text-lg md:text-xl line-clamp-2">
              {video?.title}
            </h1>

            <div className="flex justify-between flex-col md:flex-row mt-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 flex-shrink-0">
                  <img
                    src={video?.author?.avatar[0]?.url}
                    alt="Avatar"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-gray-900 dark:text-white text-sm font-medium flex items-center gap-1">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-gray-500 text-xs" />
                    )}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    {video?.author?.stats?.subscribersText}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <button className="flex items-center gap-2 h-9 px-4 rounded-full bg-gray-100 dark:bg-[#272727] hover:bg-gray-200 dark:hover:bg-[#3a3a3a] transition-colors text-gray-900 dark:text-white font-medium">
                  <AiFillLike className="text-lg" />
                  <span>{abbreviateNumber(video?.stats?.likes ?? 0, 2)}</span>
                </button>
                <button className="flex items-center gap-2 h-9 px-4 rounded-full bg-gray-100 dark:bg-[#272727] hover:bg-gray-200 dark:hover:bg-[#3a3a3a] transition-colors text-gray-900 dark:text-white font-medium">
                  <FaEye className="text-lg" />
                  <span>{abbreviateNumber(video?.stats?.views ?? 0, 2)}</span>
                </button>
              </div>
            </div>

            <CommentContainer />
          </div>
        </div>

        <div className="flex flex-col gap-2 px-4 lg:px-0 pb-6 lg:w-[340px] xl:w-[400px]">
          <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2 hidden lg:block">
            Related Videos
          </h3>
          {relatedVideos === undefined
            ? Array(15)
                .fill("")
                .map((_, index) => {
                  return <ShimmerVideoCardSuggestion key={index} />;
                })
            : relatedVideos?.contents?.map((item, index) => {
                if (item?.type !== "video") return null;
                return <VideoCardSuggestion key={index} video={item?.video} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
