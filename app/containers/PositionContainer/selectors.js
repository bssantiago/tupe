import { createSelector } from 'reselect';

/**
 * Direct selector to the positionContainer state domain
 */
const selectPositionContainerDomain = () => state => state.get('positionContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PositionContainer
 */

const selectPositionContainer = () => createSelector(
  selectPositionContainerDomain(),
  (substate) => substate.toJS()
);

export default selectPositionContainer;
export {
  selectPositionContainerDomain,
};
