import { configureStore } from "@reduxjs/toolkit";

import chatSlice from "../slices/chatSlice";
import searchSlice from "../slices/searchSlice";

const store = configureStore({
  reducer: {
    chat: chatSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
