import { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { addMessage } from "../../slices/chatSlice";

const EMOJIS = [
  "😀",
  "😂",
  "😍",
  "🥰",
  "😎",
  "🤩",
  "😊",
  "🙌",
  "👍",
  "👏",
  "🔥",
  "❤️",
  "💯",
  "🎉",
  "✨",
  "💪",
  "😮",
  "😢",
  "😡",
  "🤔",
  "👀",
  "🙏",
  "💀",
  "😭",
  "🤣",
  "😅",
  "🥳",
  "😇",
  "🤗",
  "😏",
  "🫡",
  "💜",
];

const ChatInputForm = ({ dispatch }) => {
  const [liveMessage, setLiveMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!liveMessage.trim()) return;
    dispatch(
      addMessage({
        name: "You",
        message: liveMessage,
      })
    );
    setLiveMessage("");
    setShowEmojiPicker(false);
  };

  const addEmoji = (emoji) => {
    setLiveMessage((prev) => prev + emoji);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center gap-2 p-3 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f]"
    >
      <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="avatar"
        />
      </div>
      <div className="flex-1 flex items-center gap-2 bg-gray-100 dark:bg-[#272727] rounded-full px-4 py-2">
        <input
          placeholder="Send a message..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white outline-none placeholder:text-gray-500"
        />
        <div className="relative" ref={emojiPickerRef}>
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <BsEmojiSmile className="h-5 w-5" />
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-10 right-0 bg-white dark:bg-[#272727] rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-3 w-64 z-50">
              <div className="grid grid-cols-8 gap-1">
                {EMOJIS.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => addEmoji(emoji)}
                    className="text-xl hover:bg-gray-100 dark:hover:bg-gray-600 rounded p-1 transition-colors"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        type="submit"
        disabled={!liveMessage.trim()}
        className="h-9 w-9 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors"
      >
        <IoSend className="h-4 w-4 text-white" />
      </button>
    </form>
  );
};

export default ChatInputForm;
