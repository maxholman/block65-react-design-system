import fontMetrics from '@capsizecss/metrics/inter';
import { precomputeValues } from '@capsizecss/vanilla-extract';
import { createTheme, style } from '@vanilla-extract/css';
import { withUnit } from '../css-helpers.css.js';
import { fontThemeVars } from '../typography.css.js';

const interFontTheme = createTheme(fontThemeVars, {
  huge: {
    capHeight: withUnit(24),
    values: precomputeValues({
      capHeight: 24,
      leading: 42,
      fontMetrics,
    }),
  },
  large: {
    capHeight: withUnit(20),
    values: precomputeValues({
      capHeight: 20,
      leading: 45,
      fontMetrics,
    }),
  },
  medium: {
    capHeight: withUnit(16),
    values: precomputeValues({
      capHeight: 16,
      leading: 24,
      fontMetrics,
    }),
  },
  normal: {
    capHeight: withUnit(11.75),
    values: precomputeValues({
      capHeight: 11.75,
      leading: 24,
      fontMetrics,
    }),
  },
  small: {
    capHeight: withUnit(8.7272),
    values: precomputeValues({
      capHeight: 8.7272,
      // leading: 32,
      fontMetrics,
    }),
  },
  tiny: {
    capHeight: '8.727272',
    values: precomputeValues({
      capHeight: 8.727272,
      // leading: 32,
      fontMetrics,
    }),
  },
});

export const interFontThemeClassName = style([
  interFontTheme,
  {
    fontFamily: 'Inter, sans-serif',
  },
]);
