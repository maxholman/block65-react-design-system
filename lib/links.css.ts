import { style } from '@vanilla-extract/css';
import { colorThemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export const linkStyle = style({
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  color: hsl(
    colorThemeVars.accent.h,
    colorThemeVars.accent.s,
    colorThemeVars.accent.l,
  ),
});
