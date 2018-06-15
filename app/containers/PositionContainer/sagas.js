// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { GET_POSITIONS } from './constants';
import { getPositionsSuccedded, getPositionsFailed } from './actions';
import { call, put } from 'redux-saga/effects';

export function getPositionFromServer() {
  return fetch('https://tupeapi.cavepot.com/predictions/getMatches').then(response => response.json());
}

function* getPositions(action) {
  try {
    const predictions = yield call(getPositionFromServer, action);
    yield put(getPositionsSuccedded(predictions.response));
  } catch (err) {
    yield put(getPositionsFailed(err.message));
  }
}

// Individual exports for testing
export function* getPositionsSagas() {
  yield* takeLatest(GET_POSITIONS, getPositions);
}

// All sagas to be loaded
export default [
  getPositionsSagas,
];
