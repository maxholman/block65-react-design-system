import { style } from '@vanilla-extract/css';
import { genericVars } from './core.css.js';

export const dividerStyle = style({
  height: genericVars.border.width[1],
});
