import { configureStore } from '@reduxjs/toolkit';
import countries from './countriesSlice';

const store = configureStore({
  reducer: {
    countries,
  },
});

export default store;
