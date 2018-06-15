/*
 *
 * ForecastContainer actions
 *
 */

import {
  REQUEST_MATCHES,
  REQUEST_MATCHES_SUCCEDDED,
  REQUEST_MATCHES_FAILED,
  SAVE_PREDICTION,
  SAVE_PREDICTION_SUCCEDDED,
  SAVE_PREDICTION_FAILED,
  GET_PREDICTIONS_FAILED,
  GET_PREDICTIONS_SUCCEDDED,
} from './constants';

export function requestMatches() {
  return {
    type: REQUEST_MATCHES,
  };
}

export function requestMatchesSuccedded(matches) {
  return {
    type: REQUEST_MATCHES_SUCCEDDED,
    matches,
  };
}

export function requestMatchesFailed(message) {
  return {
    type: REQUEST_MATCHES_FAILED,
    message,
  };
}

export function savePredictionSuccedded(prediction) {
  return {
    type: SAVE_PREDICTION_SUCCEDDED,
    prediction,
  };
}

export function savePredictionFailed(message) {
  return {
    type: SAVE_PREDICTION_FAILED,
    message,
  };
}

export function makePrediction(prediction) {
  return {
    type: SAVE_PREDICTION,
    prediction,
  };
}

export function getPredictionsSuccedded(predictions) {
  return {
    type: GET_PREDICTIONS_SUCCEDDED,
    predictions,
  };
}

export function getPredictionsFailed(message) {
  return {
    type: GET_PREDICTIONS_FAILED,
    message,
  };
}
