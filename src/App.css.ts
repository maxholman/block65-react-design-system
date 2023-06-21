// eslint-disable-next-line import/no-extraneous-dependencies
import { createTheme } from '@vanilla-extract/css';
import { colorThemeVars } from '../lib/schemes/color.css.js';

export const exampleColorThemeClass = createTheme(colorThemeVars, {
  tones: {
    accent: {
      h: '214',
    },
    info: {
      h: '90',
    },
    neutral: {
      h: '90',
    },
    promo: {
      h: '90',
    },
    warn: {
      h: '90',
    },
    positive: {
      h: '90',
    },
    critical: {
      h: '90',
    },
  },
});
