import { camelCase } from 'change-case';
import {
  genericVars,
  genericThemeTokens,
  defaultThemeVars,
  defaultEmptyThemeTokens,
  fontThemeVars,
  buttonVars,
  buttonDarkThemeTokens,
} from '#vars';

/**
 * Check if the given value is a plain object.
 * @param {any} obj
 * @returns {boolean}
 */
function isPlainObject(obj) {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}

/**
 * Extract custom property names from the given object.
 * @param {Record<string, any>} obj
 * @param {string} prefix
 * @returns {[string, string][]}
 */
function extractCustomPropertyNames(obj, prefix = '') {
  return Object.entries(obj).flatMap(([key, value]) => {
    const keyWithPrefix = prefix ? `${prefix}-${key}` : key;

    if (isPlainObject(value)) {
      return extractCustomPropertyNames(value, keyWithPrefix);
    }

    const v = String(value);
    return [[keyWithPrefix, v.match(/^var\((--.*?)\)$/)?.[1] || v]];
  });
}

const vars = extractCustomPropertyNames({
  generic: genericVars,
  theme: defaultThemeVars,
  font: fontThemeVars,
  button: buttonVars,
});

const tokens = extractCustomPropertyNames({
  generic: genericThemeTokens,
  theme: defaultEmptyThemeTokens,
  button: buttonDarkThemeTokens,
});

process.stdout.write(
  [
    '/*',
    ' * WARNING: This file was generated automatically.',
    ' * ',
    ' * You risk losing any changes if you modify this file manually.',
    ' * ',
    ` * Last updated: ${new Date().toISOString()} by ${process.env.USER}.`,
    ' */',
  ].join('\n'),
);
tokens.forEach(([v, ident]) => {
  process.stdout.write(
    `\n$${camelCase(v, { mergeAmbiguousCharacters: true })}: ${ident || 'null'} !default;`,
  );
});
process.stdout.write('\n');

process.stdout.write('\n@mixin magic {\n');
vars.forEach(([v, ident]) => {
  process.stdout.write(
    // `$${camelCase(v, { mergeAmbiguousCharacters: true })}: ${ident};`,
    `\n${ident}: #{$${camelCase(v, { mergeAmbiguousCharacters: true })}};`,
  );
});
process.stdout.write('\n}\n');