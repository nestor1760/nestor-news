import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticlesState } from "../types/reduxTypes";
import { IArticle } from "../types/types";

const initialState: IArticlesState = {
  data: [],
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<IArticle[]>) => {
      const newArticles = action.payload.filter(newArticle =>
        !state.data.some(existingArticle => existingArticle.title === newArticle.title)
      );
      state.data = [...state.data, ...newArticles];
    },
  },
});

export const { setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;