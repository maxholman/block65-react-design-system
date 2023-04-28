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
      capHeight: 29,
      leading: 42, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),
    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(29),
  },

  // aim for 2rem - 32px
  '5': {
    values: precomputeValues({
      capHeight: 24,
      leading: 38, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),
    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(24),
  },

  // aim for 1.5rem - 24px
  '4': {
    values: precomputeValues({
      capHeight: 17,
      leading: 27, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),
    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(17),
  },

  '3': {
    // aim for 1.25rem - 20px
    values: precomputeValues({
      capHeight: 14,
      leading: 22, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),
    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(14),
  },

  '2': {
    // aim for 1.1rem - 17.6px
    values: precomputeValues({
      capHeight: 13,
      leading: 20, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),

    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(13),
  },

  '1': {
    // aim for 1rem - 16px
    values: precomputeValues({
      capHeight: 12,
      leading: 20, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),

    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(12),
  },

  // aim for 0.75rem - 12px
  '0': {
    values: precomputeValues({
      capHeight: 9,
      leading: 14, // manually set based on cap height and whether the descenders are showing
      fontMetrics: interFontMetrics,
    }),

    // this is present so other components can know the
    // capHeight of this font size
    capHeight: withUnit(9),
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
