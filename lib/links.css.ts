import { style } from '@vanilla-extract/css';
import { globalThemeVars } from './global-theme.css.js';

export const linkStyle = style(
  {
    textDecoration: 'underline',
    color: globalThemeVars.color.buttons.accentSurface,
  },
  'linkStyle',
);
