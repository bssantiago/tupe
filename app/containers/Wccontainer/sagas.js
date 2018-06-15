// import { take, call, put, select } from 'redux-saga/effects';
/* eslint no-underscore-dangle: 0 */
import { REQUEST_MATCHES, TOKEN, ISO_COUNTRIES } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { requestMatchesSuccedded, requestMatchesFailed } from './actions';
import { map, isNil, find } from 'lodash';
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

export function getTeamCreast(team) {
  return fetch(team, options).then().then(response => response.json());
}

function* fetchMatchs() {
  try {
    const matches = yield call(fetchMathcesFromServer);

    const result = map(matches.fixtures, (item) => {
      const getCountryCode = (name) => (find(ISO_COUNTRIES, (cc) => cc.cname === name));


      return {
        id: item._links.self.href.substr(item._links.self.href.lastIndexOf('/') + 1), // disable eslint no-underscore-dangle: ["error", { "allow": ["_link"] }]
        team1Info1: item._links.homeTeam.href,
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

// Individual exports for testing
export function* fetchMatchsSagas() {
  yield* takeLatest(REQUEST_MATCHES, fetchMatchs);
}

// All sagas to be loaded
export default [
  fetchMatchsSagas,
];
