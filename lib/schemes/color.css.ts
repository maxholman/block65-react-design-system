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
  // large surface backgrounds
  level0: {
    l: '',
  },

  // subtle buttons, input borders and dividers
  level1: {
    l: '',
  },

  // borders
  level2: {
    l: '',
  },

  // secondary text and placeholders
  level3: {
    l: '',
  },

  // headers
  level4: {
    l: '',
  },

  // foreground text (not headers)
  level5: {
    l: '',
  },
});

const darkStyleRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    level0: {
      l: '10%',
    },
    level1: {
      l: '20%',
    },
    level2: {
      l: '30%',
    },
    level3: {
      l: '50%',
    },
    level4: {
      l: '65%',
    },
    level5: {
      l: '85%',
    },
  }),
};

const darkStyleMoreContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    level0: {
      l: '0%',
    },
    level1: {
      l: '50%',
    },
    level2: {
      l: '50%',
    },
    level3: {
      l: '85%',
    },
    level4: {
      l: '85%',
    },
    level5: {
      l: '100%',
    },
  }),
};

const darkStyleLessContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    level0: {
      l: '10%',
    },
    level1: {
      l: '10%',
    },
    level2: {
      l: '10%',
    },
    level4: {
      l: '50%',
    },
    level3: {
      l: '50%',
    },

    level5: {
      l: '50%',
    },
  }),
};

const lightStyleRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    level0: {
      l: '100%',
    },
    level1: {
      l: '80%',
    },
    level2: {
      l: '60%',
    },
    level3: {
      l: '50%',
    },
    level4: {
      l: '30%',
    },
    level5: {
      l: '20%',
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
  backgroundColor: hsl(colorThemeVars.accent.h, 0, contrastSchemeVars.level0.l),
  color: hsl(colorThemeVars.accent.h, 0, contrastSchemeVars.level5.l),
});

export const lightClass = style(lightStyleRule);

export const darkClass = style(darkStyleRule);

export const darkMoreContrastClass = style(darkStyleMoreContrastRule);

export const darkLessContrastClass = style(darkStyleLessContrastRule);

export const lightMoreContrastClass = style(lightStyleRule);

export const lightLessContrastClass = style(lightStyleRule);
