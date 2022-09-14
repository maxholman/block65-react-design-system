import { style, styleVariants } from '@vanilla-extract/css';
import { globalThemeVars } from './global-theme.css.js';

export const textStyle = style(
  {
    lineHeight: globalThemeVars.text.lineHeight.standard,
  },
  'textStyle',
);

export const secondaryStyle = style(
  {
    fontWeight: globalThemeVars.text.weight.normal,
    // color: globalThemeVars.text,
    // lineHeight: globalThemeContract.text.lineHeight.standard,
  },
  'secondaryStyle',
);

export const strongStyle = style(
  {
    fontWeight: globalThemeVars.text.weight.bold,
  },
  'strongStyle',
);

export const fontStyle = styleVariants(
  globalThemeVars.text.size,
  (value) => ({ fontSize: value }),
  'fontSize',
);

export const toneStyle = styleVariants(
  globalThemeVars.color.tone,
  (value) => ({ color: value }),
  'toneStyle',
);
