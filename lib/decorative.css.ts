import { style } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export const dividerStyle = style({
  height: genericVars.border.weight.thin,
  backgroundColor: hsl(colorThemeVars.accent.h, 0, contrastSchemeVars.ink.l),
});
