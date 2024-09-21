import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IArticlesState } from "../types/reduxTypes";
import { IArticle } from "../types/types";


const initialState: IArticlesState = {
  articles: [],
  isLoading: false,
  error: undefined,
}

export const fetchArticles = createAsyncThunk<IArticle[]>(
  'articles/fetchArticles',

  async () => {
    const url = process.env.NEXT_PUBLIC_ARTICLES_ALL_URL as string

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: IArticle[] = await response.json()

      return data

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Fetch error: ${error.message}`);
      } else {
        throw new Error('Unexpected error occurred');
      }
    }
  }
)

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false
      state.articles = action.payload
    })
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message || 'Unknown error occurred'
    })
  },
});

export default articlesSlice.reducer;