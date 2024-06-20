import { style } from '@vanilla-extract/css';
import { globalVars } from './box.css.js';
// import { genericVars } from "./box.css.js";

export const designSystemClassName = style({
  color: globalVars.color.default.fg,
  backgroundColor: globalVars.color.default.bg,
  fontSize: '1em',
});
