import {
  createGlobalTheme,
  createThemeContract,
  style,
} from '@vanilla-extract/css';

export type Space = keyof typeof globalThemeVars.space;
export type FontSize = keyof typeof globalThemeVars.text.size;
export type Align = keyof typeof globalThemeVars.align;
export type Tone = keyof typeof globalThemeVars.color.tone;

export const globalThemeVars = createThemeContract({
  color: {
    buttons: {
      accentSurface: 'color-buttons-accent-surface',
      accentText: 'color-buttons-accent-text',
      subtleSurface: 'color-buttons-subtle-surface',
      subtleText: 'color-buttons-subtle-text',
    },
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

export const globalColorThemeVars = createThemeContract({
  color: {
    brandH: 'color-brand-h',
    brandS: 'color-brand-s',
    baseH: 'color-base-h',
    baseS: 'color-base-s',
  },
});

createGlobalTheme(':where(html)', globalColorThemeVars, {
  color: {
    brandH: '0',
    brandS: '0%',
    baseH: '0',
    baseS: '0%',
  },
});

createGlobalTheme(':where(html)', globalThemeVars, {
  color: {
    buttons: {
      accentSurface: 'blue',
      accentText: 'white',
      subtleSurface: 'dimgray',
      subtleText: 'white',
    },
    tone: {
      good: 'green',
      bad: 'red',
    },
  },
  text: {
    size: {
      tiny: '0.6rem',
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
      normal: '0.1rem',
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
  levelBottom: {
    surface: 'gray',
    ink: 'black',
    text: 'black',
  },
  level1: {
    surface: 'lightgray',
    ink: 'dimgray',
    text: 'dimgray',
  },
  level2: {
    surface: 'white',
    text: 'hsl(0deg 0% 30%)',
    ink: 'hsl(0 0 0 / 0.9)',
  },
  levelTop: {
    surface: 'white',
    text: 'hsl(0deg 0% 30%)',
    ink: 'hsl(0deg 0% 80%)',
  },
});

// const darkTheme = createTheme(globalThemeContract, {});

/* const interFontFace = fontFace({
  src: 'url(https://fonts.googleapis.com/css2?family=Inter&display=swap)',
}); */

export const sansSerifFontStyle = style({
  fontFamily: 'Inter',
});
