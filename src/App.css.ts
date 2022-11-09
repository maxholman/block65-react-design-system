import { createTheme } from '@vanilla-extract/css';
import { colorThemeVars } from '../lib/schemes/color.css.js';

export const exampleColorThemeClass = createTheme(colorThemeVars, {
  accent: {
    h: '214',
    s: '60%',
    l: '50%',
  },
  tones: {
    info: {
      h: '90',
      s: '50%',
      l: '50%',
    },
    neutral: {
      h: '90',
      s: '50%',
      l: '50%',
    },
    promo: {
      h: '90',
      s: '50%',
      l: '50%',
    },
    warn: {
      h: '90',
      s: '50%',
      l: '50%',
    },
    positive: {
      h: '90',
      s: '50%',
      l: '50%',
    },
    critical: {
      h: '90',
      s: '50%',
      l: '50%',
    },
  },
});
