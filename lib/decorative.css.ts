import { style } from '@vanilla-extract/css';
import { propsVars, globalVars } from './vars.css.js';

export const dividerClassName = style({
  height: propsVars.border.width[1],
  backgroundColor: globalVars.color.muted.borderColor,
});
