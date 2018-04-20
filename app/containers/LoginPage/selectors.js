import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = (state) => state.get('loginPage');

const selectGlobal = (state) => state.get('global');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginPage
 */

const makeSelectNotification = () => createSelector(
  selectGlobal,
  (state) => state.get('notifications')
);

export {
  selectLoginPageDomain,
  selectGlobal,
  makeSelectNotification
};
