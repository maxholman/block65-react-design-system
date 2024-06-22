import { style } from '@vanilla-extract/css';
import { globalVars } from './vars.css.js';

export const designSystemClassName = style({
  color: globalVars.color.fgColor,
  backgroundColor: globalVars.color.bgColor,
});
