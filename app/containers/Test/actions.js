import { ANSWERS } from './constants';

export function changeUsername(key, answer) {
  console.log('key', key, answer);
  return {
    type: ANSWERS,
    key,
    answer
  };
}
