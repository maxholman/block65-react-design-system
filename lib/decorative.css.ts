import { style } from '@vanilla-extract/css';
import { genericVars, globalVars } from './box.css.js';

export const dividerClassName = style({
  height: genericVars.border.width[1],
  backgroundColor: globalVars.color.muted.borderColor,
});
