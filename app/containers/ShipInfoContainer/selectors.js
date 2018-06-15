import { createSelector } from 'reselect';
import selectNavigationContainer from '../NavigationContainer/selectors';
// import { find } from 'lodash';

/**
 * Direct selector to the shipInfoContainer state domain
 */
const selectShipInfoContainerDomain = () => state => state.get('shipInfoContainer');

/**
 * Other specific selectors
 */
const selectRouteShip = () => (state, props) => props.params.shipName;

const selectShip = () => createSelector(
  selectNavigationContainer(),
  selectRouteShip(),
  (navigationState, shipName) => {
    const selectedShip = navigationState.ships.find(s => s.url === parseInt(shipName, 10));
    return selectedShip || {
      url: '',
    };
  }
);

/**
 * Default selector used by ShipInfoContainer
 */

const selectShipInfoContainer = () => createSelector(
  selectShipInfoContainerDomain(),
  selectShip(),
  (substate, ship) => Object.assign(substate.toJS(), { shipName: ship.url })
);

export default selectShipInfoContainer;
export {
  selectShipInfoContainerDomain,
};
