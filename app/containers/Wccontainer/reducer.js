/*
 *
 * Wccontainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_MATCHES_SUCCEDDED,
} from './constants';

const initialState = fromJS({});

function wccontainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MATCHES_SUCCEDDED:
      return state.set('matches', action.matches);
    default:
      return state;
  }
}

export default wccontainerReducer;
