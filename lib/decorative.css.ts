// eslint-disable-next-line import/no-extraneous-dependencies
import { style } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export const dividerStyle = style({
  height: genericVars.border.width[1],
  backgroundColor: hsl(
    colorThemeVars.tones.accent.h,
    0,
    contrastSchemeVars.foreground2.l,
  ),
});
