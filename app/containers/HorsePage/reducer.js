/*
 *
 * HorsePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_HORSE_LIST,
  LOAD_HORSE_LIST_SUCCESS
} from './constants';

const initialState = fromJS({
  horsesList: false
});

function horsePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_HORSE_LIST:
      return state;
    case LOAD_HORSE_LIST_SUCCESS:
      return state
        .set('horsesList', action.horsesList);
    default:
      return state;
  }
}

export default horsePageReducer;
