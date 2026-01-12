import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addMessage } from "../../slices/chatSlice";
import {
  generateRandomMessage,
  generateRandomName,
} from "../../utils/chatData";
import type { RootState } from "../../store/store";

import ChatInputForm from "./ChatInputForm";
import ChatMessage from "./ChatMessage";
import ChatSidebar from "./ChatSidebar";

const LiveChat: React.FC = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store: RootState) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling
      console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-[calc(100vh-56px)] bg-[#f9f9f9] dark:bg-[#0f0f0f]">
      <div className="flex h-full w-full">
        {/* Mobile chatlist toggle button */}
        <button
          className="peer fixed h-full w-full md:hidden"
          aria-label="mobile-chatlist-toggler"
        ></button>

        <ChatSidebar />

        <div className="flex flex-col h-full w-full md:w-[70%]">
          <div className="flex items-center justify-between gap-2 border-b border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-[#0f0f0f]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="font-medium text-gray-900 dark:text-white">
                Live Chat
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col-reverse bg-white dark:bg-[#0f0f0f]">
            <div className="space-y-1">
              {chatMessages.map((c, i) => (
                <ChatMessage key={i} name={c.name} message={c.message} />
              ))}
            </div>
          </div>

          <ChatInputForm dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
