import { createGlobalTheme } from '@vanilla-extract/css';
import { buttonVariantVars } from '../lib/button.css.js';
import { purposeVariantVars } from '../lib/purpose.css.js';
import { globalVars } from '../lib/vars.css.js';
import * as primer from './primer.js';
import { vars } from '#vars';

const darkSelector =
  'html[data-color-scheme="dark"], html:not([data-color-scheme])';
const lightSelector = 'html[data-color-scheme="light"]';

// general colors dark mode

createGlobalTheme(darkSelector, globalVars.color, {
  brand: primer.orange2,
  accent: primer.blue5,
  fgColor: primer.gray1,
  bgColor: primer.gray10,
  borderColor: primer.gray9,
  muted: {
    fgColor: primer.gray3,
    bgColor: primer.gray1,
    borderColor: primer.gray6,
  },
  emphasis: {
    fgColor: primer.gray6,
    bgColor: primer.gray2,
    borderColor: primer.gray3,
  },
});

// general colors light mode
createGlobalTheme(lightSelector, globalVars.color, {
  brand: primer.orange6,
  accent: primer.blue6,
  fgColor: primer.gray9,
  bgColor: primer.gray0,
  borderColor: primer.gray1,
  muted: {
    fgColor: primer.gray6,
    bgColor: primer.gray1,
    borderColor: primer.gray4,
  },
  emphasis: {
    fgColor: primer.gray3,
    bgColor: primer.gray2,
    borderColor: primer.gray6,
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

// purpose dark mode
createGlobalTheme(darkSelector, vars.purpose, {
  critical: {
    bgColor: primer.red1,
    borderColor: primer.red4,
    fgColor: primer.red6,
    muted: {
      bgColor: primer.red9,
      borderColor: primer.red8,
      fgColor: primer.gray1,
    },
  },
  info: {
    bgColor: primer.blue1,
    borderColor: primer.blue2,
    fgColor: primer.blue5,
    muted: {
      bgColor: primer.blue9,
      borderColor: primer.blue8,
      fgColor: primer.gray1,
    },
  },
  attention: {
    bgColor: primer.yellow4,
    borderColor: primer.yellow6,
    fgColor: primer.yellow1,
    muted: {
      bgColor: primer.yellow9,
      borderColor: primer.yellow8,
      fgColor: primer.gray1,
    },
  },
  default: {
    bgColor: primer.gray9,
    borderColor: primer.gray4,
    fgColor: primer.gray6,
    muted: {
      bgColor: primer.gray9,
      borderColor: primer.gray8,
      fgColor: primer.gray1,
    },
  },
  positive: {
    bgColor: primer.green5,
    borderColor: primer.green6,
    fgColor: primer.green1,
    muted: {
      bgColor: primer.green9,
      borderColor: primer.green8,
      fgColor: primer.gray1,
    },
  },
});

// purpose light mode
createGlobalTheme(lightSelector, purposeVariantVars, {
  critical: {
    bgColor: primer.red1,
    borderColor: primer.red2,
    fgColor: primer.red6,
    muted: {
      bgColor: primer.red0,
      borderColor: primer.red1,
      fgColor: primer.red5,
    },
  },
  info: {
    bgColor: primer.blue1,
    borderColor: primer.blue2,
    fgColor: primer.blue6,
    muted: {
      bgColor: primer.blue0,
      borderColor: primer.blue1,
      fgColor: primer.blue5,
    },
  },
  attention: {
    bgColor: primer.yellow1,
    borderColor: primer.yellow2,
    fgColor: primer.yellow5,
    muted: {
      bgColor: primer.yellow0,
      borderColor: primer.yellow1,
      fgColor: primer.yellow5,
    },
  },
  default: {
    bgColor: primer.gray1,
    borderColor: primer.gray2,
    fgColor: primer.gray7,
    muted: {
      bgColor: primer.gray0,
      borderColor: primer.gray1,
      fgColor: primer.gray6,
    },
  },
  positive: {
    bgColor: primer.green1,
    borderColor: primer.green2,
    fgColor: primer.green5,
    muted: {
      bgColor: primer.green0,
      borderColor: primer.green1,
      fgColor: primer.green5,
    },
  },
});
