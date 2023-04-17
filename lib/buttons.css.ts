import {
  createVar,
  style,
  styleVariants,
  type StyleRule,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './design-system.css.js';
import { rotate } from './keyframes.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { toneH, toneS } from './tone.css.js';
import { currentCapHeight } from './typography.css.js';
import { hsl } from './utils.js';

export type ButtonVariant =
  | 'standard'
  | 'ghost'
  | 'subtle'
  | 'transparent'
  | 'none';

export const iconClass = style({
  width: '1em',
  maxHeight: '1em',
  aspectRatio: '1/1',
});

const base = style([
  {
    vars: {
      [currentCapHeight]: genericVars.text.capHeights[1],
    },
    cursor: 'pointer',
    borderStyle: 'solid',
    borderWidth: genericVars.border.weight.normal,
    borderColor: 'transparent',
    userSelect: 'none',
    selectors: {
      '&[disabled]': {
        pointerEvents: 'none',
        cursor: 'default',
        filter: 'grayscale(1)',
      },

      // keyboard
      '&:focus-visible': {
        outlineStyle: 'solid',
        outlineOffset: genericVars.border.weight.normal,
        outlineWidth: genericVars.border.weight.normal,
        outlineColor: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
      },
      // mouse, touch, or stylus
      '&:focus:not(:focus-visible)': {},
      // both
      '&:focus-visible,&:focus:not(:focus-visible)': {},

      // gives us the nice little animation on outlineOffset
      '&:active': {
        outlineOffset: 0,
      },
    },
    transition: 'all 0.05s linear',
  },
]);

const hoverAlpha = createVar();

const variants: Record<ButtonVariant, StyleRule> = {
  standard: {
    backgroundColor: hsl(toneH, toneS, 50),
    color: hsl(0, 0, 100),
  },
  none: {
    backgroundColor: 'transparent',
    color: 'inherit',
  },
  ghost: {
    color: hsl(toneH, toneS, contrastSchemeVars.foreground1.l),
    borderColor: hsl(toneH, toneS, contrastSchemeVars.foreground1.l),
    selectors: {
      '&:hover': {
        color: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
        backgroundColor: hsl(toneH, toneS, contrastSchemeVars.background2.l),
      },
    },
  },
  subtle: {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.background2.l),
    borderColor: hsl(toneH, toneS, contrastSchemeVars.foreground4.l),
    color: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
    selectors: {
      '&:hover': {
        borderColor: hsl(
          toneH,
          calc(toneS).subtract('15%').toString(),
          contrastSchemeVars.foreground3.l,
        ),
      },
    },
  },
  transparent: {
    vars: { [hoverAlpha]: '0' },
    color: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
    backgroundColor: hsl(
      toneH,
      toneS,
      contrastSchemeVars.background2.l,
      hoverAlpha,
    ),
    selectors: {
      '&:hover': {
        vars: { [hoverAlpha]: '0.5' },
      },
    },
  },
};

export const buttonVariantClasses = styleVariants(variants, (variant) => [
  base,
  variant,
]);

export const visiblyHiddenClass = style({
  visibility: 'hidden',
});

// WARN: this is defined last so it can override other styles
// with the same specificity
export const busyButtonClass = style({
  pointerEvents: 'none',
  selectors: {
    '&::after': {
      height: currentCapHeight,
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
  marginBlock: calc(genericVars.space[0]).negate().toString(),
});

export const withIconClass = style({
  gap: genericVars.space['00'],
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  minWidth: 0,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});
