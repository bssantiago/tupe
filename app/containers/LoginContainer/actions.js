/*
 *
 * LoginContainer actions
 *
 */

import {
  LOGIN,
  LOGIN_FACEBOOK,
  FACEBOOK_SUCCEEDED,
  FACEBOOK_FAILED,
} from './constants';

export function login(email, password) {
  return {
    type: LOGIN,
    email,
    password,
  };
}

export function loginFacebook(user) {
  return {
    type: LOGIN_FACEBOOK,
    user,
  };
}

export function facebookSucceeded(user) {
  return {
    type: FACEBOOK_SUCCEEDED,
    user,
  };
}

export function facebookFailed(message) {
  return {
    type: FACEBOOK_FAILED,
    message,
  };
}

