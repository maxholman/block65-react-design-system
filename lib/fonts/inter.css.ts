// eslint-disable-next-line import/no-extraneous-dependencies
import interFontMetrics from '@capsizecss/metrics/inter';
// eslint-disable-next-line import/no-extraneous-dependencies
import { precomputeValues } from '@capsizecss/vanilla-extract';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createTheme, style } from '@vanilla-extract/css';
import { withUnit } from '../css-helpers.css.js';
import { fontThemeVars } from '../typography.css.js';

const interFontTheme = createTheme(fontThemeVars, {
  // aim for 2.5rem - 40px
  '6': {
    values: precomputeValues({
      capHeight: 29.0909,
      leading: 42, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),
    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(29.0909),
  },

  // aim for 2rem - 32px
  '5': {
    values: precomputeValues({
      capHeight: 23.27272,
      leading: 35, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),
    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(23.27272),
  },

  // aim for 1.5rem - 24px
  '4': {
    values: precomputeValues({
      capHeight: 17.45454,
      leading: 25, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),
    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(17.45454),
  },

  '3': {
    // aim for 1.25rem - 20px
    values: precomputeValues({
      capHeight: 14.54545,
      leading: 22, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),
    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(14.54545),
  },

  '2': {
    // aim for 1.1rem - 17.6px
    values: precomputeValues({
      capHeight: 13.0909,
      leading: 20, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),

    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(13.0909),
  },

  '1': {
    // aim for 1rem - 16px
    values: precomputeValues({
      capHeight: 11.63636,
      leading: 20, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),

    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(11.63636),
  },

  // aim for 0.75rem - 12px
  '0': {
    values: precomputeValues({
      capHeight: 8.72727,
      leading: 14, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),

    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(8.72727),
  },

  // aim for 0.5rem - 8px
  '00': {
    values: precomputeValues({
      capHeight: 6,
      leading: 10, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),

    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(6),
  },
});

export const interFontThemeClassName = style([
  interFontTheme,
  {
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '-0.011em',
  },
]);
