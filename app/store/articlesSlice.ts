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
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const q = 'bitcoin'
    // const qInTitle =  
    const from = '2023-09-01'
    const to = '2023-10-01'
    const sortBy = 'popularity'
    const pageSize = '10'
    const page = '1'
    const language = 'en'

    // const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`
    const url = `https://newsapi.org/v2/everything?q=${q}&from=${from}&page=${page}&to=${to}&sortBy=${sortBy}&language=${language}&pageSize=${pageSize}&apiKey=${API_KEY}`

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json()

      return data.articles

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