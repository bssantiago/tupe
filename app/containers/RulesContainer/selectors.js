import { createSelector } from 'reselect';

/**
 * Direct selector to the rulesContainer state domain
 */
const selectRulesContainerDomain = () => state => state.get('rulesContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RulesContainer
 */

const selectRulesContainer = () => createSelector(
  selectRulesContainerDomain(),
  (substate) => substate.toJS()
);

export default selectRulesContainer;
export {
  selectRulesContainerDomain,
};
