import { call, put, select, takeLatest } from 'redux-saga/effects';

import { API } from '../../network';
import { LOGIN } from 'containers/App/constants';
import { LOCAL_STORAGE_ACCOUNT_KEY } from './constants';
import { loginSuccess, loginError } from 'containers/App/actions';
import { reactLocalStorage } from '../../utils';

export function* doLogin(args) {
  try {
    // Call our request helper (see 'utils/request')
    const deviceId = yield call(API.getDeviceId);
    const account = yield call(API.login, args.loginInfo, deviceId);
    yield put(loginSuccess(account));
    yield call(reactLocalStorage.setObject, LOCAL_STORAGE_ACCOUNT_KEY, account.responseData);
  } catch (err) {
    yield put(loginError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN, doLogin);
}
