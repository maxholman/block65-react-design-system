import { style, styleVariants } from '@vanilla-extract/css';
import { colorVariantVars, genericVars } from './theme.css.js';

export type ButtonVariant = keyof typeof buttonVariants;

const base = style(
  {
    cursor: 'pointer',
    borderStyle: 'solid',
    borderWidth: genericVars.border.weight.normal,
    borderRadius: genericVars.radius.standard,
    padding: `${genericVars.space.standard} ${genericVars.space.large}`,
    textAlign: genericVars.align.center,
    fontSize: genericVars.text.size.normal,
    transition: 'all 0.1s linear',
    userSelect: 'none',
    selectors: {
      '&[disabled]': {
        // pointerEvents: 'none',
        cursor: 'not-allowed',
        filter: 'grayscale(1)',
      },
    },
  },
  'base',
);

export const busyButton = style(
  {
    outline: '1px solid blue',
    color: 'transparent',
    selectors: {
      '&::after': {
        content: 'busy',
      },
    },
  },
  'busyButton',
);

export const buttonVariants = styleVariants({
  standard: [
    base,
    {
      background: colorVariantVars.bb,
      color: colorVariantVars.hhh,
      borderColor: colorVariantVars.bb,
      selectors: {
        '&:not([disabled]):hover': {
          borderColor: colorVariantVars.bbb,
        },
      },
    },
  ],
  ghost: [
    base,
    {
      background: colorVariantVars.hhh,
      color: colorVariantVars.bb,
      borderColor: colorVariantVars.bb,
      selectors: {
        '&:not([disabled]):hover': {
          background: colorVariantVars.hh,
        },
      },
    },
  ],
  subtle: [
    base,
    {
      background: colorVariantVars.hh,
      borderColor: colorVariantVars.hh,
      color: colorVariantVars.bb,
      selectors: {
        '&:not([disabled]):hover': {
          borderColor: colorVariantVars.h,
        },
      },
    },
  ],
});
