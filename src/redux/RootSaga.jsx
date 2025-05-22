import { all } from 'redux-saga/effects';
import LoginWatcher from '../redux/LoginWorker';


export default function* RootSaga() {
  yield all([
    LoginWatcher(),
    RegisterWorker(),
  ]);
}