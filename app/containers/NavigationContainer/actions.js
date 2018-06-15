/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_STARSHIPS,
  REQUEST_STARSHIPS_FAILED,
  REQUEST_STARSHIPS_SUCCEEDED,
  REQUEST_USER_SUCCEEDED,
  REQUEST_USER,
  SELECTED_SHIP,
  SELECTED_TAB,
  TOGGLE_DRAWER,
} from './constants';

export function requestShips() {
  return {
    type: REQUEST_STARSHIPS,
  };
}

export function requestUser() {
  return {
    type: REQUEST_USER,
  };
}

export function selectTab(tab) {
  return {
    type: SELECTED_TAB,
    tab,
  };
}

export function requestShipsSucceeded(ships) {
  return {
    type: REQUEST_STARSHIPS_SUCCEEDED,
    ships,
  };
}

export function requestShipsFailed(message) {
  return {
    type: REQUEST_STARSHIPS_FAILED,
    message,
  };
}

export function requestUserSuccedded(user) {
  return {
    type: REQUEST_USER_SUCCEEDED,
    user,
  };
}

export function selectShip(ship) {
  return {
    type: SELECTED_SHIP,
    ship,
  };
}

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
  };
}
