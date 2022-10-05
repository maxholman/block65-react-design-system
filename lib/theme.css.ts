import {
  createTheme,
  createThemeContract,
  fallbackVar,
  keyframes,
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
export type Align = 'start' | 'center' | 'end';
export type Tone = 'good' | 'bad';

export const genericVars = createThemeContract({
  color: {
    tone: {
      good: 'color-tone-good',
      bad: 'color-tone-bad',
    },
  },
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
  align: {
    start: 'align-start',
    center: 'align-center',
    end: 'align-end',
  },
});

export const genericThemeClass = createTheme(genericVars, {
  color: {
    tone: {
      good: 'green',
      bad: 'red',
    },
  },
  text: {
    size: {
      tiny: '0.6rem',
      small: '0.875rem',
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
    small: '0.4rem',
    standard: '0.6rem',
    large: '0.8rem',
    huge: '1rem',
  },
  align: {
    start: 'start',
    center: 'center',
    end: 'end',
  },
});

export const sansSerifFontStyle = style({
  fontFamily: 'Inter',
  letterSpacing: '-0.02rem',
});

export const colorVars = createThemeContract({
  color: {
    accent: {
      h: 'color-accent-h',
      s: 'color-accent-s',
      l: 'color-accent-l',
    },
  },
});

export const backgroundColorVars = createThemeContract({
  h: 'bg-color-h',
  s: 'bg-color-s',
  l: 'bg-color-l',
});

export const backgroundColorThemeClass = createTheme(backgroundColorVars, {
  h: colorVars.color.accent.h,
  s: calc(colorVars.color.accent.s).subtract('75%').toString(),
  l: calc(colorVars.color.accent.l).add('18%').toString(),
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
  h: fallbackVar(colorVars.color.accent.h, '220deg'),
  s: fallbackVar(colorVars.color.accent.s, '40%'),
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

export const colacubeColorThemeClass = createTheme(colorVars, {
  color: {
    accent: {
      h: '230',
      s: '55%',
      l: '55%',
    },
  },
});

export const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});
