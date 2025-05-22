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
