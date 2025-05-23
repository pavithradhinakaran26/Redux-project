// src/redux/UserAction.js
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "./UserType";

export const registerUserRequest = (userData) => ({
  type: REGISTER_USER_REQUEST,
  payload: userData,
});

export const registerUserSuccess = (response) => ({
  type: REGISTER_USER_SUCCESS,
  payload: response,
});

export const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

export const updateUserRequest = (user) => ({
  type: "UPDATE_USER_REQUEST",
  payload: user,
});

export const updateUserSuccess = (user) => ({
  type: "UPDATE_USER_SUCCESS",
  payload: user,
});

export const updateUserFailure = (error) => ({
  type: "UPDATE_USER_FAILURE",
  payload: error,
});
