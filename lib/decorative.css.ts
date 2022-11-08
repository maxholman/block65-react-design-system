import { style } from '@vanilla-extract/css';
import { colorVariantVars, genericVars } from './design-system.css.js';

export const dividerStyle = style({
  height: genericVars.border.weight.normal,
  backgroundColor: colorVariantVars.hh,
});
