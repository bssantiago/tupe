/*
 *
 * Wccontainer actions
 *
 */

import {
  REQUEST_MATCHES,
  REQUEST_MATCHES_SUCCEDDED,
  REQUEST_MATCHES_FAILED,
  SAVE_PREDICTION,
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

export function makePrediction(match) {
  return {
    type: SAVE_PREDICTION,
    match,
  };
}
