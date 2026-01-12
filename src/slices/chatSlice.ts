import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/constants";
import type { ChatMessage, ChatState } from "../types";

const initialState: ChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      if (state.messages.length >= LIVE_CHAT_COUNT) {
        // If the number of messages exceeds or is equal to LIVE_CHAT_COUNT,
        // remove the oldest message.
        state.messages.shift();
      }
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
