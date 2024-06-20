import { calc } from '@vanilla-extract/css-utils';

export function createGlobalThemeMapFn(
  prefix: string,
): (value: string | null, path: Array<string>) => string {
  return (value, path) => `${prefix}-${value}${path.join('-')}`;
}

export function withUnit(value: string | number, unit = 'px') {
  return calc.multiply(value, `1${unit}`).toString();
}

export function withNegativeUnit(value: string | number, unit = 'px') {
  return calc.multiply(value, `-1${unit}`).toString();
}
