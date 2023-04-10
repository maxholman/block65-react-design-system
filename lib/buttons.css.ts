import {
  createVar,
  style,
  type StyleRule,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './design-system.css.js';
import { rotate } from './keyframes.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { toneH, toneS } from './tone.css.js';
import { currentCapHeight, fontSizeVariants } from './typography.css.js';
import { hsl } from './utils.js';

export type ButtonVariant =
  | 'standard'
  | 'ghost'
  | 'subtle'
  | 'transparent'
  | 'none';

export const iconClass = style({
  display: 'flex',
  flexDirection: 'row',
  width: currentCapHeight,
  height: currentCapHeight,
  aspectRatio: '1/1',
  flexShrink: 0,
  alignItems: 'center',
});

const basePadding = createVar();

const base = style([
  {
    vars: {
      [basePadding]: genericVars.space[4],
      [currentCapHeight]: genericVars.text.capHeights[1],
    },
    cursor: 'pointer',
    borderStyle: 'solid',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    borderWidth: genericVars.border.weight.normal,
    borderColor: 'transparent',
    padding: `${calc(basePadding).divide(2).toString()} ${basePadding}`,
    userSelect: 'none',
    textAlign: 'center',
    selectors: {
      '&[disabled]': {
        pointerEvents: 'none',
        cursor: 'default',
        filter: 'grayscale(1)',
      },
      '&:focus': {
        outlineStyle: 'solid',
        outlineOffset: genericVars.space[0],
        outlineColor: hsl(toneH, toneS, contrastSchemeVars.level4.l),
      },
    },
    transition: 'background 0.05s linear',
  },
]);

export const compactButton = style([
  fontSizeVariants[0],
  {
    vars: {
      [basePadding]: genericVars.space[3],
    },
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
    color: hsl(toneH, toneS, contrastSchemeVars.level5.l),
    borderColor: hsl(toneH, toneS, contrastSchemeVars.level4.l),
    selectors: {
      '&:hover': {
        backgroundColor: hsl(toneH, toneS, contrastSchemeVars.level1.l, 0.75),
      },
    },
  },
  subtle: {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.level1.l),
    color: hsl(toneH, 0, contrastSchemeVars.level5.l),
    borderColor: hsl(toneH, toneS, contrastSchemeVars.level1.l),
    selectors: {
      '&:hover': {
        borderColor: hsl(
          toneH,
          calc(toneS).subtract('15%').toString(),
          contrastSchemeVars.level2.l,
        ),
      },
    },
  },
  transparent: {
    vars: { [hoverAlpha]: '0' },
    color: hsl(toneH, toneS, contrastSchemeVars.level3.l),
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.level1.l, hoverAlpha),
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
