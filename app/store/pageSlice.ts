import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPageState } from "../types/reduxTypes";

const initialState: IPageState = {
  page: 2
}

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    }
  },
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;