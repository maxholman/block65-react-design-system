import { createTheme, type MapLeafNodes } from '@vanilla-extract/css';
import { calloutVars } from '../callout.css.js';
import { colorModeThemeVars } from '../core.css.js';
import { hslVar } from '../utils.js';

export const calloutDarkThemeTokens = {
  border: {
    radius: '0.5em',
    width: '1.5px',
  },
  variant: {
    info: {
      fgColor: hslVar('var(--blue-0-hsl)'),
      iconColor: hslVar('var(--blue-4-hsl)'),
      bgColor: hslVar('var(--blue-9-hsl)'),
      borderColor: hslVar('var(--blue-8-hsl)'),
    },
    critical: {
      fgColor: hslVar('var(--red-0-hsl)'),
      iconColor: hslVar('var(--red-3-hsl)'),
      bgColor: hslVar('var(--red-9-hsl)'),
      borderColor: hslVar('var(--red-8-hsl)'),
    },
    success: {
      fgColor: hslVar('var(--green-0-hsl)'),
      iconColor: hslVar('var(--green-3-hsl)'),
      bgColor: hslVar('var(--green-9-hsl)'),
      borderColor: hslVar('var(--green-8-hsl)'),
    },
    warning: {
      fgColor: hslVar('var(--yellow-0-hsl)'),
      iconColor: hslVar('var(--yellow-4-hsl)'),
      bgColor: colorModeThemeVars.bgColorAttentionMuted,
      borderColor: hslVar('var(--yellow-8-hsl)'),
    },
  },
} satisfies MapLeafNodes<typeof calloutVars, string>;

export const calloutDarkThemeClassName = createTheme(
  calloutVars,
  calloutDarkThemeTokens,
);
