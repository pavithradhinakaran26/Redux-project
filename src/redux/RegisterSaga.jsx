import { put, takeLatest } from "redux-saga/effects";
import { REGISTER_USER } from "../actions/userTypes";
import { registerUserSuccess, registerUserFailure } from "../reducers/userSlice";

function* RegisterSaga(action) {
  try {
    const response = yield fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });

    const data = yield response.json();
    yield put(registerUserSuccess(data));
  } catch (error) {
    yield put(registerUserFailure(error.message));
  }
}

export function* watchRegisterUser() {
  yield takeLatest(REGISTER_USER, RegisterSaga);
}