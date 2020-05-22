import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });
});

it('toggleFrom should create TOGGLE_FORM action', () => {
  expect(actions.toggleForm()).toEqual({
    type: c.TOGGLE_FORM
  });
});