// eslint-disable-next-line import/no-extraneous-dependencies
import {
  assignVars,
  type ComplexStyleRule,
  createTheme,
  createThemeContract,
  style,
} from '@vanilla-extract/css';
import type { Tone } from '../tone.css.js';
import { hsl } from '../utils.js';

export type ColorScheme = 'dark' | 'light' | 'auto';

export type ContrastScheme = 'more' | 'less' | 'auto';

export type Tokens = {
  [key: string]: string;
};

// all of these will be overridable by the user
export const [defaultColorThemeClass, colorThemeVars] = createTheme({
  tones: {
    accent: {
      h: '220',
      s: '50%',
      l: '0%',
    },
    info: {
      h: '210',
      s: '60%',
      l: '0%',
    },
    neutral: {
      h: '210',
      s: '20%',
      l: '0%',
    },
    promo: {
      h: '280',
      s: '60%',
      l: '0%',
    },
    warn: {
      h: '30',
      s: '60%',
      l: '0%',
    },
    positive: {
      h: '90',
      s: '40%',
      l: '0%',
    },
    critical: {
      h: '0',
      s: '50%',
      l: '0%',
    },
  } as /* satisfies */ Record<Tone, { h: string; s: string; l: string }>,
});

// this just sets up the contract shape, no need for values or a class
export const contrastSchemeVars = createThemeContract({
  // large surface backgrounds
  background0: {
    l: '',
  },

  // transparent button hovers and larger subtle backgrounds such as panels
  // a level1 lightness should be able to make a visible border around this
  background1: {
    l: '',
  },

  // subtle buttons, input borders and dividers
  background2: {
    l: '',
  },

  // subtle buttons, input borders and dividers
  background3: {
    l: '',
  },

  // ---

  // input borders and dividers
  foreground4: {
    l: '',
  },

  // borders
  foreground3: {
    l: '',
  },

  // secondary text and placeholders
  foreground2: {
    l: '',
  },

  // foreground text, heavy button backgrounds
  foreground1: {
    l: '',
  },

  // headings
  foreground0: {
    l: '',
  },
});

const darkStyleRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    background0: {
      l: '0%',
    },
    background1: {
      l: '10%',
    },
    background2: {
      l: '25%',
    },
    background3: {
      l: '50%',
    },

    foreground4: {
      l: '20%',
    },
    foreground3: {
      l: '30%',
    },
    foreground2: {
      l: '50%',
    },
    foreground1: {
      l: '85%',
    },
    foreground0: {
      l: '95%',
    },
  }),
};

const darkStyleMoreContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    background0: {
      l: '0%',
    },
    background1: {
      l: '20%',
    },
    background2: {
      l: '20%',
    },
    background3: {
      l: '20%',
    },

    foreground4: {
      l: '80%',
    },
    foreground3: {
      l: '80%',
    },
    foreground2: {
      l: '100%',
    },
    foreground1: {
      l: '100%',
    },
    foreground0: {
      l: '95%',
    },

  }),
};

const darkStyleLessContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    background0: {
      l: '0%',
    },
    background1: {
      l: '10%',
    },
    background2: {
      l: '10%',
    },
    background3: {
      l: '10%',
    },

    foreground4: {
      l: '10%',
    },
    foreground3: {
      l: '10%',
    },
    foreground1: {
      l: '50%',
    },
    foreground2: {
      l: '50%',
    },
    foreground0: {
      l: '50%',
    },

  }),
};

const lightStyleLessContrastRule: ComplexStyleRule = {
  colorScheme: 'dark',

  vars: assignVars(contrastSchemeVars, {
    background0: {
      l: '90%',
    },
    background1: {
      l: '85%',
    },
    background2: {
      l: '82%',
    },
    background3: {
      l: '75%',
    },

    foreground4: {
      l: '82%',
    },
    foreground3: {
      l: '75%',
    },
    foreground2: {
      l: '70%',
    },
    foreground1: {
      l: '50%',
    },
    foreground0: {
      l: '50%',
    },

  }),
};

const lightStyleMoreContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    background0: {
      l: '100%',
    },
    background1: {
      l: '100%',
    },
    background2: {
      l: '90%',
    },
    background3: {
      l: '90%',
    },

    foreground4: {
      l: '0%',
    },
    foreground3: {
      l: '0%',
    },
    foreground2: {
      l: '0%',
    },
    foreground1: {
      l: '0%',
    },
    foreground0: {
      l: '15%',
    },

  }),
};

const lightStyleRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    background0: {
      l: '100%',
    },
    background1: {
      l: '95%',
    },
    background2: {
      l: '75%',
    },
    background3: {
      l: '50%',
    },

    foreground4: {
      l: '90%',
    },
    foreground3: {
      l: '70%',
    },
    foreground2: {
      l: '50%',
    },
    foreground1: {
      l: '25%',
    },
    foreground0: {
      l: '15%',
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
    '(prefers-color-scheme: light) and (prefers-contrast-scheme: less)':
      lightStyleLessContrastRule,
    '(prefers-color-scheme: light) and (prefers-contrast-scheme: more)':
      lightStyleMoreContrastRule,
    '(prefers-color-scheme: dark) and (prefers-contrast-scheme: less)':
      darkStyleLessContrastRule,
    '(prefers-color-scheme: dark) and (prefers-contrast-scheme: more)':
      darkStyleMoreContrastRule,
  },
});

// WARN: any styles here will apply to anything that use the design system.
// This is not always the app root - it could be modals, dialogs and portals
export const defaultBgFgClass = style({
  backgroundColor: hsl(
    colorThemeVars.tones.accent.h,
    0,
    contrastSchemeVars.background1.l,
  ),
  color: hsl(
    colorThemeVars.tones.accent.h,
    0,
    contrastSchemeVars.foreground1.l,
  ),
});

export const forcedLightClass = style([
  lightStyleRule,
  {
    colorScheme: 'light',
  },
]);

export const forcedDarkClass = style([
  darkStyleRule,
  {
    colorScheme: 'dark',
  },
]);

export const forcedDarkMoreContrastClass = style([
  darkStyleMoreContrastRule,
  {
    colorScheme: 'dark',
  },
]);

export const forcedDarkLessContrastClass = style([
  darkStyleLessContrastRule,
  {
    colorScheme: 'dark',
  },
]);

export const forcedLightMoreContrastClass = style([
  lightStyleMoreContrastRule,
  {
    colorScheme: 'light',
  },
]);

export const forcedLightLessContrastClass = style([
  lightStyleLessContrastRule,
  {
    colorScheme: 'light',
  },
]);
