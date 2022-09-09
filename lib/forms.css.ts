import { style } from '@vanilla-extract/css';
import { globalThemeContract } from './themes.css.js';

export const formInput = style({
  borderWidth: globalThemeContract.border.weight.standard,
  borderColor: globalThemeContract.levelTop.ink,
  borderStyle: 'solid',
  padding: globalThemeContract.space.standard,
  background: globalThemeContract.level2.surface,
  borderRadius: globalThemeContract.radius.standard,
  lineHeight: 1.6,
});

export const labelStyle = style(
  {
    selectors: {
      '&:only-child': {
        vars: { shadowColor: 'black' },
      },
    },
  },
  'labelStyle',
);
