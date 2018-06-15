/*
 *
 * ShipInfoContainer actions
 *
 */

import {
  REQUEST_STARSHIP_SUCCEEDED,
  REQUEST_STARSHIP_FAILED,
  REQUEST_SHIP,
} from './constants';

export function requestShipSucceeded(ship) {
  return {
    type: REQUEST_STARSHIP_SUCCEEDED,
    ship,
  };
}

export function requestShipFailed(message) {
  return {
    type: REQUEST_STARSHIP_FAILED,
    message,
  };
}

export function requestShip(shipName) {
  return {
    type: REQUEST_SHIP,
    shipName,
  };
}
