import { put, takeLatest, call } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './loginTypes';
import { loginSuccess, loginFailure } from './loginActions';

function* loginWorker(action) {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
    const data = yield response.json();

    // Assume success always
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure('Login failed ❌'));
  }
}

export function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, loginWorker);
}
