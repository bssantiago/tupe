// import { take, call, put, select } from 'redux-saga/effects';
import {
  put,
  call,
} from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { requestShipSucceeded, requestShipFailed } from './actions';
import { REQUEST_SHIP } from './constants';

export function fetchShipFromServer(shipName) {
  return fetch(`https://swapi.co/api/starships/${shipName}`).then(response => response.json());
}

function* fetchShip(action) {
  const ship = yield call(fetchShipFromServer, action.shipName);
  try {
    yield put(requestShipSucceeded(ship));
  } catch (err) {
    yield put(requestShipFailed(err.message));
  }
}

// Individual exports for testing
export function* fetchShipSaga() {
  yield* takeLatest(REQUEST_SHIP, fetchShip);
}


// All sagas to be loaded
export default [
  fetchShipSaga,
];
