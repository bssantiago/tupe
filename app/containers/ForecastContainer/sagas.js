// import { take, call, put, select } from 'redux-saga/effects';
/* eslint no-underscore-dangle: 0 */
import { REQUEST_MATCHES, TOKEN, ISO_COUNTRIES, SAVE_PREDICTION, REQUEST_MATCHES_SUCCEDDED } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { requestMatchesSuccedded, requestMatchesFailed, savePredictionSuccedded, savePredictionFailed, getPredictionsFailed, getPredictionsSuccedded } from './actions';
import { map, isNil, find, filter } from 'lodash';

const header = new Headers({
  'X-Auth-Token': TOKEN,
});
const options = {
  method: 'GET',
  headers: header,
};

export function fetchMathcesFromServer() {
  return fetch('https://api.football-data.org/v1/competitions/467/fixtures', options).then(response => response.json());
}

export function savePrediciton(action) {
  const localServerHeader = new Headers({
    'Content-Type': 'application/json',
  });
  localServerHeader.append('Accept', 'application/json');
  if (action.prediction.iduser) {
    localServerHeader.append('authentication', action.prediction.iduser);
  }

  const optionsLocalServer = {
    method: 'POST',
    headers: localServerHeader,
    body: JSON.stringify({ prediction: action.prediction }),
  };

  return fetch('https://tupeapi.cavepot.com/predictions/Save', optionsLocalServer).then(response => response.json());
}

export function updatePrediciton(action) {
  const localServerHeader = new Headers({
    'Content-Type': 'application/json',
  });
  localServerHeader.append('Accept', 'application/json');
  if (action.prediction.iduser) {
    localServerHeader.append('authentication', action.prediction.iduser);
  }
  const optionsLocalServer = {
    method: 'PUT',
    headers: localServerHeader,
    body: JSON.stringify({ prediction: action.prediction }),
  };
  return fetch('https://tupeapi.cavepot.com/predictions/Update', optionsLocalServer).then(response => response.json());
}

export function getPredictions(action) {
  const iduser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).userID : null;
  const localServerHeader = new Headers({
    'Content-Type': 'application/json',
  });
  localServerHeader.append('Accept', 'application/json');
  if (iduser) {
    localServerHeader.append('authentication', iduser);
  }

  const optionsLocalServer = {
    method: 'POST',
    headers: localServerHeader,
    body: JSON.stringify({ id: iduser, matches: action.matches }),
  };
  return fetch('https://tupeapi.cavepot.com/predictions/GetPredictions', optionsLocalServer).then(response => response.json());
}

function* fetchMatchs() {
  try {
    const matches = yield call(fetchMathcesFromServer);
    const justTimed = filter(matches.fixtures, x => x.status === 'TIMED');

    const result = map(justTimed, (item) => {
      const matchId = item._links.self.href.substr(item._links.self.href.lastIndexOf('/') + 1);
      const getCountryCode = (name) => (find(ISO_COUNTRIES, (cc) => cc.cname === name));
      return {
        id: matchId,
        team1Info2: item._links.awayTeam.href,
        code1: isNil(getCountryCode(item.homeTeamName)) ? { ccode: '', cname: '' } : getCountryCode(item.homeTeamName),
        code2: isNil(getCountryCode(item.awayTeamName)) ? { ccode: '', cname: '' } : getCountryCode(item.awayTeamName),
        team1: item.homeTeamName,
        team2: item.awayTeamName,
        status: item.status,
        date: new Date(item.date).toLocaleDateString(),
        result: {
          team1: isNil(item.result.goalsHomeTeam) ? 0 : item.result.goalsHomeTeam,
          team2: isNil(item.result.goalsAwayTeam) ? 0 : item.result.goalsAwayTeam,
        },
      };
    });

    yield put(requestMatchesSuccedded(result));
  } catch (err) {
    yield put(requestMatchesFailed(err.message));
  }
}

function* savePrediction(action) {
  try {
    const res = action;
    res.prediction.isBlocked = false;
    const result = action.prediction.isPredicted
      ? yield call(updatePrediciton, res)
      : yield call(savePrediciton, res);
    yield put(savePredictionSuccedded(result));
  } catch (err) {
    yield put(savePredictionFailed(err.message));
  }
}

function* getPredictionsFromServer(action) {
  try {
    const predictions = yield call(getPredictions, action);
    yield put(getPredictionsSuccedded(predictions.response));
  } catch (err) {
    yield put(getPredictionsFailed(err.message));
  }
}

// Individual exports for testing
export function* fetchMatchsSagas() {
  yield* takeLatest(REQUEST_MATCHES, fetchMatchs);
}

export function* savePredictionSagas() {
  yield* takeLatest(SAVE_PREDICTION, savePrediction);
}

export function* getPredictionsSagas() {
  yield* takeLatest(REQUEST_MATCHES_SUCCEDDED, getPredictionsFromServer);
}

// All sagas to be loaded
export default [
  fetchMatchsSagas,
  savePredictionSagas,
  getPredictionsSagas,
];
