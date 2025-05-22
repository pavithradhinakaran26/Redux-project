import { put, takeLatest } from "redux-saga/effects";
import {
  REGISTER_USER_REQUEST,
} from "./UserType";
import {
  registerUserSuccess,
  registerUserFailure,
} from "./UserAction";

function* RegisterSaga(action) {
  try {
    const response = yield fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payload), 
    });

    const data = yield response.json();
    yield put(registerUserSuccess(data));
  } catch (error) {
    yield put(registerUserFailure(error.message));
  }
}

export function* watchRegisterUser() {
  yield takeLatest(REGISTER_USER_REQUEST, RegisterSaga);
}