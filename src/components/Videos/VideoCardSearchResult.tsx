import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import VideoLength from "../../shared/VideoLength";
import type { Video } from "../../types";

interface VideoCardSearchResultProps {
  video: Video | undefined;
}

const VideoCardSearchResult: React.FC<VideoCardSearchResultProps> = ({
  video,
}) => {
  if (!video) return null;

  return (
    <Link to={`/video/${video.videoId}`} className="group">
      <div className="flex flex-col md:flex-row gap-4 p-2 md:p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
        <div className="relative flex-shrink-0 aspect-video md:w-80 lg:w-96 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
          <img
            src={video?.thumbnails[0]?.url}
            alt="thumbnails"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <h3 className="text-base md:text-lg font-medium line-clamp-2 text-gray-900 dark:text-white leading-snug">
            {video?.title}
          </h3>

          <p className="text-xs md:text-sm mt-2 text-gray-600 dark:text-gray-400">
            {`${abbreviateNumber(video?.stats?.views, 2)} views`}
            <span className="mx-1">•</span>
            {video?.publishedTimeText}
          </p>

          <div className="hidden md:flex items-center gap-2 mt-3">
            <div className="h-6 w-6 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 flex-shrink-0">
              <img
                src={video?.author?.avatar[0]?.url}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-gray-500 text-[10px] ml-1" />
              )}
            </p>
          </div>

          <p className="hidden md:block text-xs text-gray-500 dark:text-gray-500 line-clamp-2 mt-3">
            {video?.descriptionSnippet}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCardSearchResult;
