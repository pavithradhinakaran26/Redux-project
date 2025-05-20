// import { takeLatest, put, call } from 'redux-saga/effects';
// import { loginSuccess } from '../redux/LoginSlice';

// function loginApi(payload) {
//   return fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   }).then(response => response.json());
// }

// function* handleLogin(action) {
//   try {
//     const response = yield call(loginApi, action.payload);

//     if (response) {
//       yield put(loginSuccess()); 
//     } else {
//       alert('Invalid Credentials ❌');
//     }
//   } catch (error) {
//     console.error('Login error:', error);
//     alert('Login Failed 😓');
//   }
// }

// function* LoginSaga() {
//   yield takeLatest('login/loginRequest', handleLogin);
// }

// export default LoginSaga;