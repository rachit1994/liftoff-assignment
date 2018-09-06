import { ANSWERS } from './constants';

export function changeUsername(key, answer) {
  return {
    type: ANSWERS,
    key,
    answer
  };
}
