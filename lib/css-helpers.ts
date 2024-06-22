import { calc } from '@vanilla-extract/css-utils';

export function createGlobalThemeMapFn(prefix = '') {
  const delim = '-';
  const fullPrefix = prefix ? `${prefix}${delim}` : '';
  return Object.assign(
    (value: string | null, path: Array<string>) =>
      `${fullPrefix}${value}${path.join(delim)}`,
    { prefix: fullPrefix },
  );
}

export function withUnit(value: string | number, unit = 'px') {
  return calc.multiply(value, `1${unit}`).toString();
}

export function withNegativeUnit(value: string | number, unit = 'px') {
  return calc.multiply(value, `-1${unit}`).toString();
}
