// eslint-disable-next-line import/no-extraneous-dependencies
import fontMetrics from '@capsizecss/metrics/inter';
// eslint-disable-next-line import/no-extraneous-dependencies
import { precomputeValues } from '@capsizecss/vanilla-extract';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createTheme, style } from '@vanilla-extract/css';
import { withUnit } from '../css-helpers.css.js';
import { fontThemeVars } from '../typography.css.js';

const interFontTheme = createTheme(fontThemeVars, {
  // aim for 2.5rem - 40px
  '6': {
    capHeight: withUnit(29.1),
    values: precomputeValues({
      capHeight: 29.1,
      leading: 29.1 * 1.5,
      fontMetrics,
    }),
  },

  // aim for 2rem - 32px
  '5': {
    capHeight: withUnit(23.3),
    values: precomputeValues({
      capHeight: 23.3,
      leading: 23.3 * 1.5,
      fontMetrics,
    }),
  },

  // aim for 1.5rem - 24px
  '4': {
    capHeight: withUnit(17.5),
    values: precomputeValues({
      capHeight: 17.5,
      leading: 17.5 * 1.6,
      fontMetrics,
    }),
  },

  '3': {
    // aim for 1.25rem - 20px
    capHeight: withUnit(14.6),
    values: precomputeValues({
      capHeight: 14.6,
      leading: 14.6 * 1.5,
      fontMetrics,
    }),
  },

  '2': {
    // aim for 1.1rem - 17.6px
    capHeight: withUnit(12.8),
    values: precomputeValues({
      capHeight: 12.8,
      leading: 12.8 * 1.6,
      fontMetrics,
    }),
  },

  '1': {
    // aim for 1rem - 16px
    capHeight: withUnit(11.636363),
    values: precomputeValues({
      capHeight: 11.636363,
      leading: 11.636363 * 1.6,
      fontMetrics,
    }),
  },

  // aim for 0.75rem - 12px
  '0': {
    capHeight: '8.727272',
    values: precomputeValues({
      capHeight: 8.727272,
      leading: 8.727272 * 1.75,
      fontMetrics,
    }),
  },

  // aim for 0.5rem - 8px
  '00': {
    capHeight: '5.818181',
    values: precomputeValues({
      capHeight: 5.818181,
      leading: 5.818181 * 1.75,
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
