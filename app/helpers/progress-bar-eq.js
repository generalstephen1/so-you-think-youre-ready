import { helper } from '@ember/component/helper';

export function progressBarEq(params) {
  return Math.round(params[1] / params[0] * 100);
}

export default helper(progressBarEq);
