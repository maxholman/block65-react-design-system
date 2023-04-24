// eslint-disable-next-line import/no-extraneous-dependencies
import { createVar, style } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export const focusColorVar = createVar();
export const focusRadiusVar = createVar();
export const focusWidthVar = createVar();

export const focusableClassName = style({
  vars: {
    [focusColorVar]: hsl(
      colorThemeVars.tones.accent.h,
      colorThemeVars.tones.accent.s,
      contrastSchemeVars.foreground2.l,
    ),
    [focusRadiusVar]: genericVars.radius.small,
    [focusWidthVar]: genericVars.border.width['2'],
  },
});

export const focusVisibleClassName = style([
  focusableClassName,
  {
    selectors: {
      '&:focus-visible': {
        outlineStyle: 'solid',
        outlineWidth: focusWidthVar,
        outlineOffset: genericVars.space['00'],
        outlineColor: focusColorVar,
      },
    },
  },
]);
