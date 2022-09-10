import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

export type Space = keyof typeof globalThemeContract.space;
export type FontSize = keyof typeof globalThemeContract.text.size;
export type Align = keyof typeof globalThemeContract.align;

export const globalThemeContract = createThemeContract({
  color: {
    brand: 'color-brand',
    buttons: {
      standard: 'color-buttons-standard',
      subtle: 'color-buttons-subtle',
    },
  },
  text: {
    size: {
      tiny: 'text-size-tiny',
      small: 'text-size-small',
      standard: 'text-size-standard',
      large: 'text-size-large',
      huge: 'text-size-huge',
    },
    weight: {
      thin: 'text-weight-thin',
      light: 'text-weight-light',
      standard: 'text-weight-standard',
      bold: 'text-weight-bold',
      heavy: 'text-weight-heavy',
    },
    lineHeight: {
      standard: 'text-line-height-standard',
    },
  },
  border: {
    weight: {
      thin: 'border-weight-thin',
      standard: 'border-weight-standard',
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
  levelBottom: {
    surface: 'surface-0',
    text: 'text-0',
    ink: 'ink-0',
  },
  level1: {
    surface: 'surface-1',
    text: 'text-1',
    ink: 'ink-1',
  },
  level2: {
    surface: 'surface-2',
    text: 'text-2',
    ink: 'ink-2',
  },
  levelTop: {
    surface: 'surface-top',
    text: 'text-top',
    ink: 'ink-top',
  },
});

createGlobalTheme(':where(html)', globalThemeContract, {
  color: {
    brand: 'blue',
    buttons: {
      standard: 'blue',
      subtle: 'gray',
    },
  },
  text: {
    size: {
      tiny: '0.6rem',
      small: '0.8rem',
      standard: '1rem',
      large: '1.5rem',
      huge: '2rem',
    },
    weight: {
      thin: '100',
      light: '300',
      standard: '400',
      bold: '700',
      heavy: '900',
    },
    lineHeight: {
      standard: '1.5',
    },
  },
  border: {
    weight: {
      thin: '0.05rem',
      standard: '0.1rem',
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
    tiny: '0.1rem',
    small: '0.2rem',
    standard: '0.4rem',
    large: '0.6rem',
    huge: '0.8rem',
  },
  align: {
    start: 'start',
    center: 'center',
    end: 'end',
  },
  levelBottom: {
    surface: 'gray',
    ink: 'black',
    text: 'black',
  },
  level1: {
    surface: 'lightgray',
    ink: 'charcoal',
    text: 'charcoal',
  },
  level2: {
    surface: 'white',
    ink: 'charcoal',
    text: 'charcoal',
  },
  levelTop: {
    surface: 'white',
    ink: 'lightgray',
    text: 'lightgray',
  },
});

// const darkTheme = createTheme(globalThemeContract, {});
