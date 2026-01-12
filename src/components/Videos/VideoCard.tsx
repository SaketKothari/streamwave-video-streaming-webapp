import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../../shared/VideoLength";
import type { Video } from "../../types";

interface VideoCardProps {
  video: Video | undefined;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  if (!video) return null;

  return (
    <Link to={`/video/${video.videoId}`} className="group">
      <div className="flex flex-col">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
          <img
            src={video?.thumbnails[0]?.url}
            alt="thumbnails"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>

        <div className="flex text-black dark:text-white mt-3 gap-3">
          <div className="flex-shrink-0">
            <div className="h-9 w-9 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700">
              <img
                src={video?.author?.avatar[0]?.url}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col min-w-0 flex-1">
            <h3 className="text-sm font-medium line-clamp-2 leading-5 text-gray-900 dark:text-white">
              {video?.title}
            </h3>

            <p className="text-[13px] mt-1 text-gray-600 dark:text-gray-400 flex items-center hover:text-gray-900 dark:hover:text-gray-200">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-gray-600 dark:text-gray-500 text-xs ml-1" />
              )}
            </p>

            <p className="text-[13px] text-gray-600 dark:text-gray-400">
              {`${abbreviateNumber(video?.stats?.views, 2)} views`}
              <span className="mx-1">•</span>
              {video?.publishedTimeText}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
