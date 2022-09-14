import { style, assignVars } from '@vanilla-extract/css';
import { globalColorThemeVars, globalThemeVars } from './global-theme.css.js';

export const localColorTheme = style({
  vars: assignVars(globalColorThemeVars, {
    color: {
      baseH: '12',
      baseS: '100%',
      brandH: '12',
      brandS: '100%',
    },
  }),
});

export const localTheme = style({
  vars: assignVars(globalThemeVars.color, {
    buttons: {
      accentSurface: 'crimson',
      accentText: 'white',
      subtleSurface: 'palegreen',
      subtleText: 'forestgreen',
    },
  }),
});
