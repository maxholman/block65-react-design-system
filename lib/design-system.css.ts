import {
  createTheme,
  createThemeContract,
  createVar,
  fallbackVar,
  style,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { hsl } from './utils.js';

export type Space = 'none' | 'large' | 'small' | 'tiny' | 'huge' | 'standard';

export type FontSize =
  | 'tiny'
  | 'small'
  | 'normal'
  | 'medium'
  | 'large'
  | 'huge';

export const genericVars = createThemeContract({
  text: {
    size: {
      tiny: 'text-size-tiny',
      small: 'text-size-small',
      normal: 'text-size-normal',
      medium: 'text-size-medium',
      large: 'text-size-large',
      huge: 'text-size-huge',
    },
    weight: {
      thin: 'text-weight-thin',
      extraLight: 'text-weight-extra-light',
      light: 'text-weight-light',
      normal: 'text-weight-normal',
      medium: 'text-weight-medium',
      bold: 'text-weight-bold',
      semiBold: 'text-weight-semi-bold',
      heavy: 'text-weight-heavy',
    },
    lineHeight: {
      standard: 'text-line-height-standard',
    },
  },
  border: {
    weight: {
      thin: 'border-weight-thin',
      normal: 'border-weight-normal',
      thick: 'border-weight-thick',
    },
  },
  radius: {
    small: 'radius-small',
    standard: 'radius-standard',
    large: 'radius-large',
    maximum: 'radius-tight',
  },
  shadow: {
    shallow: 'shadow-shallow',
    standard: 'shadow-standard',
    deep: 'shadow-deep',
  },
  space: {
    none: 'space-none',
    tiny: 'space-tiny',
    small: 'space-small',
    standard: 'space-standard',
    large: 'space-large',
    huge: 'space-huge',
  },
});

export const genericThemeClass = createTheme(genericVars, {
  text: {
    size: {
      tiny: '0.7rem',
      small: '0.8rem',
      normal: '1rem',
      medium: '1.125rem',
      large: '1.5rem',
      huge: '2rem',
    },
    weight: {
      thin: '100',
      extraLight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semiBold: '500',
      bold: '600',
      heavy: '900',
    },
    lineHeight: {
      standard: '1.5',
    },
  },
  border: {
    weight: {
      thin: '0.05rem',
      normal: '0.125rem',
      thick: '0.25rem',
    },
  },
  radius: {
    small: '0.125rem',
    standard: '0.25rem',
    large: '0.5rem',
    maximum: '50%',
  },
  shadow: {
    shallow: '0.05rem',
    standard: '0.05rem',
    deep: '0.05rem',
  },
  space: {
    none: '0',
    tiny: '0.2rem',
    small: '0.6rem',
    standard: '1rem',
    large: '1.5rem',
    huge: '2rem',
  },
});

export const sansSerifFontStyle = style({
  fontFamily: 'sans-serif',
  // letterSpacing: '-0.02rem',
});

export const colorThemeVars = createThemeContract({
  accent: {
    h: 'color-accent-h',
    s: 'color-accent-s',
    l: 'color-accent-l',
  },
  tone: {
    promo: {
      h: 'color-tone-promo-h',
    },
    info: {
      h: 'color-tone-info-h',
    },
    positive: {
      h: 'color-tone-positive-h',
    },
    warn: {
      h: 'color-tone-warn-h',
    },
    critical: {
      h: 'color-tone-critical-h',
    },
  },
});

export type Tone = keyof typeof colorThemeVars.tone;

export const toneH = createVar('toneH');

export const backgroundColorVars = createThemeContract({
  h: 'bg-color-h',
  s: 'bg-color-s',
  l: 'bg-color-l',
});

export const backgroundColorThemeClass = createTheme(backgroundColorVars, {
  h: colorThemeVars.accent.h,
  s: calc(colorThemeVars.accent.s).subtract('75%').toString(),
  l: calc(colorThemeVars.accent.l).add('18%').toString(),
});

export const colorVariantVars = createThemeContract({
  bbb: 'color-variant-bbb',
  bb: 'color-variant-bb',
  b: 'color-variant-b',
  hb: 'color-variant-hb',
  h: 'color-variant-h',
  hh: 'color-variant-hh',
  hhh: 'color-variant-hhh',
});

const colorVarsWithFallback = {
  h: fallbackVar(colorThemeVars.accent.h, '220'),
  s: fallbackVar(colorThemeVars.accent.s, '40%'),
};

export const colorVariantsClass = createTheme(colorVariantVars, {
  bbb: hsl(colorVarsWithFallback.h, colorVarsWithFallback.s, '30%'),
  bb: hsl(colorVarsWithFallback.h, colorVarsWithFallback.s, '32%'),
  b: hsl(colorVarsWithFallback.h, colorVarsWithFallback.s, '45%'),
  hb: hsl(colorVarsWithFallback.h, colorVarsWithFallback.s, '55%'),
  h: hsl(colorVarsWithFallback.h, colorVarsWithFallback.s, '87%'),
  hh: hsl(colorVarsWithFallback.h, colorVarsWithFallback.s, '93%'),
  hhh: hsl(colorVarsWithFallback.h, colorVarsWithFallback.s, '98%'),
});
