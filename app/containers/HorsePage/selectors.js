import { createSelector } from 'reselect';

/**
 * Direct selector to the horsePage state domain
 */
const selectHorsePageDomain = (state) => state.get('horsePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HorsePage
 */

// const makeSelectHorsePage = () => createSelector(
//   selectHorsePageDomain,
//   (substate) => substate.toJS()
// );

const makeSelectHorseList = () => createSelector(
  selectHorsePageDomain,
  (homeState) => homeState.get('horsesList')
);

//export default makeSelectHorsePage;
export {
  selectHorsePageDomain,
  makeSelectHorseList
};
