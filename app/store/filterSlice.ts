import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterState } from "../types/reduxTypes";

const initialState: IFilterState = {
  filterValue: '',
  debouncedValue: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterValue: (state, action: PayloadAction<string>) => {
      state.filterValue = action.payload
    },
    setDebouncedValue: (state, action: PayloadAction<string>) => {
      state.debouncedValue = action.payload;
    },
  },
});

export const { setFilterValue, setDebouncedValue } = filterSlice.actions;
export default filterSlice.reducer;