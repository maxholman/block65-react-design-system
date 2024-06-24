import { createGlobalThemeContract } from '@vanilla-extract/css';
import { createGlobalThemeMapFn } from './css-helpers.js';
import type { LinkVariant } from './link.css.js';
import type { FontSize, FontWeight, LineHeight } from './typography.css.js';

export type Prefix =
  | ''
  | 'callout'
  | 'button'
  | 'panel'
  | 'formControl'
  | 'props'
  | 'text'
  | 'textlink';
// | 'badge'

export const globalVarsMapFnPrefix = '' satisfies Prefix;
export const globalVars = createGlobalThemeContract(
  {
    color: {
      brand: '',
      accent: '',
      fgColor: '',
      bgColor: '',
      borderColor: '',
      muted: {
        fgColor: '',
        bgColor: '',
        borderColor: '',
      },
      emphasis: {
        fgColor: '',
        bgColor: '',
        borderColor: '',
      },
    },
    border: {
      width: '',
      radius: '',
    },
  },
  createGlobalThemeMapFn(globalVarsMapFnPrefix),
);

/**
 * Props vars
 */
export const propsVarsMapFnPrefix = 'props' satisfies Prefix;
export const propsVars = createGlobalThemeContract(
  {
    border: {
      width: {
        '0': '',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
      },
    },
    radius: {
      0: '',
      1: '',
      2: '',
      3: '',
      50: '',
    },
    space: {
      '000': '',
      '00': '',
      '0': '',
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '7': '',
      '8': '',
      '9': '',
      '10': '',
      '11': '',
      '12': '',
      '13': '',
      '14': '',
      '15': '',
      '16': '',
    },
  },
  createGlobalThemeMapFn(propsVarsMapFnPrefix),
);

/**
 * Callout vars
 */
export const calloutVarsMapFnPrefix = 'callout' satisfies Prefix;
export const calloutVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
    padding: '',
  },
  createGlobalThemeMapFn(calloutVarsMapFnPrefix),
);

/**
 * Button vars
 */
export const buttonVarsMapFnPrefix = 'button' satisfies Prefix;
export const buttonVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
  },
  createGlobalThemeMapFn(buttonVarsMapFnPrefix),
);

// /**
//  * Badge vars
//  */
// export const badgeVarsMapFnPrefix = 'badge' satisfies Prefix;
// export const badgeVars = createGlobalThemeContract(
//   {
//     // border: {
//     //   radius: '',
//     //   width: '',
//     // },
//   },
//   createGlobalThemeMapFn(badgeVarsMapFnPrefix),
// );

/**
 * Panel vars
 */
export const panelVarsMapFnPrefix = 'panel' satisfies Prefix;
export const panelVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
    padding: {
      inline: '',
      block: '',
    },
  },
  createGlobalThemeMapFn(panelVarsMapFnPrefix),
);

/**
 * Form control vars
 */
export const formControlVarsMapFnPrefix = 'formControl' satisfies Prefix;
export const formControlVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
    outline: {
      width: '',
    },
  },
  createGlobalThemeMapFn(formControlVarsMapFnPrefix),
);

/**
 * text variant vars
 */

const capSizeShape = {
  fontSize: '',
  lineHeight: '',
  capHeightTrim: '',
  baselineTrim: '',
};

const fontSizeShape = {
  fontSize: '',
  lineHeight: '',
};

export const textVarsMapFnPrefix = 'text' satisfies Prefix;
export const textVariantVars = createGlobalThemeContract(
  {
    lineHeight: {
      normal: '',
      paragraph: '',
      heading: '',
    } satisfies Record<LineHeight, string>,
    fontWeight: {
      light: '', // normally 300
      normal: '', // normally 400
      medium: '', // normally 500
      semibold: '', // normally 600
      bold: '', // normally 700
    } satisfies Record<FontWeight, string>,
    size: {
      body: fontSizeShape,
      small: fontSizeShape,
      '00': fontSizeShape,
      '0': fontSizeShape,
      '1': fontSizeShape,
      '2': fontSizeShape,
      '3': fontSizeShape,
      '4': fontSizeShape,
      '5': fontSizeShape,
      '6': fontSizeShape,
    } satisfies Record<FontSize, typeof fontSizeShape>,
    capSize: {
      body: capSizeShape,
      small: capSizeShape,
      '00': capSizeShape,
      '0': capSizeShape,
      '1': capSizeShape,
      '2': capSizeShape,
      '3': capSizeShape,
      '4': capSizeShape,
      '5': capSizeShape,
      '6': capSizeShape,
    } satisfies Record<FontSize, typeof capSizeShape>,
  },
  createGlobalThemeMapFn(textVarsMapFnPrefix),
);

/**
 * text links vars
 */
export const textLinkVarsMapFnPrefix = 'textlink' satisfies Prefix;
export const textLinkVars = createGlobalThemeContract(
  {
    strong: {
      fontWeight: '',
      rest: {
        fgColor: '',
        textDecoration: '',
      },
      hover: {
        fgColor: '',
        textDecoration: '',
      },
    },
    normal: {
      fontWeight: '',
      rest: {
        fgColor: '',
        textDecoration: '',
      },
      hover: {
        fgColor: '',
        textDecoration: '',
      },
    },
    weak: {
      fontWeight: '',
      rest: {
        fgColor: '',
        textDecoration: '',
      },
      hover: {
        fgColor: '',
        textDecoration: '',
      },
    },
    none: {
      fontWeight: '',
      rest: {
        fgColor: '',
        textDecoration: '',
      },
      hover: {
        fgColor: '',
        textDecoration: '',
      },
    },
  } satisfies Record<
    LinkVariant,
    {
      fontWeight: string;
      rest: { fgColor: string; textDecoration: string };
      hover: { fgColor: string; textDecoration: string };
    }
  >,
  createGlobalThemeMapFn(textLinkVarsMapFnPrefix),
);
