import type { MapLeafNodes } from '@vanilla-extract/css';
import * as openPropsTokens from './generated/open-props-tokens.js';
import {
  type formControlVars,
  globalVars,
  type panelVars,
  propsVars,
  type textLinkVars,
  textVariantVars,
} from './vars.css.js';

// this is just a partial definition for the borders
export const globalTokens = {
  border: {
    radius: openPropsTokens.radius2,
    width: openPropsTokens.borderSize2,
  },
} satisfies MapLeafNodes<Pick<typeof globalVars, 'border'>, string>;

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

export const defaultTextTokens = {
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  } satisfies Record<keyof typeof textVariantVars.fontWeight, string>,
};

export const defaultTextLinkTokens = {
  strong: {
    fontWeight: textVariantVars.fontWeight.medium,
    rest: {
      fgColor: globalVars.color.accent,
      textDecoration: 'underline',
    },
    hover: {
      fgColor: globalVars.color.accent,
      textDecoration: 'underline',
    },
  },
  normal: {
    fontWeight: textVariantVars.fontWeight.normal,
    rest: {
      fgColor: globalVars.color.accent,
      textDecoration: 'none',
    },
    hover: {
      fgColor: globalVars.color.accent,
      textDecoration: 'underline',
    },
  },
  weak: {
    fontWeight: textVariantVars.fontWeight.normal,
    rest: {
      fgColor: globalVars.color.fgColor,
      textDecoration: 'underline',
    },
    hover: {
      fgColor: globalVars.color.accent,
      textDecoration: 'underline',
    },
  },
  none: {
    fontWeight: 'inherit',
    rest: {
      fgColor: 'inherit',
      textDecoration: 'none',
    },
    hover: {
      fgColor: 'inherit',
      textDecoration: 'none',
    },
  },
} satisfies MapLeafNodes<typeof textLinkVars, string>;

export const formControlTokens = {
  outline: {
    width: openPropsTokens.borderSize1,
  },
} satisfies MapLeafNodes<typeof formControlVars, string>;

export const panelTokens = {
  padding: {
    inline: openPropsTokens.size3,
    block: propsVars.space['4'],
  },
} satisfies MapLeafNodes<typeof panelVars, string>;
