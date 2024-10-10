import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./pageSlice";
import articlesSlice from "./articlesSlice";

const store = configureStore({
  reducer: {
    page: pageSlice,
    articles: articlesSlice,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch