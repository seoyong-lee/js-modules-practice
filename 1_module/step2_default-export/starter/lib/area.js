// [실습-2] default export
import { PI } from './calculator.js';

// TODO 1: circle을 default export로 바꾸세요.
export function circle(x) {
  return PI * x * x;
}

export function square(x) {
  return x * x;
}
