import { style } from '@vanilla-extract/css';
import { generalVars, globalVars } from './ve.css.js';

export const dividerClassName = style({
  height: generalVars.border.width[1],
  backgroundColor: globalVars.color.muted.borderColor,
});
