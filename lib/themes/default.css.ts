import { type MapLeafNodes, createTheme } from '@vanilla-extract/css';
import { colorModeThemeVars } from '../box.css.js';

export const darkModeDefaultThemeTokens = {
  fgColor: 'var(--gray-0)',
  bgColor: 'var(--gray-9)',
  borderColor: 'var(--gray-9)',
  bgColorAttentionMuted: '#30280f',
} satisfies MapLeafNodes<typeof colorModeThemeVars, string>;

export const lightModeDefaultThemeTokens = {
  fgColor: '',
  bgColor: '',
  borderColor: '',
  bgColorAttentionMuted: '',
} satisfies MapLeafNodes<typeof colorModeThemeVars, string>;

export const darkModeColorThemeClassName = createTheme(
  colorModeThemeVars,
  darkModeDefaultThemeTokens,
);
export const lightModeColorThemeClassName = createTheme(
  colorModeThemeVars,
  lightModeDefaultThemeTokens,
);
