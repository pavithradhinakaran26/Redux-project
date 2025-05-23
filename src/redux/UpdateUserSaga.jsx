import { put } from "redux-saga/effects";
import { updateUserSuccess, updateUserFailure } from "./UserAction";

export function* updateUserSaga(action) {
  try {
    const response = yield fetch(`https://jsonplaceholder.typicode.com/users/${action.payload.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payload),
    });

    const data = yield response.json();
    yield put(updateUserSuccess(data));
  } catch (error) {
    yield put(updateUserFailure(error.message));
  }
}
