import moment from "moment/moment";

interface VideoLengthProps {
  time: number;
}

const VideoLength: React.FC<VideoLengthProps> = ({ time }) => {
  const videoLengthInSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");

  return (
    <div className="absolute bottom-1.5 right-1.5 bg-black/80 py-0.5 px-1.5 text-white text-xs font-medium rounded">
      {videoLengthInSeconds}
    </div>
  );
};

export default VideoLength;
