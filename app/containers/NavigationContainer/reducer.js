/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SELECTED_SHIP,
  REQUEST_STARSHIPS_SUCCEEDED,
  TOGGLE_DRAWER,
  TABS,
  SELECTED_TAB,
  REQUEST_USER_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  ships: [],
  isDrawerOpen: false,
  selectedTab: TABS[0],
  user: null,
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return state.set('routerLocation', action.payload.pathname);
    case REQUEST_STARSHIPS_SUCCEEDED:
      return state.set('ships', action.ships);
    case REQUEST_USER_SUCCEEDED:
      return state.set('user', action.user);
    case SELECTED_SHIP:
      return state.set('selectedShip', action.ship).set('isDrawerOpen', false);
    case SELECTED_TAB:
      return state.set('selectedTab', action.tab);
    case TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    default:
      return state;
  }
}

export default navigationContainerReducer;
