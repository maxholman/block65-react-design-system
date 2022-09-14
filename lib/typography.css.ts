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
  'secondaryStyle',
);

export const fontSize = styleVariants(
  globalThemeVars.text.size,
  (size) => ({ fontSize: size }),
  'fontSize',
);
