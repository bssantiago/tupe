import { createSelector } from 'reselect';

/**
 * Direct selector to the forecastContainer state domain
 */
const selectForecastContainerDomain = () => state => state.get('forecastContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ForecastContainer
 */

const selectForecastContainer = () => createSelector(
  selectForecastContainerDomain(),
  (substate) => substate.toJS()
);

export default selectForecastContainer;
export {
  selectForecastContainerDomain,
};
