import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { SearchState } from "../types";

const initialState: SearchState = {};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    cacheResults: (state, action: PayloadAction<Record<string, string[]>>) => {
      // Merge objects
      Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
