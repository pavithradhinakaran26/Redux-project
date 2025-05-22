// // // import { configureStore } from '@reduxjs/toolkit';
// // // import createSagaMiddleware from 'redux-saga';
// // // import LoginReducer from './redux/LoginSlice';
// // // import LoginSaga from './redux/LoginSaga';


// // // const sagaMiddleware = createSagaMiddleware();

// // // const store = configureStore({
// // //   reducer: {
// // //     Login: LoginReducer,
// // //   },
// // //   middleware: (getDefaultMiddleware) =>
// // //     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// // // });

// // // sagaMiddleware.run(LoginSaga);

// // // export default store;


// // import { configureStore } from '@reduxjs/toolkit';
// // import createSagaMiddleware from 'redux-saga';
// // import LoginSlice from './redux/LoginSlice';
// // import LoginSaga from './redux/LoginSaga';

// // const sagaMiddleware = createSagaMiddleware();

// // const store = configureStore({
// //   reducer: {
// //     login: LoginSlice,
// //   },
// //   middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// // });

// // sagaMiddleware.run(LoginSaga); // ✅ Correct


// // export default store;

// // import { configureStore } from '@reduxjs/toolkit';
// // import createSagaMiddleware from 'redux-saga';
// // // import LoginSlice from './redux/LoginSlice';
// // // import LoginSaga from './redux/LoginSaga';
// // import LoginSlice from './redux/LoginSlice'
// // import LoginSaga from './redux/LoginSaga'

// // const sagaMiddleware = createSagaMiddleware();

// // const store = configureStore({
// //   reducer: {
// //     login: LoginSlice,
// //   },
// //   middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// // });

// // sagaMiddleware.run(LoginSaga);

// // export default store;




// // import { configureStore } from '@reduxjs/toolkit';
// // import createSagaMiddleware from 'redux-saga';
// // import LoginSlice from '../redux/LoginSlice';

// // import LoginSaga  from './redux/LoginSaga'
 
// // const sagaMiddleware = createSagaMiddleware();

// // const Store = configureStore({
// //   reducer: {
// //     login: LoginSlice,
// //   },
// //   middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// // });

// // sagaMiddleware.run(LoginSaga); 

// // export default Store;


// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import LoginSlice from './reducer/LoginSlice';
// import loginWatcher from './saga/LoginSaga';

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: {
//     login: LoginSlice,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// });

// sagaMiddleware.run(loginWatcher);

// export default store;



// import { configureStore } from '@reduxjs/toolkit';
// import loginReducer from '../redux/LoginSlice';

// const Store = configureStore({
//   reducer: {
//     login: loginReducer,
//   },
// });

// export default Store;



// import createSagaMiddleware from 'redux-saga';
// import { configureStore } from '@reduxjs/toolkit';
// import loginReducer from '../redux/LoginSlice';
// import LoginSaga from '../redux/LoginSaga';
// import { all } from 'redux-saga/effects';

// const sagaMiddleware = createSagaMiddleware();

// function* rootSaga() {
//   yield all([LoginSaga()]);
// }

// const store = configureStore({
//   reducer: {
//     login: loginReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// });

// sagaMiddleware.run(rootSaga);

// export default store;


// import createSagaMiddleware from 'redux-saga';
// import { configureStore } from '@reduxjs/toolkit';
// import LoginReducer from '../redux/LoginSlice'; 
// import { LoginWatcher as LoginSaga } from '../redux/LoginWorker';  
// import { all } from 'redux-saga/effects';


// const sagaMiddleware = createSagaMiddleware();

// function* RootSaga() {
//   yield all([LoginSaga()]);  
// }

// const Store = configureStore({
//   reducer: {
//     login: LoginReducer,
//   },
//   middleware: (getDefaultMiddleware) => 
//     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// });

// sagaMiddleware.run(RootSaga);

// export default Store;


// src/redux/Store.js
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../redux/LoginSlice'; 
import { LoginWatcher as LoginSaga } from '../redux/LoginWorker';  
import { watchRegisterUser } from '../redux/RegisterWorker'; // ✅ Add this
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

// ✅ Combine both sagas here
function* RootSaga() {
  yield all([
    LoginSaga(),
    watchRegisterUser() // ✅ Add this line
  ]);
}

const Store = configureStore({
  reducer: {
    login: LoginReducer,
    user: require('./UserSlice').default, // ✅ or import directly at top
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(RootSaga);

export default Store;

