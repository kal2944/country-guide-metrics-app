import { createSlice } from '@reduxjs/toolkit';
import MyApi from './api';

const initialState = {
  countries: [],

};

const CountriesSlice = createSlice({
  name: 'countriespage',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(MyApi.fulfilled, (state, action) => ({
      ...state,
      countries: action.payload,
    }));
  },
});

export default CountriesSlice.reducer;
