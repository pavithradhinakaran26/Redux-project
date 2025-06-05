import { createSlice } from '@reduxjs/toolkit';

const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    username: '',
    password: '',
    isLoggedIn: false,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    loginRequest: (state, action) => {
    },
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.username = '';
      state.password = '';
      state.isLoggedIn = false;
    },
  },
});

export const { setUsername, setPassword, loginRequest, loginSuccess, logout } = LoginSlice.actions;
export default LoginSlice.reducer;