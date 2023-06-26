// eslint-disable-next-line import/no-extraneous-dependencies
import {
  assignVars,
  createTheme,
  createThemeContract,
  style,
  type ComplexStyleRule,
} from '@vanilla-extract/css';
import type { Swatch, Tone } from '../core.css.js';

export type ColorScheme = 'dark' | 'light' | 'auto';

export type ContrastScheme = 'more' | 'less' | 'auto';

export type Tokens = {
  [key: string]: string | Tokens;
};

// all of these will be overridable by the user
export const [defaultColorThemeClass, colorThemeVars] = createTheme({
  tones: {
    neutral: {
      h: '0',
    },
    accent: {
      h: '240',
    },
    info: {
      h: '250',
    },
    promo: {
      h: '290',
    },
    warn: {
      h: '90',
    },
    positive: {
      h: '140',
    },
    critical: {
      h: '20',
    },
  } satisfies Record<Tone, { h: string }>,
});

export const lightnessContrastSchemeTokens: Tokens = {
  white: 'l-white',
  light: 'l-light',
  '1': 'l-1',
  '2': 'l-2',
  '3': 'l-3',
  '4': 'l-4',
  '5': 'l-5',
  '6': 'l-6',
  '7': 'l-7',
  '8': 'l-8',
  '9': 'l-9',
  '10': 'l-10',
  dark: 'l-dark',
  black: 'l-black',
};

export const pop = createThemeContract(lightnessContrastSchemeTokens);

// this just sets up the contract shape, no need for values or a class
export const contrastSchemeVars = createThemeContract({
  swatch: {
    '0': {
      l: 'swatch0-l',
      c: 'swatch0-c',
    },
    '1': {
      l: 'swatch1-l',
      c: 'swatch1-c',
    },
    '2': {
      l: 'swatch2-l',
      c: 'swatch2-c',
    },
    '3': {
      l: 'swatch3-l',
      c: 'swatch3-c',
    },
    '4': {
      l: 'swatch4-l',
      c: 'swatch4-c',
    },
    '5': {
      l: 'swatch5-l',
      c: 'swatch5-c',
    },
    '6': {
      l: 'swatch6-l',
      c: 'swatch6-c',
    },
    '7': {
      l: 'swatch7-l',
      c: 'swatch7-c',
    },
    '8': {
      l: 'swatch8-l',
      c: 'swatch8-c',
    },
    '9': {
      l: 'swatch9-l',
      c: 'swatch9-c',
    },
    '10': {
      l: 'swatch10-l',
      c: 'swatch10-c',
    },
    '11': {
      l: 'swatch11-l',
      c: 'swatch11-c',
    },
    '12': {
      l: 'swatch12-l',
      c: 'swatch12-c',
    },
    '13': {
      l: 'swatch13-l',
      c: 'swatch13-c',
    },
    '14': {
      l: 'swatch14-l',
      c: 'swatch14-c',
    },
    '15': {
      l: 'swatch15-l',
      c: 'swatch15-c',
    },
  },

  shadowStrength: 'shadow-strength',
  shadowHsl: 'shadow-color',
});

const sharedVars = {
  // standard
  '6': {
    l: '58%',
    c: '0.18',
  },
  '7': {
    l: '59%',
    c: '0.2',
  },
  '8': {
    l: '60%',
    c: '0.25',
  },
  '9': {
    l: '61%',
    c: '0.35',
  },
  '10': {
    l: '62%',
    c: '0.4',
  },
} satisfies Partial<Record<Swatch, { l: string; c: string }>>;

const darkStyleRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    swatch: {
      '0': {
        l: '0%',
        c: '0',
      },

      '1': {
        l: '23%',
        c: '0.015',
      },
      '2': {
        l: '21%',
        c: '0.03',
      },
      '3': {
        l: '23%',
        c: '0.04',
      },
      '4': {
        l: '25%',
        c: '0.05',
      },
      '5': {
        l: '27%',
        c: '0.06',
      },

      // standard
      ...sharedVars,

      '11': {
        l: '70%',
        c: '0.2',
      },
      '12': {
        l: '93%',
        c: '0.05',
      },
      '13': {
        l: '95%',
        c: '0.04',
      },
      '14': {
        l: '97%',
        c: '0.03',
      },
      '15': {
        l: '99%',
        c: '0.015',
      },
    },
    shadowStrength: '10%', // You can keep the shadow strength the same
    shadowHsl: '220 40% 2%', // You can keep the shadow HSL value the same
  }),
};

const lightStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    swatch: {
      '0': {
        l: '100%',
        c: '0',
      },

      '1': {
        l: '99%',
        c: '0.015',
      },
      '2': {
        l: '97%',
        c: '0.03',
      },
      '3': {
        l: '95%',
        c: '0.04',
      },
      '4': {
        l: '93%',
        c: '0.05',
      },
      '5': {
        l: '91%',
        c: '0.06',
      },

      ...sharedVars,

      '11': {
        l: '50%',
        c: '0.2',
      },
      '12': {
        l: '35%',
        c: '0.1',
      },
      '13': {
        l: '25%',
        c: '0.1',
      },
      '14': {
        l: '15%',
        c: '0.1',
      },
      '15': {
        l: '10%',
        c: '0.1',
      },
    },

    shadowStrength: '10%',
    shadowHsl: '220 40% 2%',
  }),
} satisfies ComplexStyleRule;

const darkStyleMoreContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    swatch: {
      '0': {
        l: '100%',
        c: '0',
      },
      '1': {
        l: '30%',
        c: '0.1',
      },
      '2': {
        l: '25%',
        c: '0.1',
      },
      '3': {
        l: '20%',
        c: '0.1',
      },
      '4': {
        l: '15%',
        c: '0.1',
      },
      '5': {
        l: '10%',
        c: '0.1',
      },
      '6': {
        l: '52%',
        c: '0.5',
      },
      '7': {
        l: '61%',
        c: '0.4',
      },
      '8': {
        l: '60%',
        c: '0.25',
      },
      '9': {
        l: '59%',
        c: '0.2',
      },
      '10': {
        l: '58%',
        c: '0.2',
      },
      '11': {
        l: '99%',
        c: '0.015',
      },
      '12': {
        l: '97%',
        c: '0.03',
      },
      '13': {
        l: '95%',
        c: '0.04',
      },
      '14': {
        l: '93%',
        c: '0.05',
      },
      '15': {
        l: '91%',
        c: '0.06',
      },
    },
    shadowStrength: '10%',
    shadowHsl: '0 40% 2%',
  }),
};

const darkStyleLessContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    swatch: {
      '0': {
        l: '0%',
        c: '0.5',
      },
      '1': {
        l: '5%',
        c: '0.5',
      },
      '2': {
        l: '10%',
        c: '0.5',
      },
      '3': {
        l: '25%',
        c: '0.5',
      },
      '4': {
        l: '50%',
        c: '0.5',
      },
      '5': {
        l: '75%',
        c: '0.5',
      },
      '6': {
        l: '90%',
        c: '0.5',
      },
      '7': {
        l: '95%',
        c: '0.5',
      },
      '8': {
        l: '97.5%',
        c: '0.5',
      },
      '9': {
        l: '100%',
        c: '0.5',
      },
      '10': {
        l: '100%',
        c: '0.5',
      },

      '11': {
        l: '65%',
        c: '0.2',
      },
      '12': {
        l: '80%',
        c: '0.2',
      },
      '13': {
        l: '85%',
        c: '0.15',
      },
      '14': {
        l: '90%',
        c: '0.0125',
      },
      '15': {
        l: '95%',
        c: '0',
      },
    },

    shadowStrength: '10%',
    shadowHsl: '220 40% 2%',
  }),
};

const lightStyleLessContrastRule: ComplexStyleRule = {
  colorScheme: 'dark',

  vars: assignVars(contrastSchemeVars, {
    swatch: {
      '0': {
        l: '100%',
        c: '0.5',
      },
      '1': {
        l: '95%',
        c: '0.5',
      },
      '2': {
        l: '90%',
        c: '0.5',
      },
      '3': {
        l: '75%',
        c: '0.5',
      },
      '4': {
        l: '50%',
        c: '0.5',
      },
      '5': {
        l: '25%',
        c: '0.5',
      },
      '6': {
        l: '10%',
        c: '0.5',
      },
      '7': {
        l: '5%',
        c: '0.5',
      },
      '8': {
        l: '2.5%',
        c: '0.5',
      },
      '9': {
        l: '0%',
        c: '0.5',
      },
      '10': {
        l: '100%',
        c: '0.5',
      },

      '11': {
        l: '65%',
        c: '0.2',
      },
      '12': {
        l: '80%',
        c: '0.2',
      },
      '13': {
        l: '85%',
        c: '0.15',
      },
      '14': {
        l: '90%',
        c: '0.0125',
      },
      '15': {
        l: '95%',
        c: '0',
      },
    },

    shadowStrength: '1%',
    shadowHsl: '220 3% 15%',
  }),
};

const lightStyleMoreContrastRule: ComplexStyleRule = {
  vars: assignVars(contrastSchemeVars, {
    swatch: {
      '0': {
        l: '95%',
        c: '0',
      },
      '1': {
        l: '95%',
        c: '50%',
      },
      '2': {
        l: '90%',
        c: '50%',
      },
      '3': {
        l: '75%',
        c: '50%',
      },
      '4': {
        l: '50%',
        c: '50%',
      },
      '5': {
        l: '25%',
        c: '50%',
      },
      '6': {
        l: '10%',
        c: '50%',
      },
      '7': {
        l: '5%',
        c: '50%',
      },
      '8': {
        l: '2.5%',
        c: '50%',
      },
      '9': {
        l: '0%',
        c: '50%',
      },
      '10': {
        l: '95%',
        c: '0',
      },

      '11': {
        l: '65%',
        c: '0.2',
      },
      '12': {
        l: '80%',
        c: '0.2',
      },
      '13': {
        l: '85%',
        c: '0.15',
      },
      '14': {
        l: '90%',
        c: '0.0125',
      },
      '15': {
        l: '95%',
        c: '0',
      },
    },

    shadowStrength: '1%',
    shadowHsl: '220 3% 15%',
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
  // backgroundColor: oklch(contrastSchemeVars.swatch[1].l, 0, 0),
  // color: oklch(contrastSchemeVars.swatch[9].l, 0, 0),
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
