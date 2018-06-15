import { createSelector } from 'reselect';

/**
 * Direct selector to the wccontainer state domain
 */
const selectWccontainerDomain = () => state => state.get('wccontainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Wccontainer
 */

const selectWccontainer = () => createSelector(
  selectWccontainerDomain(),
  (substate) => substate.toJS()
);

export default selectWccontainer;
export {
  selectWccontainerDomain,
};
