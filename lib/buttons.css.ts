import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { colorVariantVars, genericVars, rotate } from './theme.css.js';

export type ButtonVariant = 'standard' | 'ghost' | 'subtle';

const base = style({
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
      cursor: 'default',
      filter: 'grayscale(1)',
    },

    '&:active': {
      outlineWidth: genericVars.border.weight.thick,
      outlineColor: 'initial',
    },
  },
});

export const compactButton = style({
  padding: `${genericVars.space.tiny} ${genericVars.space.standard}`,
  fontSize: genericVars.text.size.small,
});

const buttonColorVar = createVar();

const variants: Record<
  ButtonVariant,
  {
    background: string;
    color: string;
    borderColor: string;
    borderColorHover?: string;
  }
> = {
  standard: {
    background: colorVariantVars.bb,
    color: colorVariantVars.hhh,
    borderColor: colorVariantVars.bb,
  },
  ghost: {
    background: colorVariantVars.hhh,
    color: colorVariantVars.bb,
    borderColor: colorVariantVars.bb,
  },
  subtle: {
    background: colorVariantVars.hh,
    color: colorVariantVars.bb,
    borderColor: colorVariantVars.hh,
    borderColorHover: colorVariantVars.h,
  },
};

export const buttonVariantClasses = styleVariants(variants, (variant) => [
  base,
  {
    background: variant.background,
    color: variant.color,
    borderColor: variant.borderColor,
    vars: {
      [buttonColorVar]: variant.color,
    },
    selectors: {
      // :where to avoid specificity issues with busy etc
      ...(variant.borderColorHover && {
        '&:where(:not([disabled]):hover)': {
          borderColor: variant.borderColorHover || variant.borderColor,
        },
      }),
    },
  },
]);

// WARN: this is defined last so it can override other styles
// with the same specificity
export const busyButton = style({
  color: 'transparent',
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  selectors: {
    // '&:hover': {
    //   borderColor: 'revert',
    // },
    '&::before': {
      height: '60%',
      aspectRatio: '1/1',
      content: '""',
      position: 'absolute',
      margin: 'auto',
      borderStyle: 'solid',
      borderWidth: genericVars.border.weight.normal,
      borderColor: 'transparent',
      borderTopColor: buttonColorVar,
      borderRadius: '50%',
      animationName: rotate,
      animationDuration: '0.75s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
    },
  },
});
