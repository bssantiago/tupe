/*
 *
 * PositionContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_POSITIONS_SUCCEDDED,
} from './constants';

const initialState = fromJS({});

function positionContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSITIONS_SUCCEDDED:
      return state.set('positions', action.positions);
    default:
      return state;
  }
}

export default positionContainerReducer;
