import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { colorVariantVars, genericVars, rotate } from './theme.css.js';

export type ButtonVariant = 'standard' | 'ghost' | 'subtle' | 'transparent';

export const iconClass = style({
  display: 'inline-flex',
  height: '1em',
  aspectRatio: '1/1',
  alignItems: 'center',
  justifySelf: 'center',
});

const base = style({
  cursor: 'pointer',
  borderStyle: 'solid',
  display: 'flex',
  borderWidth: genericVars.border.weight.normal,
  borderRadius: genericVars.radius.standard,
  flexDirection: 'row',
  alignItems: 'center',
  padding: `${genericVars.space.small} ${genericVars.space.standard}`,
  textAlign: 'center',
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
  padding: `${genericVars.space.tiny} ${genericVars.space.small}`,
  fontSize: genericVars.text.size.small,
});

export const iconButtonClass = style({
  gap: `0 0.5em`,
});

const buttonColorVar = createVar();

const variants: Record<
  ButtonVariant,
  {
    backgroundColor: string;
    color: string;
    borderColor: string;
    backgroundColorHover?: string;
    borderColorHover?: string;
  }
> = {
  standard: {
    backgroundColor: colorVariantVars.bb,
    color: colorVariantVars.hhh,
    borderColor: colorVariantVars.bb,
  },
  ghost: {
    backgroundColor: colorVariantVars.hhh,
    color: colorVariantVars.bb,
    borderColor: colorVariantVars.bb,
  },
  subtle: {
    backgroundColor: colorVariantVars.hh,
    color: colorVariantVars.bb,
    borderColor: colorVariantVars.hh,
    borderColorHover: colorVariantVars.h,
  },
  transparent: {
    backgroundColor: 'transparent',
    color: 'inherit',
    borderColor: 'transparent',
    backgroundColorHover: colorVariantVars.hh,
    // borderColorHover: colorVariantVars.h,
  },
};

export const buttonVariantClasses = styleVariants(variants, (variant) => [
  base,
  {
    vars: {
      ...(variant.color && { [buttonColorVar]: variant.color }),
    },
    backgroundColor: variant.backgroundColor || JSON.stringify(variant),
    color: buttonColorVar,
    borderColor: variant.borderColor,
    selectors: {
      // :where to avoid specificity issues with busy etc
      ...((variant.borderColorHover || variant.backgroundColorHover) && {
        '&:where(:not([disabled]):hover)': {
          borderColor: variant.borderColorHover || variant.borderColor,
          ...(variant.backgroundColorHover && {
            backgroundColor: variant.backgroundColorHover,
          }),
        },
      }),
    },
  },
]);

// WARN: this is defined last so it can override other styles
// with the same specificity
export const busyButtonClass = style({
  color: 'transparent',
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  selectors: {
    // '&:hover': {
    //   borderColor: 'revert',
    // },
    '&::before': {
      height: '1em',
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

export const inlineBleedClass = style({
  marginTop: calc(genericVars.space.small).negate().toString(),
  marginBottom: calc(`${genericVars.space.small}`).negate().toString(),
});
