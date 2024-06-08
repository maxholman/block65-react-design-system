import { createTheme, createThemeContract } from '@vanilla-extract/css';

export type ColorScheme =
  | 'auto'
  | 'light'
  | 'dark'
  | 'grape'
  | 'mint'
  | 'sea'
  | 'sky'
  | 'forest'
  | 'fire'
  | 'night';

export type ContrastScheme = 'auto' | 'less' | 'more';

export type Tone =
  | 'neutral'
  | 'brand'
  | 'accent'
  | 'info'
  | 'promo'
  | 'warn'
  | 'positive'
  | 'critical';

export const lchThemeContractVars = createThemeContract({
  // bgs?
  // fgs?
  // shadows?
  // borders?

  intensity: {
    0: {
      l: null,
    },
    1: {
      l: null,
    },
    2: {
      l: null,
    },
    3: {
      l: null,
    },
    4: {
      l: null,
    },
    5: {
      l: null,
    },
  },

  tones: {
    neutral: {
      h: null,
      c: null,
    },
    brand: {
      h: null,
      c: null,
    },
    accent: {
      h: null,
      c: null,
    },
    info: {
      h: null,
      c: null,
    },
    promo: {
      h: null,
      c: null,
    },
    warn: {
      h: null,
      c: null,
    },
    positive: {
      h: null,
      c: null,
    },
    critical: {
      h: null,
      c: null,
    },
  } satisfies Record<Tone, unknown>,
});

export const darkModeThemeClassName = createTheme(lchThemeContractVars, {
  intensity: {
    0: {
      l: '0.3',
    },
    1: {
      l: '0.4',
    },
    2: {
      l: '0.5',
    },
    3: {
      l: '0.6',
    },
    4: {
      l: '0.7',
    },
    5: {
      l: '0.8',
    },
  },

  tones: {
    neutral: {
      c: '0',
      h: '0',
    },
    brand: {
      h: '30',
      c: '0.35',
    },
    accent: {
      h: '240',
      c: '0.5',
    },
    info: {
      h: '250',
      c: '0.5',
    },
    promo: {
      h: '290',
      c: '0.5',
    },
    warn: {
      h: '100',
      c: '0.35',
    },
    positive: {
      h: '140',
      c: '0.5',
    },
    critical: {
      h: '20',
      c: '0.25',
    },
  },
});

export const lightModeThemeClassName = createTheme(lchThemeContractVars, {
  // buttons: {
  //   solid: {
  //     l: null,
  //     c: null,
  //     h: null,
  //   },
  // },

  // badges: {
  //   solid: {
  //     l: null,
  //     c: null,
  //     h: null,
  //   },
  // },

  // tooltips: {
  //   solid: {
  //     l: null,
  //     c: null,
  //     h: null,
  //   },
  // },

  // shadows: {},

  // borders: {},

  intensity: {
    0: {
      l: '0.9',
    },
    1: {
      l: '0.8',
    },
    2: {
      l: '0.7',
    },
    3: {
      l: '0.6',
    },
    4: {
      l: '0.5',
    },
    5: {
      l: '0.4',
    },
  },
  tones: {
    neutral: {
      h: '0',
      c: '0',
    },
    brand: {
      h: '30',
      c: '0.25',
    },
    accent: {
      h: '240',
      c: '0.25',
    },
    info: {
      h: '250',
      c: '0.25',
    },
    promo: {
      h: '290',
      c: '0.25',
    },
    warn: {
      h: '90',
      c: '0.25',
    },
    positive: {
      h: '140',
      c: '0.25',
    },
    critical: {
      h: '20',
      c: '0.25',
    },
  },
});
