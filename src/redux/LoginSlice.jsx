import { createSlice } from '@reduxjs/toolkit';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './loginTypes';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LOGIN_SUCCESS, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(LOGIN_FAILURE, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default loginSlice.reducer;
