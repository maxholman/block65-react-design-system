import { style } from '@vanilla-extract/css';
import { propsVars, baseVars } from './vars.css.js';

export const dividerClassName = style({
  height: propsVars.border.width[1],
  backgroundColor: baseVars.color.muted.borderColor,
});
