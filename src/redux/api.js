import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://restcountries.com/v2/all';

const MyApi = createAsyncThunk('MY API', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return error;
  }
});

export default MyApi;
