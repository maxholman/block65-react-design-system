/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-syntax */
import { createWriteStream } from 'node:fs';
import { PassThrough } from 'node:stream';
import { parseArgs } from 'node:util';
import { camelCase } from 'change-case';
import {
  formControlTokens,
  globalTokens,
  panelTokens,
  propsTokens,
} from '../lib/defaults.js';
import { leafNodeMapper, type PathStr, type VarFn, vargEx } from './utils.js';
import {
  badgeVars,
  badgeVarsMapFnPrefix,
  buttonVars,
  buttonVarsMapFnPrefix,
  formControlVarsMapFnPrefix,
  globalVars,
  globalVarsMapFnPrefix,
  panelVars,
  panelVarsMapFnPrefix,
  propsVars,
  propsVarsMapFnPrefix,
} from '#vars';

const {
  values: { type, outputPath },
} = parseArgs({
  options: {
    type: {
      type: 'string',
      short: 't',
      default: 'css',
    },
    outputPath: {
      type: 'string',
      short: 'o',
    },
  },
});
/**
 * vars
 */
const knownVars = new Map<VarFn, { path: PathStr }>();
for (const [vars, prefix] of [
  [globalVars, globalVarsMapFnPrefix] as const,
  [propsVars, propsVarsMapFnPrefix] as const,
  [panelVars, panelVarsMapFnPrefix] as const,
  [badgeVars, badgeVarsMapFnPrefix] as const,
  [buttonVars, buttonVarsMapFnPrefix] as const,
]) {
  leafNodeMapper(
    vars,
    (path, value) => {
      knownVars.set(value, { path });
    },
    [prefix],
  );
}

/**
 * tokens
 */
const knownTokens = new Map<VarFn, { value: string }>();

for (const [vars, prefix] of [
  [globalTokens, globalVarsMapFnPrefix] as const,
  [propsTokens, propsVarsMapFnPrefix] as const,
  [panelTokens, panelVarsMapFnPrefix] as const,
  [formControlTokens, formControlVarsMapFnPrefix] as const,
]) {
  leafNodeMapper(
    vars,
    (path, value) => {
      knownTokens.set(path, { value });
    },
    [prefix],
  );
}

// resolved tokens, in case they have vars that reference each other
for (const [varName, { value }] of knownTokens) {
  if (value.match(vargEx)) {
    const cssVar = knownVars.get(value);

    if (cssVar) {
      // get the value of the css var
      const token = knownTokens.get(cssVar.path);

      if (token) {
        knownTokens.set(varName, token);
      }
    }
  }
}

const output = new PassThrough();
if (outputPath) {
  output.pipe(createWriteStream(outputPath));
} else {
  output.pipe(process.stdout);
}

const autoGeneratedBanner = [
  'This file is auto-generated.',
  '',
  'Do not edit this file directly.',
  '',
  `Date: ${new Date().toISOString()} by ${process.env.USER}`,
];

output.write(`/*
  * ${autoGeneratedBanner.join('\n * ')}
*/\n`);

/**
 * Output
 * */
switch (type) {
  case 'scss': {
    const defaults: string[] = [];
    const definitions: string[] = [];

    for (const [varFn, { path }] of knownVars) {
      const tokenValue = knownTokens.get(path);

      if (tokenValue) {
        const [, varName] = varFn.match(vargEx) || [];

        if (!varName) {
          throw new Error(`Could not extract var name from ${varFn}`);
        }
        const scssVar = camelCase(varName, {
          mergeAmbiguousCharacters: true,
        });

        // output.write(`  $${scssVar}: ${tokenValue.value} !default;\n`);
        // output.write(`  --${varName}: #{$${scssVar}};\n\n`);

        defaults.push(`$${scssVar}: ${tokenValue.value} !default;`);
        definitions.push(`--${varName}: #{$${scssVar}};`);
      } else {
        output.write(
          `\n/* WARN: skipped ${varFn} as token path "${path}" is not known */\n`,
        );
      }
    }

    output.write(defaults.join('\n'));
    output.write('\n');
    output.write(`@mixin tokens($args...) {\n`);
    output.write(definitions.map((d) => `  ${d}`).join('\n'));
    output.write('\n');
    output.write(`}\n`);
    break;
  }
  case 'css':
  default:
    output.write(`:root {\n`);

    for (const [varFn, { path }] of knownVars) {
      const tokenValue = knownTokens.get(path);

      if (tokenValue) {
        const [, varName] = varFn.match(vargEx) || [];

        if (!varName) {
          throw new Error(`Could not extract var name from ${varFn}`);
        }

        output.write(`--${varName}: ${tokenValue.value};\n`);
      } else {
        output.write(
          `\n/* WARN: skipped ${varFn} as token path "${path}" is not known */\n`,
        );
      }
    }
    output.write(`}\n`);
    break;
}

output.end();
