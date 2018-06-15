import expect from 'expect';
import wccontainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('wccontainerReducer', () => {
  it('returns the initial state', () => {
    expect(wccontainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
