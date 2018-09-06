import { fromJS } from 'immutable';

import { ANSWERS } from './constants';

// The initial state of the App
export const initialState = fromJS({
  1: '',
  2: '',
  3: '',
  4: ''
});

function testReducer(state = initialState, action) {
  switch (action.type) {
    case ANSWERS:
      return state.set(action.key, action.answer);
    default:
      return state;
  }
}

export default testReducer;
