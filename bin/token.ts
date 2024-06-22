// eslint-disable-next-line import/no-extraneous-dependencies
// import { camelCase } from 'change-case';
import { createGlobalThemeMapFn } from '../lib/css-helpers.js';
import {
  badgeVars,
  buttonVars,
  calloutVars,
  formControlVars,
  generalVars,
  globalVars,
} from '../lib/ve.css.js';

type JsonObject = { [Key in string]: string | JsonObject };

function isPlainObject(obj: unknown): obj is Record<string, unknown> {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}

function flattenObject(
  obj: JsonObject,
  prefixFn: (value: string | null, path: string[]) => string,
  path: string[] = [],
): [string, string][] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const thisPrefix = prefixFn(key, path);
    if (isPlainObject(value)) {
      return flattenObject(value, prefixFn, [...path, key]);
    }
    return [[thisPrefix, value]];
  });
}

// function writeScssCssVars([cssVarFunctionPrefix, bareCssVar]: [
//   string,
//   string,
// ]) {
//   process.stdout.write(`$${camelCase(cssVarFunctionPrefix)}: ${bareCssVar};`);
//   process.stdout.write('\n');
// }

const vars = flattenObject(
  {
    ...globalVars,
    ...generalVars,
    ...badgeVars,
    ...buttonVars,
    ...calloutVars,
    ...formControlVars,
  },
  createGlobalThemeMapFn('geklol'),
);

/**
 * {
  'color.brand': 'var(--color-brand)',
  'color.accent': 'var(--color-accent)',
  'color.fgColor': 'var(--color-fgColor)',
  'color.bgColor': 'var(--color-bgColor)',
  'color.borderColor': 'var(--color-borderColor)',
  'color.muted.fgColor': 'var(--color-muted-fgColor)',
  'color.muted.bgColor': 'var(--color-muted-bgColor)',
  'color.muted.borderColor': 'var(--color-muted-borderColor)',
  'color.emphasis.fgColor': 'var(--colo
 */
console.log({ vars });

// console.log(flattenObject(globalVarTokens, 'globals'));
// console.log(flattenObject(generalTokens, 'general'));
// console.log(flattenObject(panelTokens, 'panel'));
// console.log(flattenObject(formControlTokens, 'formControl'));

// const tokens = flattenObject(
//   {
//     ...generalTokens,
//     ...panelTokens,
//     ...formControlTokens,
//   },
//   'yay-tokens',
// );

// console.log({ tokens });

// vars.forEach(writeScssCssVars);

// function writeScssDefaults([cssVarFunctionPrefix, bareCssVar]: [
//   string,
//   string,
// ]) {
//   process.stdout.write(`$${camelCase(cssVarFunctionPrefix)}: ${bareCssVar};`);
//   process.stdout.write('\n');
// }

// const tokens = extractTokens({
//   ...globalVarTokens,
//   ...panelTokens,
//   ...formControlTokens,
// });

// tokens.forEach(writeScssDefaults);

// ---
// ---
