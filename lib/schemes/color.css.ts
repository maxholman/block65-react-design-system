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
      s: '60%',
      l: '0%',
    },
    info: {
      h: '210',
      s: '60%',
      l: '0%',
    },
    neutral: {
      h: '210',
      s: '0%',
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
  // reserved for input backgrounds and special cases
  background0: {
    l: 'background0-l',
  },

  // ghost
  background1: {
    l: 'background1-l',
  },

  // subtle backgrounds
  background2: {
    l: 'background2-l',
  },

  // normal backgrounds
  background3: {
    // s: 'background3-s',
    l: 'background3-l',
  },

  // solid/strong
  background4: {
    l: 'background4-l',
  },

  // ---

  // absolute top as needed
  foreground5: {
    l: 'foreground5-l',
  },

  // input borders and dividers
  foreground4: {
    l: 'foreground4-l',
  },

  // borders
  foreground3: {
    l: 'foreground3-l',
  },

  // secondary text and placeholders
  foreground2: {
    l: 'foreground2-l',
  },

  // foreground text, heavy button backgrounds
  foreground1: {
    l: 'foreground1-l',
  },

  // headings
  foreground0: {
    l: 'foreground0-l',
  },

  shadowStrength: 'shadow-strength',
  shadowColor: 'shadow-color',
});

const darkStyleRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    background0: {
      l: '5%',
    },
    background1: {
      l: '10%',
    },
    background2: {
      l: '25%',
    },
    background3: {
      // s: '50%',
      l: '50%',
    },
    background4: {
      l: '65%',
    },

    foreground5: {
      l: '0%',
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

    shadowStrength: '10%',
    shadowColor: '220 40% 2%',
  }),
};

const lightStyleRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    // large surface backgrounds
    background0: {
      l: '100%',
    },
    background1: {
      l: '97.5%',
    },
    background2: {
      l: '90%',
    },
    background3: {
      l: '60%',
    },
    background4: {
      l: '50%',
    },

    foreground5: {
      l: '100%',
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

    shadowStrength: '1%',
    shadowColor: '220 3% 15%',
  }),
};

const darkStyleMoreContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    background0: {
      l: '0%',
    },
    background1: {
      l: '0%',
    },
    background2: {
      l: '20%',
    },
    background3: {
      l: '20%',
    },
    background4: {
      l: '20%',
    },

    foreground5: {
      l: '100%',
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

    shadowStrength: '10%',
    shadowColor: '220 40% 2%',
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
    background4: {
      l: '10%',
    },

    foreground5: {
      l: '0%',
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

    shadowStrength: '10%',
    shadowColor: '220 40% 2%',
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
    background4: {
      l: '65%',
    },

    foreground5: {
      l: '100%',
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

    shadowStrength: '1%',
    shadowColor: '220 3% 15%',
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
    background4: {
      l: '80%',
    },

    foreground5: {
      l: '0%',
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

    shadowStrength: '1%',
    shadowColor: '220 3% 15%',
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
