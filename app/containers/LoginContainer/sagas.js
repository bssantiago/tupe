// import { take, call, put, select } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { LOGIN_FACEBOOK } from './constants';
import { facebookSucceeded, facebookFailed } from './actions';


function* performFacebookLogin(action) {
  try {
    const result = action.user;
    localStorage.setItem('user', JSON.stringify(action.user));
    yield put(push('/worldcup'));
    yield put(facebookSucceeded(result));
  } catch (err) {
    yield put(facebookFailed(err.message));
  }
}

// Individual exports for testing
export function* loginFacebookSaga() {
  yield* takeLatest(LOGIN_FACEBOOK, performFacebookLogin);
}

// All sagas to be loaded
export default [
  loginFacebookSaga,
];
