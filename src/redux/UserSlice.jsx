// src/redux/UserSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { REGISTER_USER_SUCCESS } from "./UserType";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(REGISTER_USER_SUCCESS, (state, action) => {
      state.users.push(action.payload);
    });
  },
});

export default userSlice.reducer;
