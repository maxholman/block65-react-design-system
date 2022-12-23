import {
  createVar,
  style,
  StyleRule,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './design-system.css.js';
import { rotate } from './keyframes.css.js';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { toneH, toneS } from './tone.css.js';
import { hsl } from './utils.js';

export type ButtonVariant = 'standard' | 'ghost' | 'subtle' | 'transparent';

export const iconClass = style({
  display: 'flex',
  flexDirection: 'row',
  width: '1em',
  height: '1em',
  flexShrink: 0,
  alignItems: 'center',
});

const basePadding = createVar();

const base = style({
  vars: {
    [basePadding]: genericVars.space.small,
  },
  cursor: 'pointer',
  borderStyle: 'solid',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  flexWrap: 'nowrap',
  whiteSpace: 'nowrap',
  justifyContent: 'center',
  borderWidth: genericVars.border.weight.normal,
  borderRadius: genericVars.radius.medium,
  borderColor: 'transparent',
  padding: `${calc(basePadding).divide(2).toString()} ${basePadding}`,
  fontSize: genericVars.text.size.normal,
  userSelect: 'none',
  textAlign: 'center',
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
  fontSize: genericVars.text.size.small,
});

const hoverAlpha = createVar();

const variants: Record<ButtonVariant, StyleRule> = {
  standard: {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.level4.l),
    color: hsl(
      toneH,
      colorThemeVars.tones.accent.s,
      contrastSchemeVars.level0.l,
    ),
  },
  ghost: {
    color: hsl(toneH, toneS, contrastSchemeVars.level4.l),
    borderColor: hsl(toneH, toneS, contrastSchemeVars.level4.l),
    selectors: {
      '&:hover': {
        backgroundColor: hsl(toneH, toneS, contrastSchemeVars.level1.l, 0.75),
      },
    },
  },
  subtle: {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.level1.l),
    color: hsl(toneH, toneS, contrastSchemeVars.level4.l),
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

export const withIconClass = style({
  gap: genericVars.space.nano,
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  minWidth: 0,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});
