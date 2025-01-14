import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const genericVars = createThemeContract({
  text: {
    size: {
      nano: 'text-size-nano',
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
      semiBold: 'text-weight-semi-bold',
      bold: 'text-weight-bold',
      heavy: 'text-weight-heavy',
    },
    lineHeight: {
      standard: 'text-line-height-standard',
    },
  },
  border: {
    weight: {
      hairline: 'border-weight-hairline',
      thin: 'border-weight-thin',
      normal: 'border-weight-normal',
      thick: 'border-weight-thick',
    },
  },
  radius: {
    small: 'radius-small',
    medium: 'radius-medium',
    large: 'radius-large',
    maximum: 'radius-tight',
  },
  shadow: {
    shallow: 'shadow-shallow',
    medium: 'shadow-medium',
    deep: 'shadow-deep',
  },
  space: {
    none: 'space-none',
    nano: 'space-nano',
    tiny: 'space-tiny',
    small: 'space-small',
    medium: 'space-medium',
    large: 'space-large',
    huge: 'space-huge',
  },
});

export const genericThemeClass = createTheme(genericVars, {
  text: {
    size: {
      nano: '0.5rem',
      tiny: '0.7rem',
      small: '0.8rem',
      normal: '1rem',
      medium: '1.25rem',
      large: '1.75rem',
      huge: '2.25rem',
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
      hairline: '0.075rem',
      thin: '0.1rem',
      normal: '0.125rem',
      thick: '0.25rem',
    },
  },
  radius: {
    small: '0.125rem',
    medium: '0.25rem',
    large: '0.5rem',
    maximum: '50%',
  },
  shadow: {
    shallow: '0.05rem',
    medium: '0.05rem',
    deep: '0.05rem',
  },
  space: {
    none: '0',
    nano: '0.25rem',
    tiny: '0.5rem',
    small: '0.75rem',
    medium: '1rem',
    large: '1.5rem',
    huge: '2rem',
  },
});
