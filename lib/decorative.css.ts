import { style } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { colorThemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export const dividerStyle = style({
  height: genericVars.border.weight.normal,
  backgroundColor: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, '90%'),
});
