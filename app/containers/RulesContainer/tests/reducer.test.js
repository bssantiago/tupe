import expect from 'expect';
import rulesContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('rulesContainerReducer', () => {
  it('returns the initial state', () => {
    expect(rulesContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
