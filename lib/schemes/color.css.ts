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
  subtleBg: {
    l: '',
  },
  fg: {
    l: '',
  },
  fg2: {
    l: '',
  },
  ink: {
    l: '',
  },
});

const darkStyleRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    bg: {
      l: '10%',
    },
    subtleBg: {
      l: '20%',
    },
    fg: {
      l: '85%',
    },
    fg2: {
      l: '45%',
    },
    ink: {
      l: '45%',
    },
  }),
};

const darkStyleMoreContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    bg: {
      l: '0%',
    },
    subtleBg: {
      l: '50%',
    },
    fg: {
      l: '100%',
    },
    fg2: {
      l: '85%',
    },
    ink: {
      l: '85%',
    },
  }),
};

const darkStyleLessContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    bg: {
      l: '10%',
    },
    subtleBg: {
      l: '10%',
    },
    fg: {
      l: '50%',
    },
    fg2: {
      l: '50%',
    },
    ink: {
      l: '50%',
    },
  }),
};

const lightStyleRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    bg: {
      l: '100%',
    },
    subtleBg: {
      l: '90%',
    },
    fg: {
      l: '20%',
    },
    fg2: {
      l: '60%',
    },
    ink: {
      l: '80%',
    },
  }),
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
