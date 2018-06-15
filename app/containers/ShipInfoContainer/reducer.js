/*
 *
 * ShipInfoContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_STARSHIP_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  ship: {},
});

function shipInfoContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STARSHIP_SUCCEEDED:
      return state.set('ship', action.ship);
    default:
      return state;
  }
}

export default shipInfoContainerReducer;
