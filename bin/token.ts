// eslint-disable-next-line import/no-extraneous-dependencies
import { camelCase } from 'change-case';
import { genericVars } from '#vars';

function isPlainObject(obj: unknown): obj is Record<string, unknown> {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}

function extractCustomPropertyNames(
  obj: Record<string, unknown>,
  prefix = '',
): [string, string][] {
  return Object.entries(obj).flatMap(([key, value]): [string, string][] => {
    const k = prefix ? `${prefix}${key}` : key;

    if (isPlainObject(value)) {
      return extractCustomPropertyNames(value, `${k}-`);
    }

    const v = String(value);
    return [[k, v.match(/^var\((--\w+)\)$/)?.[1] || v]];
  });
}

function writeScss([v, ident]: [string, string]) {
  process.stdout.write(`$${camelCase(v)}: ${ident};`);
  process.stdout.write('\n');
}

const propNames = extractCustomPropertyNames({
  ...genericVars,
});

propNames.forEach(writeScss);
