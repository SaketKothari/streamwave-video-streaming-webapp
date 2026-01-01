import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import VideoLength from "../../shared/VideoLength";

const VideoCardSuggestion = ({ video }) => {
  return (
    <Link to={`/video/${video.videoId}`} className="group">
      <div className="flex gap-2 p-1 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
        <div className="relative flex-shrink-0 w-40 md:w-44 aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
          <img
            src={video?.thumbnails[0]?.url}
            alt="thumbnails"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>

        <div className="flex flex-col min-w-0 flex-1 py-0.5">
          <h4 className="text-sm font-medium line-clamp-2 leading-5 text-gray-900 dark:text-white">
            {video?.title}
          </h4>

          <p className="text-xs mt-1.5 text-gray-600 dark:text-gray-400 flex items-center">
            {video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="text-gray-500 text-[10px] ml-1" />
            )}
          </p>

          <p className="text-xs text-gray-600 dark:text-gray-400">
            {`${abbreviateNumber(video?.stats?.views, 2)} views`}
            <span className="mx-1">•</span>
            {video?.publishedTimeText}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCardSuggestion;
