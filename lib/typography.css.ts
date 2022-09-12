import { style, styleVariants } from '@vanilla-extract/css';
import { globalThemeContract } from './themes.css.js';

export const textStyle = style(
  {
    // lineHeight: globalThemeContract.text.lineHeight.standard,
  },
  'textStyle',
);

export const secondaryStyle = style(
  [
    textStyle,
    {
      fontWeight: globalThemeContract.text.weight.thin,
      // lineHeight: globalThemeContract.text.lineHeight.standard,
    },
  ],
  'secondaryStyle',
);

export const fontSize = styleVariants(
  globalThemeContract.text.size,
  (size) => ({ fontSize: size }),
  'fontSize',
);
