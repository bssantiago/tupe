import expect from 'expect';
import shipInfoContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('shipInfoContainerReducer', () => {
  it('returns the initial state', () => {
    expect(shipInfoContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
