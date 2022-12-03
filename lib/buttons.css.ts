import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './design-system.css.js';
import { rotate } from './keyframes.css.js';
import { colorThemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export type ButtonVariant =
  | 'standard'
  | 'neutral'
  | 'ghost'
  | 'subtle'
  | 'transparent';

export const iconClass = style({
  display: 'inline-flex',
  height: '1em',
  aspectRatio: '1/1',
  alignItems: 'center',
  justifySelf: 'center',
  justifyContent: 'center',
});

const basePadding = createVar();

const base = style({
  vars: {
    [basePadding]: genericVars.space.small,
  },
  cursor: 'pointer',
  borderStyle: 'solid',
  display: 'flex',
  borderWidth: genericVars.border.weight.normal,
  borderRadius: genericVars.radius.medium,
  flexDirection: 'row',
  alignItems: 'center',
  padding: `${calc(basePadding).divide(2).toString()} ${basePadding}`,
  justifyContent: 'center',
  fontSize: genericVars.text.size.normal,
  userSelect: 'none',
  selectors: {
    '&[disabled]': {
      pointerEvents: 'none',
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
  vars: {
    [basePadding]: genericVars.space.tiny,
  },
  // padding: `${genericVars.space.tiny} ${genericVars.space.small}`,
  fontSize: genericVars.text.size.small,
});

const variants: Record<
  ButtonVariant,
  {
    backgroundColor?: string;
    color: string;
    borderColor: string;
    backgroundColorHover?: string;
    borderColorHover?: string;
  }
> = {
  standard: {
    backgroundColor: hsl(
      colorThemeVars.accent.h,
      colorThemeVars.accent.s,
      colorThemeVars.accent.l,
    ),
    color: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 100),
    borderColor: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 50),
  },
  neutral: {
    backgroundColor: hsl(colorThemeVars.accent.h, 10, 50),
    color: hsl(colorThemeVars.accent.h, 10, '90%'),
    borderColor: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, '90%'),
  },
  ghost: {
    color: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 50),
    borderColor: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 50),
  },
  subtle: {
    backgroundColor: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 90),
    color: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 40),
    borderColor: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 90),
    borderColorHover: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 80),
  },
  transparent: {
    backgroundColor: 'transparent',
    color: 'inherit',
    borderColor: 'transparent',
    backgroundColorHover: hsl(
      colorThemeVars.accent.h,
      colorThemeVars.accent.s,
      '90%',
    ),
  },
};

export const buttonVariantClasses = styleVariants(variants, (variant) => [
  base,
  {
    ...(variant.backgroundColor && {
      backgroundColor: variant.backgroundColor,
    }),
    color: variant.color,
    borderColor: variant.borderColor,
    selectors: {
      // :where to avoid specificity issues with busy/disabled etc
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

export const visiblyHiddenClass = style({
  visibility: 'hidden',
});

// WARN: this is defined last so it can override other styles
// with the same specificity
export const busyButtonClass = style({
  pointerEvents: 'none',
  selectors: {
    '&::before': {
      height: '1em',
      aspectRatio: '1/1',
      content: '""',
      position: 'absolute',
      margin: 'auto',
      borderStyle: 'solid',
      borderWidth: genericVars.border.weight.normal,
      borderColor: 'transparent',
      borderTopColor: 'currentColor',
      borderRadius: genericVars.radius.maximum,
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
