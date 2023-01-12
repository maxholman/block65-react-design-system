// @ts-expect-error - was not able to fix this, see module augmentation
import capsizeFontMetricsInter from '@capsizecss/metrics/inter';
import { createTextStyle, precomputeValues } from '@capsizecss/vanilla-extract';
import {
  createTheme,
  createVar,
  style,
  StyleRule,
  styleVariants,
} from '@vanilla-extract/css';
import { withUnit } from './css-helpers.css.js';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5';

export const currentCapHeight = createVar();
export const lineGap = createVar();
export const lineHeightRatio = createVar();

export type FontSize =
  | 'tiny'
  | 'small'
  | 'normal'
  | 'medium'
  | 'large'
  | 'huge';

export const [fontThemeClassName, capsizeVars] = createTheme({
  huge: {
    capHeight: withUnit(24),
    values: precomputeValues({
      capHeight: 24,
      leading: 42,
      fontMetrics: capsizeFontMetricsInter,
    }),
  },
  large: {
    capHeight: withUnit(20),
    values: precomputeValues({
      capHeight: 20,
      leading: 45,
      fontMetrics: capsizeFontMetricsInter,
    }),
  },
  medium: {
    capHeight: withUnit(16),
    values: precomputeValues({
      capHeight: 16,
      leading: 24,
      fontMetrics: capsizeFontMetricsInter,
    }),
  },
  normal: {
    capHeight: withUnit(11.75),
    values: precomputeValues({
      capHeight: 11.75,
      leading: 24,
      fontMetrics: capsizeFontMetricsInter,
    }),
  },
  small: {
    capHeight: withUnit(8.7272),
    values: precomputeValues({
      capHeight: 8.7272,
      // leading: 32,
      fontMetrics: capsizeFontMetricsInter,
    }),
  },
  tiny: {
    capHeight: '8.727272',
    values: precomputeValues({
      capHeight: 8.727272,
      // leading: 32,
      fontMetrics: capsizeFontMetricsInter,
    }),
  },
});

export const secondaryClass = style({
  color: hsl(0, 0, contrastSchemeVars.level4.l),
});

export const strongClass = style({
  fontWeight: genericVars.text.weight.bold,
});

export const codeClass = style({
  fontFamily: 'monospace',
});

export const fontSizeVariantVars = styleVariants(capsizeVars, (vars) => ({
  vars: { [currentCapHeight]: vars.capHeight },
}));

export const fontSizeVariantTextStyles = styleVariants(capsizeVars, (vars) => [
  createTextStyle(vars.values),
]);

export const fontSizeVariants = styleVariants(capsizeVars, (_, key) => [
  fontSizeVariantVars[key],
  fontSizeVariantTextStyles[key],
]);

const levelVariants: Record<HeadingLevel, Array<StyleRule | string>> = {
  '1': [
    fontSizeVariants.huge,
    {
      fontWeight: genericVars.text.weight.bold,
      letterSpacing: '-0.05rem',
    },
  ],
  '2': [
    fontSizeVariants.large,
    {
      fontWeight: genericVars.text.weight.bold,
      letterSpacing: '-0.05rem',
    },
  ],
  '3': [
    fontSizeVariants.medium,
    {
      fontWeight: genericVars.text.weight.bold,
      letterSpacing: '-0.05rem',
    },
  ],
  '4': [
    fontSizeVariants.normal,
    {
      fontWeight: genericVars.text.weight.semiBold,
      letterSpacing: '-0.05rem',
    },
  ],
  '5': [
    fontSizeVariants.normal,
    {
      fontWeight: genericVars.text.weight.medium,
      color: hsl(0, 0, contrastSchemeVars.level4.l),
    },
  ],
}; // satisfies Record<HeadingLevel, ComplexStyleRule>;

export const levelVariantClasses = styleVariants(levelVariants, (rules) => [
  ...rules,
  {
    // makes sure any heading ascenders or descenders overlap above anything
    // else (for example an border or underline)
    zIndex: 1,
  },
]);
