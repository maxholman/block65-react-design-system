import { createGlobalTheme } from '@vanilla-extract/css';
import { badgeVariantVars } from '../lib/badge.css.js';
import { globalVars } from '../lib/box.css.js';
import { buttonVariantVars } from '../lib/button.css.js';
import * as primer from './primer.js';

const darkSelector =
  'html[data-color-scheme="dark"], html:not([data-color-scheme])';
const lightSelector = 'html[data-color-scheme="light"]';

// general colors dark mode
createGlobalTheme(darkSelector, globalVars, {
  color: {
    brand: primer.orange2,
    accent: primer.blue5,
    default: {
      fg: primer.gray1,
      bg: primer.gray10,
      border: primer.gray9,
    },
    muted: {
      fg: primer.gray3,
      bg: primer.gray1,
      border: primer.gray6,
    },
    emphasis: {
      fg: primer.gray6,
      bg: primer.gray2,
      border: primer.gray3,
    },
  },
});

// general colors light mode
createGlobalTheme(lightSelector, globalVars, {
  color: {
    brand: primer.orange6,
    accent: primer.blue6,
    default: {
      fg: primer.gray9,
      bg: primer.gray0,
      border: primer.gray1,
    },
    muted: {
      fg: primer.gray6,
      bg: primer.gray1,
      border: primer.gray4,
    },
    emphasis: {
      fg: primer.gray3,
      bg: primer.gray2,
      border: primer.gray6,
    },
  },
});

// badges dark mode
createGlobalTheme(darkSelector, badgeVariantVars, {
  attention: {
    bgColor: primer.yellow4,
    borderColor: primer.yellow6,
    fgColor: primer.gray0,
  },
  default: {
    bgColor: primer.gray1,
    borderColor: primer.gray4,
    fgColor: primer.gray8,
  },
  error: {
    bgColor: primer.red1,
    borderColor: primer.red4,
    fgColor: primer.red5,
  },
  info: {
    bgColor: primer.blue1,
    borderColor: primer.blue2,
    fgColor: primer.blue5,
  },
  positive: {
    bgColor: primer.green5,
    borderColor: primer.green6,
    fgColor: primer.gray0,
  },
});

// badges light mode
createGlobalTheme(lightSelector, badgeVariantVars, {
  attention: {
    bgColor: primer.yellow1,
    borderColor: primer.yellow2,
    fgColor: primer.yellow9,
  },
  default: {
    bgColor: primer.gray1,
    borderColor: primer.gray4,
    fgColor: primer.gray8,
  },
  error: {
    bgColor: primer.red1,
    borderColor: primer.red4,
    fgColor: primer.red5,
  },
  info: {
    bgColor: primer.blue1,
    borderColor: primer.blue2,
    fgColor: primer.blue5,
  },
  positive: {
    bgColor: primer.green2,
    borderColor: primer.green3,
    fgColor: primer.green9,
  },
});

// buttons dark mode
createGlobalTheme(darkSelector, buttonVariantVars, {
  danger: {
    active: {
      bgColor: primer.red7,
      borderColor: primer.red9,
      fgColor: primer.gray2,
    },
    disabled: {
      bgColor: primer.gray9,
      borderColor: primer.gray9,
      fgColor: primer.red8,
    },
    hover: {
      bgColor: primer.red6,
      borderColor: primer.red7,
      fgColor: primer.gray2,
    },
    rest: {
      bgColor: primer.gray9,
      borderColor: primer.gray7,
      fgColor: primer.red6,
    },
  },
  default: {
    active: {
      bgColor: primer.gray8,
      borderColor: primer.gray8,
      fgColor: primer.gray2,
    },
    disabled: {
      bgColor: primer.gray9,
      borderColor: primer.gray8,
      fgColor: primer.gray5,
    },
    hover: {
      bgColor: primer.gray8,
      borderColor: primer.gray7,
      fgColor: primer.gray1,
    },
    rest: {
      bgColor: primer.gray9,
      borderColor: primer.gray7,
      fgColor: primer.gray3,
    },
  },
  inactive: {
    active: {
      bgColor: primer.gray8,
      borderColor: primer.gray8,
      fgColor: primer.gray4,
    },
    disabled: {
      bgColor: primer.gray8,
      borderColor: primer.gray8,
      fgColor: primer.gray4,
    },
    hover: {
      bgColor: primer.gray8,
      borderColor: primer.gray8,
      fgColor: primer.gray4,
    },
    rest: {
      bgColor: primer.gray8,
      borderColor: primer.gray8,
      fgColor: primer.gray4,
    },
  },
  invisible: {
    active: {
      bgColor: 'transparent',
      borderColor: 'transparent',
      fgColor: primer.gray2,
    },
    disabled: {
      bgColor: 'transparent',
      borderColor: primer.gray8,
      fgColor: primer.gray6,
    },
    hover: {
      bgColor: primer.gray9,
      borderColor: primer.gray9,
      fgColor: primer.gray2,
    },
    rest: {
      bgColor: 'transparent',
      borderColor: 'transparent',
      fgColor: primer.gray2,
    },
  },
  primary: {
    active: {
      bgColor: primer.green6,
      borderColor: primer.green7,
      fgColor: primer.gray1,
    },
    disabled: {
      bgColor: primer.green9,
      borderColor: primer.gray8,
      fgColor: primer.gray3,
    },
    hover: {
      bgColor: primer.green6,
      borderColor: primer.green7,
      fgColor: primer.gray1,
    },
    rest: {
      bgColor: primer.green5,
      borderColor: primer.green6,
      fgColor: primer.gray1,
    },
  },
});

// buttons light mode
createGlobalTheme(lightSelector, buttonVariantVars, {
  danger: {
    active: {
      bgColor: primer.red6,
      borderColor: primer.red7,
      fgColor: primer.gray0,
    },
    disabled: {
      bgColor: primer.red1,
      borderColor: primer.red1,
      fgColor: primer.red3,
    },
    hover: {
      bgColor: primer.red5,
      borderColor: primer.red6,
      fgColor: primer.gray0,
    },
    rest: {
      bgColor: primer.red1,
      borderColor: primer.red4,
      fgColor: primer.red5,
    },
  },
  default: {
    active: {
      bgColor: primer.gray2,
      borderColor: primer.gray4,
      fgColor: primer.gray9,
    },
    disabled: {
      bgColor: primer.gray1,
      borderColor: primer.gray1,
      fgColor: primer.gray6,
    },
    hover: {
      bgColor: primer.gray2,
      borderColor: primer.gray4,
      fgColor: primer.gray9,
    },
    rest: {
      bgColor: primer.gray1,
      borderColor: primer.gray4,
      fgColor: primer.gray8,
    },
  },
  inactive: {
    active: {
      bgColor: primer.gray2,
      borderColor: primer.gray4,
      fgColor: primer.gray6,
    },
    disabled: {
      bgColor: primer.gray1,
      borderColor: primer.gray1,
      fgColor: primer.gray6,
    },
    hover: {
      bgColor: primer.gray1,
      borderColor: primer.gray4,
      fgColor: primer.gray6,
    },
    rest: {
      bgColor: primer.gray1,
      borderColor: primer.gray4,
      fgColor: primer.gray6,
    },
  },
  invisible: {
    active: {
      bgColor: 'transparent',
      borderColor: 'transparent',
      fgColor: primer.gray8,
    },
    disabled: {
      bgColor: 'transparent',
      borderColor: primer.gray1,
      fgColor: primer.gray9,
    },
    hover: {
      bgColor: 'transparent',
      borderColor: 'transparent',
      fgColor: primer.gray8,
    },
    rest: {
      bgColor: 'transparent',
      borderColor: 'transparent',
      fgColor: primer.gray2,
    },
  },
  primary: {
    active: {
      bgColor: primer.green6,
      borderColor: primer.green7,
      fgColor: primer.gray0,
    },
    disabled: {
      bgColor: primer.green8,
      borderColor: primer.gray1,
      fgColor: primer.gray0,
    },
    hover: {
      bgColor: primer.green6,
      borderColor: primer.green7,
      fgColor: primer.gray0,
    },
    rest: {
      bgColor: primer.green5,
      borderColor: primer.green6,
      fgColor: primer.gray0,
    },
  },
});
