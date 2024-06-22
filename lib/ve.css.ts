import {
  createGlobalThemeContract,
  type MapLeafNodes,
} from '@vanilla-extract/css';
import openPropsTokens from 'open-props/style-dictionary-tokens';
import { createGlobalThemeMapFn } from './css-helpers.js';

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
  createGlobalThemeMapFn(),
);

export const globalVarTokens: MapLeafNodes<typeof globalVars.border, string> = {
  radius: openPropsTokens.radius[2].value,
  width: openPropsTokens.border.size[1].value,
};

export const generalVars = createGlobalThemeContract(
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
  createGlobalThemeMapFn('general-default'),
);

export const generalTokens = {
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
} satisfies MapLeafNodes<typeof generalVars, string>;

export const calloutVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
    padding: '',
  },
  createGlobalThemeMapFn('callout-default'),
);

export const buttonVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
  },
  createGlobalThemeMapFn('button-default'),
);

export const badgeVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
  },
  createGlobalThemeMapFn('badge-default'),
);

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
  createGlobalThemeMapFn('panel-default'),
);

export const panelTokens: MapLeafNodes<typeof panelVars, string> = {
  padding: {
    inline: openPropsTokens.size[3].value,
    block: openPropsTokens.size[3].value,
  },
};

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
  createGlobalThemeMapFn('control-default'),
);

export const formControlTokens: MapLeafNodes<typeof formControlVars, string> = {
  outline: {
    width: openPropsTokens.border.size[1].value,
  },
};
