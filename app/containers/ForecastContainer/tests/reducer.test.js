import expect from 'expect';
import forecastContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('forecastContainerReducer', () => {
  it('returns the initial state', () => {
    expect(forecastContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
