import {
  createGlobalThemeContract,
  type MapLeafNodes,
} from '@vanilla-extract/css';
import openPropsTokens from 'open-props/style-dictionary-tokens';
import { createGlobalThemeMapFn } from './css-helpers.js';

export const globalVarsMapFnPrefix = '';
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
// this is just a partial definition for the borders
export const globalTokens = {
  border: {
    radius: openPropsTokens.radius[2].value,
    width: openPropsTokens.border.size[1].value,
  },
} satisfies MapLeafNodes<Pick<typeof globalVars, 'border'>, string>;

/**
 * Props vars
 */
export const propsVarsMapFnPrefix = 'props';
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
export const propsTokens = {
  border: {
    width: {
      0: '0',
      1: '0.05rem',
      2: '0.15rem',
      3: '0.2rem',
      4: '0.3rem',
      5: '0.5rem',
      6: '0.75rem',
      7: '1rem',
    },
  },
  radius: {
    // these are tuned to be distinguished at DPR3 but may not be different at
    // lower densities they are rem so they dont scale with text size NOTE: we
    // may need some `em` ones if we need fully curved buttons "pill" style
    0: '0',
    1: '0.125rem',
    2: '0.25rem',
    3: '0.5rem',
    50: '50%',
  },
  space: {
    '000': '-.5rem',
    '00': '-.25rem',
    '0': '0rem',
    '1': '.125rem',
    '2': '.25rem',
    '3': '.375rem',
    '4': '.5rem',
    '5': '.625rem',
    '6': '.75rem',
    '7': '1rem',
    '8': '1.25rem',
    '9': '1.5rem',
    '10': '1.75rem',
    '11': '2rem',
    '12': '3rem',
    '13': '5rem',
    '14': '7.5rem',
    '15': '10rem',
    '16': '15rem',
  },
} satisfies MapLeafNodes<typeof propsVars, string>;

/**
 * Callout vars
 */
export const calloutVarsMapFnPrefix = 'callout';
export const calloutVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
    padding: '',
  },
  createGlobalThemeMapFn(calloutVarsMapFnPrefix),
);

/**
 * Button vars
 */
export const buttonVarsMapFnPrefix = 'button';
export const buttonVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
  },
  createGlobalThemeMapFn(buttonVarsMapFnPrefix),
);

/**
 * Badge vars
 */
export const badgeVarsMapFnPrefix = 'badge';
export const badgeVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
  },
  createGlobalThemeMapFn(badgeVarsMapFnPrefix),
);

/**
 * Panel vars
 */
export const panelVarsMapFnPrefix = 'panel';
export const panelVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
    padding: {
      inline: '',
      block: '',
    },
  },
  createGlobalThemeMapFn(panelVarsMapFnPrefix),
);
export const panelTokens = {
  padding: {
    inline: openPropsTokens.size[3].value,
    block: propsVars.space['4'],
  },
} satisfies MapLeafNodes<typeof panelVars, string>;

/**
 * Form control vars
 */
export const formControlVarsMapFnPrefix = 'formControl';
export const formControlVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
    outline: {
      width: '',
    },
  },
  createGlobalThemeMapFn(formControlVarsMapFnPrefix),
);
export const formControlTokens = {
  outline: {
    width: openPropsTokens.border.size[1].value,
  },
} satisfies MapLeafNodes<typeof formControlVars, string>;
