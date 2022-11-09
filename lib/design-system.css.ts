import { createTheme, createThemeContract, style } from '@vanilla-extract/css';

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
});
