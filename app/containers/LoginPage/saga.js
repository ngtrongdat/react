import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { LOCAL_STORAGE_ACCOUNT_KEY } from 'containers/App/constants';
import { API } from '../../network';
import { LOGIN } from 'containers/App/constants';
import { loginSuccess, loginError, showAlert } from 'containers/App/actions';
import { reactLocalStorage } from '../../utils';
import { Messages } from '../../constants';

export function* doLogin(args) {
  try {
    // Call our request helper (see 'utils/request')
    const deviceId = yield call(API.getDeviceId);
    const account = yield call(API.login, args.loginInfo, deviceId);
    yield put(loginSuccess(account));
    yield call(reactLocalStorage.setObject, LOCAL_STORAGE_ACCOUNT_KEY, account.responseData);
    yield put(push('/'));
    yield put(showAlert({type: 'success', message: Messages.loginSuccess}));
  } catch (err) {
    yield put(loginError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN, doLogin);
}
