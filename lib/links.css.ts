import { style } from '@vanilla-extract/css';
import { colorVars } from './theme.css.js';
import { hsl } from './utils.js';

export const linkStyle = style({
  cursor: 'pointer',
  textDecoration: 'underline',
  color: hsl(
    colorVars.color.accent.h,
    colorVars.color.accent.s,
    colorVars.color.accent.l,
  ),
});
