import {
  assignVars,
  ComplexStyleRule,
  createTheme,
  createThemeContract,
  style,
} from '@vanilla-extract/css';
import { hsl } from '../utils.js';

export type ColorScheme = 'dark' | 'light' | 'auto';

export type Tokens = {
  [key: string]: string;
};

// all of these will be overridable by the user
export const [defaultColorThemeClass, colorThemeVars] = createTheme({
  bg: {
    h: '180',
    s: '50%',
  },
  fg: {
    h: '90',
    s: '50%',
  },
  accent: {
    h: '60',
    s: '60%',
  },
  tones: {
    neutral: {
      h: '90',
      s: '50%',
    },
  },
});

// this just sets up the contract shape, no need for values or a class
export const colorSchemeVarsType = createThemeContract({
  tonesLightnessAdjust: '',
  bg: {
    l: '',
  },
  fg: {
    l: '',
  },
});

const lightMode = assignVars(colorSchemeVarsType, {
  tonesLightnessAdjust: '0%',
  bg: {
    l: '95%',
  },
  fg: {
    l: '30%',
  },
});

const darkMode = assignVars(colorSchemeVarsType, {
  tonesLightnessAdjust: '7%',
  bg: {
    l: '10%',
  },
  fg: {
    l: '85%',
  },
});

const darkStyleRule: ComplexStyleRule = {
  vars: darkMode,
  backgroundColor: hsl('50deg', '0%', colorSchemeVarsType.bg.l),
  color: hsl('50deg', '0%', colorSchemeVarsType.fg.l),
};

const lightStyleRule: ComplexStyleRule = {
  vars: lightMode,
  backgroundColor: hsl('50deg', '0%', colorSchemeVarsType.bg.l),
  color: hsl('50deg', '0%', colorSchemeVarsType.fg.l),
};

export const mediaPrefersClass = style({
  // vars: lightMode,
  // backgroundColor: 'red',

  '@media': {
    // '(prefers-color-scheme: dark)': darkStyleRule,
    // '(prefers-color-scheme: light)': lightStyleRule,
  },
});

export const darkClass = style(darkStyleRule);

export const lightClass = style(lightStyleRule);
