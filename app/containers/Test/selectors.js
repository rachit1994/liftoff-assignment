import { createSelector } from 'reselect';
import { initialState } from './reducer';

const State = state => state.get('test', initialState);

const getAllState = () => createSelector(State, s => s.toJS());

export { State, getAllState };
