/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SHOW_ALERT
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  account: false,
  userData: {
    repositories: false,
  },
  systemAlert: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOGIN:
      return state
        .set('loading', true)
        .set('account', false);
    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('account', action.response.responseData);
    case LOGIN_ERROR:
      return state
        .set('loading', false);
    case SHOW_ALERT:
      return state
        .set('systemAlert', action.message);
    default:
      return state;
  }
}

export default appReducer;
