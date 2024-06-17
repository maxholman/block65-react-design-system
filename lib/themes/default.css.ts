import { type MapLeafNodes, style } from '@vanilla-extract/css';
import type { defaultThemeVars } from '../core.css.js';

export const defaultEmptyThemeTokens = {
  fgColor: '',
  bgColor: '',
  borderColor: '',
} satisfies MapLeafNodes<typeof defaultThemeVars, string>;

export const defaultThemeClassName = style(defaultEmptyThemeTokens);
