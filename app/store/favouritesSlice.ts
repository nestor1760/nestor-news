import { IArticle } from './../types/types';
import { createSlice } from '@reduxjs/toolkit';
import { IFavouritesState } from '../types/reduxTypes';

const saveToLocalStorage = (favouritesList: IArticle[]) => {
  localStorage.setItem('favouritesList', JSON.stringify(favouritesList));
};

const loadFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const storedFavouritesList = localStorage.getItem('favouritesList');
    return storedFavouritesList ? JSON.parse(storedFavouritesList) : [];
  }
  return [];
};

const initialState: IFavouritesState = {
  data: loadFromLocalStorage(),
}

const favouritesSlice = createSlice({
  name: 'favouritesList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.data.push(action.payload);
      saveToLocalStorage(state.data);
    },
    removeItem: (state, action) => {
      state.data = state.data.filter(item => item.title !== action.payload);
      saveToLocalStorage(state.data);
    },
  },
});

export const { addItem, removeItem } = favouritesSlice.actions;

export default favouritesSlice.reducer;
