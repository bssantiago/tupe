/*
 *
 * PositionContainer actions
 *
 */

import {
  GET_POSITIONS,
  GET_POSITIONS_SUCCEDDED,
  GET_POSITIONS_FAILED,
} from './constants';

export function getPositions() {
  return {
    type: GET_POSITIONS,
  };
}

export function getPositionsSuccedded(positions) {
  return {
    type: GET_POSITIONS_SUCCEDDED,
    positions,
  };
}

export function getPositionsFailed(message) {
  return {
    type: GET_POSITIONS_FAILED,
    message,
  };
}
