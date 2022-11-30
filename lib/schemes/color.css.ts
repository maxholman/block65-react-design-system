import {
  assignVars,
  ComplexStyleRule,
  createTheme,
  createThemeContract,
  style,
} from '@vanilla-extract/css';
import { hsl } from '../utils.js';

export type ColorScheme = 'dark' | 'light' | 'auto';

export type ContrastScheme = 'more' | 'less' | 'auto';

export type Tokens = {
  [key: string]: string;
};

// all of these will be overridable by the user
export const [defaultColorThemeClass, colorThemeVars] = createTheme({
  accent: {
    h: '220',
    s: '50%',
    l: '50%',
  },
  tones: {
    info: {
      h: '210',
      s: '50%',
      l: '70%',
    },
    neutral: {
      h: '210',
      s: '50%',
      l: '50%',
    },
    promo: {
      h: '280',
      s: '50%',
      l: '50%',
    },
    warn: {
      h: '35',
      s: '50%',
      l: '50%',
    },
    positive: {
      h: '120',
      s: '50%',
      l: '90%',
    },
    critical: {
      h: '0',
      s: '50%',
      l: '50%',
    },
  },
});

export type Tone = keyof typeof colorThemeVars.tones;

// this just sets up the contract shape, no need for values or a class
export const contrastSchemeVars = createThemeContract({
  bg: {
    l: '',
  },
  fg: {
    l: '',
  },
  ink: {
    l: '',
  },
});

const lightSchemeVars = assignVars(contrastSchemeVars, {
  bg: {
    l: '100%',
  },
  fg: {
    l: '20%',
  },
  ink: {
    l: '60%',
  },
});

const darkSchemeVars = assignVars(contrastSchemeVars, {
  bg: {
    l: '10%',
  },
  fg: {
    l: '85%',
  },
  ink: {
    l: '45%',
  },
});

const darkSchemeMoreContrastVars = assignVars(contrastSchemeVars, {
  bg: {
    l: '0%',
  },
  fg: {
    l: '100%',
  },
  ink: {
    l: '85%',
  },
});

const darkLessContrastVars = assignVars(contrastSchemeVars, {
  bg: {
    l: '10%',
  },
  fg: {
    l: '50%',
  },
  ink: {
    l: '50%',
  },
});

const darkStyleRule: ComplexStyleRule = {
  vars: darkSchemeVars,
};

const darkStyleMoreContrastRule: ComplexStyleRule = {
  vars: darkSchemeMoreContrastVars,
};

const darkStyleLessContrastRule: ComplexStyleRule = {
  vars: darkLessContrastVars,
};

const lightStyleRule: ComplexStyleRule = {
  vars: lightSchemeVars,
};

export const mediaPrefersColorSchemeClass = style({
  '@media': {
    '(prefers-color-scheme: light)': lightStyleRule,
    '(prefers-color-scheme: dark)': darkStyleRule,
  },
});

export const mediaPrefersContrastSchemeClass = style({
  '@media': {
    '(prefers-color-scheme: dark) and (prefers-contrast-scheme: less)':
      darkStyleLessContrastRule,
    '(prefers-color-scheme: dark) and (prefers-contrast-scheme: more)':
      darkStyleMoreContrastRule,

    // '(prefers-contrast-scheme: more)': moreContrastRule,
    // '(prefers-contrast-scheme: less)': lessContrastRule,
  },
});

export const defaultBgFgClass = style({
  backgroundColor: hsl(colorThemeVars.accent.h, 0, contrastSchemeVars.bg.l),
  color: hsl(colorThemeVars.accent.h, 0, contrastSchemeVars.fg.l),
});

export const lightClass = style(lightStyleRule);

export const darkClass = style(darkStyleRule);

export const darkMoreContrastClass = style(darkStyleMoreContrastRule);

export const darkLessContrastClass = style(darkStyleLessContrastRule);

export const lightMoreContrastClass = style(lightStyleRule);

export const lightLessContrastClass = style(lightStyleRule);
