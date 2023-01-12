import { calc } from '@vanilla-extract/css-utils';

export function withUnit(value: string | number, unit = 'px') {
  return calc.multiply(value, `1${unit}`).toString();
}
export function withNegativeUnit(value: string | number, unit = 'px') {
  return calc.multiply(value, `-1${unit}`).toString();
}
