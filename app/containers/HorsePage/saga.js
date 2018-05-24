// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { LOCAL_STORAGE_ACCOUNT_KEY } from 'containers/App/constants';
import { API } from '../../network';
import { LOAD_HORSE_LIST } from './constants';
import { showAlert } from 'containers/App/actions';
import { getHorsesList, getHorsesListSuccess } from './actions';
import { reactLocalStorage } from '../../utils';
import { Messages } from '../../constants';

export function* getHorseList(args) {
  try {
    const horsesListResp = yield call(API.getHorsesList, {});
    yield put(getHorsesListSuccess(horsesListResp.responseData));
  } catch (err) {
    //yield put(loginError(err));
  }
}


// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LOAD_HORSE_LIST, getHorseList);
  // See example in containers/HomePage/saga.js
}
