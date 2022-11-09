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
      h: '90',
      s: '50%',
      l: '50%',
    },
    neutral: {
      h: '90',
      s: '50%',
      l: '50%',
    },
    promo: {
      h: '90',
      s: '50%',
      l: '50%',
    },
    warn: {
      h: '90',
      s: '50%',
      l: '50%',
    },
    positive: {
      h: '90',
      s: '50%',
      l: '50%',
    },
    critical: {
      h: '90',
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

const lightModeVars = assignVars(contrastSchemeVars, {
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

const darkModeVars = assignVars(contrastSchemeVars, {
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

const darkModeMoreContrastVars = assignVars(contrastSchemeVars, {
  bg: {
    l: '10%',
  },
  fg: {
    l: '50%',
  },
  ink: {
    l: '85%',
  },
});

const darkModeLessContrastVars = assignVars(contrastSchemeVars, {
  bg: {
    l: '10%',
  },
  fg: {
    l: '85%',
  },
  ink: {
    l: '85%',
  },
});

const darkStyleRule: ComplexStyleRule = {
  vars: darkModeVars,
};

const darkStyleMoreContrastRule: ComplexStyleRule = {
  vars: darkModeMoreContrastVars,
};

const darkStyleLessContrastRule: ComplexStyleRule = {
  vars: darkModeLessContrastVars,
};

const lightStyleRule: ComplexStyleRule = {
  vars: lightModeVars,
};

export const mediaPrefersColorSchemeClass = style({
  ...lightStyleRule,

  backgroundColor: hsl(colorThemeVars.accent.h, 0, contrastSchemeVars.bg.l),
  color: hsl(colorThemeVars.accent.h, 0, contrastSchemeVars.fg.l),

  '@media': {
    // '(prefers-color-scheme: light)': lightStyleRule,
    // '(prefers-color-scheme: dark)': darkStyleRule,

    '(prefers-color-scheme: dark) and (prefers-contrast-scheme: less)':
      darkStyleLessContrastRule,
    '(prefers-color-scheme: dark) and (prefers-contrast-scheme: more)':
      darkStyleMoreContrastRule,

    // '(prefers-contrast-scheme: more)': moreContrastRule,
    // '(prefers-contrast-scheme: less)': lessContrastRule,
  },
});

export const darkMoreContrastClass = style(darkStyleMoreContrastRule);

export const darkLessContrastClass = style(darkStyleLessContrastRule);

export const lightClass = style(lightStyleRule);

export const darkClass = style(darkStyleRule);
