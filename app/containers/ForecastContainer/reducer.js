/*
 *
 * ForecastContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_MATCHES_SUCCEDDED, SAVE_PREDICTION_SUCCEDDED, GET_PREDICTIONS_SUCCEDDED,
} from './constants';

const initialState = fromJS({
  hasPredictions: false,
});

function forecastContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PREDICTIONS_SUCCEDDED:
      return state.set('matches', action.predictions).set('hasPredictions', true);
    case SAVE_PREDICTION_SUCCEDDED:
      return state.set('prediction', action.prediction);
    case REQUEST_MATCHES_SUCCEDDED:
      return state.set('matches', action.matches).set('hasPredictions', false);
    default:
      return state;
  }
}

export default forecastContainerReducer;
