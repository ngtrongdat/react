/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const LOAD_REPOS = 'app/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'app/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'app/App/LOAD_REPOS_ERROR';
export const LOGIN = 'app/App/LOGIN';
export const LOGIN_SUCCESS = 'app/App/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'app/App/LOGIN_ERROR';