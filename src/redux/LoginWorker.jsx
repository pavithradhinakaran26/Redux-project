// import { takeLatest, call, put } from 'redux-saga/effects';
// import { LOGIN_REQUEST } from '../redux/LoginType';
// import { loginSuccess, loginFailure } from '../redux/LoginAction';

// function* loginWorker(action) {
//   try {
//     const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
//     const data = yield response.json();
//     yield put(loginSuccess(data));
//   } catch (error) {
//     yield put(loginFailure('Login failed ❌'));
//   }
// }

// export function* LoginWatcher() {
//   yield takeLatest(LOGIN_REQUEST, loginWorker);
// }

import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { loginSuccess } from './LoginSlice';

function* handleLogin(action) {
  try {
    const { username, password } = action.payload;

   
const response = yield axios.post(
  'https://jsonplaceholder.typicode.com/posts',
  { username, password } 
);


  if (response.status === 200 || response.status === 201) {
  console.log('API response:', response.data); 
  yield put(loginSuccess());
} else {
  alert('Invalid credentials ❌');
}

  } catch (error) {
    console.error('Login error:', error);
  }
}

export function* LoginWatcher() {
  yield takeLatest('login/loginRequest', handleLogin);
}