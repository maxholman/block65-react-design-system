import { style } from '@vanilla-extract/css';
import { globalThemeContract } from './themes.css.js';

export const formInput = style({
  borderWidth: globalThemeContract.border.weight.standard,
  borderColor: globalThemeContract.levelTop.ink,
  borderStyle: 'solid',
  padding: globalThemeContract.space.standard,
  background: globalThemeContract.level2.surface,
  lineHeight: 1.6,
  borderRadius: globalThemeContract.radius.standard,
});

export const formInputRadio = style([
  formInput,
  {
    borderRadius: globalThemeContract.radius.maximum,
  },
]);

export const formInputCheckbox = style([
  formInput,
  {
    borderRadius: 'initial',
  },
]);

export const labelStyle = style(
  {
    cursor: 'pointer',
    selectors: {
      '&:only-child': {
        vars: { shadowColor: 'black' },
      },
    },
  },
  'labelStyle',
);
