import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./pageSlice";
import articlesSlice from "./articlesSlice";
import favouritesSlice from "./favouritesSlice"
import filterSlice from './filterSlice'

const store = configureStore({
  reducer: {
    page: pageSlice,
    articles: articlesSlice,
    favourites: favouritesSlice,
    filterValue: filterSlice
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch