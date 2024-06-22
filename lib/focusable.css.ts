import { createVar, style } from '@vanilla-extract/css';
import { generalVars } from './ve.css.js';

export const focusColorVar = createVar();
export const focusRadiusVar = createVar();
export const focusWidthVar = createVar();

export const focusableClassName = style({
  vars: {
    // [focusColorVar]: oklch(
    //   contrastSchemeVars.swatch.v7.l,
    //   contrastSchemeVars.swatch.v7.c,
    //   colorThemeVars.tones.accent.h,
    // ),
    [focusRadiusVar]: generalVars.radius['1'],
    [focusWidthVar]: generalVars.border.width['2'],
  },
});

export const focusVisibleClassName = style([
  focusableClassName,
  {
    selectors: {
      '&:focus-visible': {
        outlineStyle: 'solid',
        outlineWidth: focusWidthVar,
        outlineOffset: generalVars.space['00'],
        outlineColor: focusColorVar,
      },
    },
  },
]);
