import { createTheme, type MapLeafNodes } from '@vanilla-extract/css';
import { genericVars } from '../box.css.js';

export const genericThemeTokens = {
  text: {
    capHeight: {
      '00': '0.5rem',
      '0': '0.75rem',
      '1': '1rem',
      '2': '1.1rem',
      '3': '1.25rem',
      '4': '1.5rem',
      '5': '2rem',
    },
    weight: {
      thin: '100',
      extraLight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      bold: '500',
      heavy: '900',
    },
    lineHeight: {
      normal: '1.5',
      paragraph: '1.6',
      heading: '1.3',
    },
  },
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
} satisfies MapLeafNodes<typeof genericVars, string>;

export const genericThemeClassName = createTheme(
  genericVars,
  genericThemeTokens,
);
