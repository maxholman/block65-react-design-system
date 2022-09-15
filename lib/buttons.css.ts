import { style, styleVariants } from '@vanilla-extract/css';
import { colorVariantVars, genericVars, rotate } from './theme.css.js';

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
    transition: 'all 0.1s ease-in-out',
    userSelect: 'none',
    selectors: {
      '&[disabled]': {
        // pointerEvents: 'none',
        cursor: 'not-allowed',
        filter: 'grayscale(1)',
      },

      '&:active': {
        outlineWidth: genericVars.border.weight.thick,
        outlineColor: 'initial',
      },
    },
  },
  'base',
);

export const busyButton = style(
  {
    // outline: '10px solid blue',
    color: 'transparent',
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
    selectors: {
      '&::before': {
        width: '1.3rem',
        aspectRatio: '1/1',
        content: '""',
        position: 'absolute',
        margin: 'auto',
        borderStyle: 'solid',
        borderWidth: genericVars.border.weight.normal,
        borderColor: 'transparent',
        borderTopColor: 'currentColor',
        borderRadius: '50%',
        animationName: rotate,
        animationDuration: '0.75s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
      },
    },
  },
  'busyButton',
);

export const compactButton = style(
  {
    padding: `${genericVars.space.tiny} ${genericVars.space.standard}`,
  },
  'compactButton',
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
