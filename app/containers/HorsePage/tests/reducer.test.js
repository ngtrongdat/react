
import { fromJS } from 'immutable';
import horsePageReducer from '../reducer';

describe('horsePageReducer', () => {
  it('returns the initial state', () => {
    expect(horsePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
