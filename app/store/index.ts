import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./articlesSlice";

const store = configureStore({
  reducer: {
    articles: articlesSlice,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch