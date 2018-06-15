// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_STARSHIPS, SELECTED_SHIP, REQUEST_STARSHIPS_SUCCEEDED, SELECTED_TAB, REQUEST_USER } from './constants';
import { takeLatest } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import { requestShipsSucceeded, requestShipsFailed, requestUserSuccedded } from './actions';
import { push } from 'react-router-redux';
import selectNavigationContainer from './selectors';
import { isNil } from 'lodash';

export function fetchShipsFromServer() {
  return fetch('https://swapi.co/api/starships').then(response => response.json());
}

function* fetchShips() {
  try {
    const navs = [
      {
        name: 'Matches',
        url: 'worldcup',
      },
      {
        name: 'Profile',
        url: 'profile',
      },
      {
        name: 'Rules',
        url: 'rule',
      },
    ];
    yield put(requestShipsSucceeded(navs));
  } catch (err) {
    yield put(requestShipsFailed(err.message));
  }
}

function* pushShip(action) {
  yield put(push(`/${action.ship.url}`));
}

function* selectDefaultStartship() {
  const state = yield select(selectNavigationContainer());
  if (!state.selectedShip && state.routerLocation === '/') {
    yield put(push(`/${state.ships[0].url}`));
  }
}

function* getUser() {
  const userExists = !isNil(localStorage.getItem('user')) && localStorage.getItem('user') !== '';
  const user = (userExists) ? JSON.parse(localStorage.getItem('user')) : { name: '' };
  if (user.name === '') {
    yield put(push('/login'));
  } else {
    yield put(requestUserSuccedded(user));
  }
}

// Individual exports for testing
export function* fetchShipsSaga() {
  yield* takeLatest(REQUEST_STARSHIPS, fetchShips);
}

export function* getUserSaga() {
  yield* takeLatest(REQUEST_USER, getUser);
}

export function* selectDefaultStarshipSaga() {
  yield* takeLatest(REQUEST_STARSHIPS_SUCCEEDED, selectDefaultStartship);
}

export function* selectShipSaga() {
  yield* takeLatest(SELECTED_SHIP, pushShip);
}

export function* pushTab(action) {
  yield put(push(`/${action.tab}`));
}

export function* selectedTabSaga() {
  yield* takeLatest(SELECTED_TAB, pushTab);
}
// All sagas to be loaded
export default [
  fetchShipsSaga,
  getUserSaga,
  selectShipSaga,
  selectedTabSaga,
  selectDefaultStarshipSaga,
];
