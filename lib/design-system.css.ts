import { style } from '@vanilla-extract/css';
import { baseVars } from './vars.css.js';

export const designSystemClassName = style({
  color: baseVars.color.fgColor,
  backgroundColor: baseVars.color.bgColor,
});
