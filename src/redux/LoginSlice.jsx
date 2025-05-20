

// import { createSlice } from '@reduxjs/toolkit';

// const LoginSlice = createSlice({
//   name: 'login',
//   initialState: {
//     username: '',
//     password: '',
//     isLoggedIn: false,
//   },
//   reducers: {
//     setUsername: (state, action) => {
//       state.username = action.payload;
//     },
//     setPassword: (state, action) => {
//       state.password = action.payload;
//     },
//     loginRequest: (state, action) => {
//       // Saga will handle this; no state change here
//     },
//     loginSuccess: (state) => {
//       state.isLoggedIn = true;
//     },
//     logout: (state) => {
//       state.username = '';
//       state.password = '';
//       state.isLoggedIn = false;
//     },
//   },
// });

// export const { setUsername, setPassword, loginRequest, loginSuccess, logout } = LoginSlice.actions;
// export default LoginSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';



const loginSlice = createSlice({
  name: 'login',
  initialState: { isLoggedIn: false },
  reducers: {
    loginRequest: () => {}, // just for Saga trigger
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { loginRequest, loginSuccess } = loginSlice.actions;
export default loginSlice.reducer;
