import { style, styleVariants } from '@vanilla-extract/css';
import { globalThemeContract } from './themes.css.js';

export type ButtonVariant = keyof typeof buttonVariants;

const base = style(
  {
    borderWidth: globalThemeContract.border.weight.standard,
    borderStyle: 'solid',
    borderRadius: globalThemeContract.radius.standard,
    padding: globalThemeContract.space.standard,
    textAlign: globalThemeContract.align.center,
    cursor: 'pointer',
  },
  'base',
);

export const buttonVariants = styleVariants({
  standard: [
    base,
    {
      background: globalThemeContract.color.buttons.standard,
      borderColor: globalThemeContract.color.buttons.standard,
    },
  ],
  ghost: [
    base,
    {
      borderColor: globalThemeContract.color.buttons.standard,
      color: globalThemeContract.color.buttons.standard,
    },
  ],
  subtle: [
    base,
    {
      background: globalThemeContract.color.buttons.subtle,
      borderColor: globalThemeContract.color.buttons.subtle,
    },
  ],
});
