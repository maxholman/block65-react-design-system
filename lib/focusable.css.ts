import { createVar, style } from '@vanilla-extract/css';
import { propsVars } from './vars.css.js';

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
    [focusRadiusVar]: propsVars.radius['1'],
    [focusWidthVar]: propsVars.border.width['2'],
  },
});

export const focusVisibleClassName = style([
  focusableClassName,
  {
    selectors: {
      '&:focus-visible': {
        outlineStyle: 'solid',
        outlineWidth: focusWidthVar,
        outlineOffset: propsVars.space['00'],
        outlineColor: focusColorVar,
      },
    },
  },
]);
