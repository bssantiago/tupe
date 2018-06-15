import expect from 'expect';
import positionContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('positionContainerReducer', () => {
  it('returns the initial state', () => {
    expect(positionContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
