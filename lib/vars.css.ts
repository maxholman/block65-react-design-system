import { createGlobalThemeContract } from '@vanilla-extract/css';
import { createGlobalThemeMapFn } from './css-helpers.js';

export type Prefix =
  | 'base'
  | 'purpose'
  | 'callout'
  | 'button'
  | 'panel'
  | 'formControl'
  | 'props'
  | 'text'
  | 'textlink'
  | 'badge';

export const globalVarsMapFnPrefix = 'base' satisfies Prefix;
export const globalVars = createGlobalThemeContract(
  {
    color: {
      brand: '',
      accent: '',
      fgColor: '',
      bgColor: '',
      borderColor: '',
      muted: {
        fgColor: '',
        bgColor: '',
        borderColor: '',
      },
      emphasis: {
        fgColor: '',
        bgColor: '',
        borderColor: '',
      },
    },
    border: {
      width: '',
      radius: '',
    },
  },
  createGlobalThemeMapFn(globalVarsMapFnPrefix),
);

/**
 * Props vars
 */
export const propsVarsMapFnPrefix = 'props' satisfies Prefix;
export const propsVars = createGlobalThemeContract(
  {
    border: {
      width: {
        '0': '',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
      },
    },
    radius: {
      0: '',
      1: '',
      2: '',
      3: '',
      50: '',
    },
    space: {
      '000': '',
      '00': '',
      '0': '',
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '7': '',
      '8': '',
      '9': '',
      '10': '',
      '11': '',
      '12': '',
      '13': '',
      '14': '',
      '15': '',
      '16': '',
    },
  },
  createGlobalThemeMapFn(propsVarsMapFnPrefix),
);
