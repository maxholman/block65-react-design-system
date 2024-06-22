import { calc } from '@vanilla-extract/css-utils';

export function createGlobalThemeMapFn(
  prefix = '',
): (value: string | null, path: Array<string>) => string {
  const delim = '-';
  const fullPrefix = prefix ? `${prefix}${delim}` : '';
  return (value, path) => `${fullPrefix}${value}${path.join(delim)}`;
}

export function withUnit(value: string | number, unit = 'px') {
  return calc.multiply(value, `1${unit}`).toString();
}

export function withNegativeUnit(value: string | number, unit = 'px') {
  return calc.multiply(value, `-1${unit}`).toString();
}
