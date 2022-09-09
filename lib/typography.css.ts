import { style, styleVariants } from '@vanilla-extract/css';
import { globalThemeContract } from './themes.css.js';

export const text = style(
  {
    lineHeight: globalThemeContract.text.lineHeight.standard,
  },
  'textStyle',
);

export const fontSize = styleVariants({
  tiny: {
    fontSize: globalThemeContract.text.size.tiny,
  },
  small: {
    fontSize: globalThemeContract.text.size.small,
  },
  standard: {
    fontSize: globalThemeContract.text.size.standard,
  },
  large: {
    fontSize: globalThemeContract.text.size.large,
  },
  huge: {
    fontSize: globalThemeContract.text.size.huge,
  },
});
