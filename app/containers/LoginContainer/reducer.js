/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN,
  FACEBOOK_SUCCEEDED,
} from './constants';

const initialState = fromJS({});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('email', action.email);
    case FACEBOOK_SUCCEEDED:
      return state.set('user', action.user);
    default:
      return state;
  }
}

export default loginContainerReducer;
