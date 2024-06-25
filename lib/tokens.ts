import type { buttonVariantVars } from './button.css.js';
import type { calloutVars } from './callout.css.js';
import type { formControlVars } from './forms.css.js';
import * as openPropsTokens from './generated/open-props-tokens.js';
import type { textLinkVars } from './link.css.js';
import type { panelVars } from './panel.css.js';
import type { purposeVariantVars } from './purpose.css.js';
import { textVariantVars } from './typography.css.js';
import type { MapLeafNodes } from './vanilla-extract-css-types.js';
import { baseVars, type propsVars } from './vars.css.js';

export const defaultGlobalTokens = {
  border: {
    radius: openPropsTokens.radius2,
    width: openPropsTokens.borderSize2,
  },
  color: {
    brand: openPropsTokens.gray5,
    accent: openPropsTokens.gray4,
    fgColor: openPropsTokens.gray1,
    bgColor: openPropsTokens.gray9,
    borderColor: openPropsTokens.gray4,
    muted: {
      fgColor: openPropsTokens.gray6,
      bgColor: openPropsTokens.gray8,
      borderColor: openPropsTokens.gray8,
    },
    emphasis: {
      fgColor: openPropsTokens.gray1,
      bgColor: openPropsTokens.gray4,
      borderColor: openPropsTokens.gray5,
    },
  },
} satisfies MapLeafNodes<typeof baseVars, string>;

export const defaultPropsTokens = {
  border: {
    width: {
      0: '0',
      1: '0.05rem',
      2: '0.15rem',
      3: '0.2rem',
      4: '0.3rem',
      5: '0.5rem',
      6: '0.75rem',
      7: '1rem',
    },
  },
  radius: {
    // these are tuned to be distinguished at DPR3 but may not be different at
    // lower densities they are rem so they dont scale with text size NOTE: we
    // may need some `em` ones if we need fully curved buttons "pill" style
    0: '0',
    1: '0.125rem',
    2: '0.25rem',
    3: '0.5rem',
    50: '50%',
  },
  space: {
    '000': '-.5rem',
    '00': '-.25rem',
    '0': '0rem',
    '1': '.125rem',
    '2': '.25rem',
    '3': '.375rem',
    '4': '.5rem',
    '5': '.625rem',
    '6': '.75rem',
    '7': '1rem',
    '8': '1.25rem',
    '9': '1.5rem',
    '10': '1.75rem',
    '11': '2rem',
    '12': '3rem',
    '13': '5rem',
    '14': '7.5rem',
    '15': '10rem',
    '16': '15rem',
  },
} satisfies MapLeafNodes<typeof propsVars, string>;

export const defaultTextTokens = {
  capSize: {
    '00': {
      fontSize: '0.625rem',
      lineHeight: '1rem',
      baselineTrim: '0.125rem',
      capHeightTrim: '0.125rem',
    },
    '0': {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      baselineTrim: '0.125rem',
      capHeightTrim: '0.125rem',
    },
    '1': {
      fontSize: '1rem',
      lineHeight: '1.25rem',
      baselineTrim: '0.125rem',
      capHeightTrim: '0.125rem',
    },
    '2': {
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      baselineTrim: '0.125rem',
      capHeightTrim: '0.125rem',
    },
    '3': {
      fontSize: '1.5rem',
      lineHeight: '1.5rem',
      baselineTrim: '0.25rem',
      capHeightTrim: '0.25rem',
    },
    '4': {
      fontSize: '1.75rem',
      lineHeight: '1.75rem',
      baselineTrim: '0.25rem',
      capHeightTrim: '0.25rem',
    },
    '5': {
      fontSize: '2rem',
      lineHeight: '1',
      baselineTrim: '0.25rem',
      capHeightTrim: '0.25rem',
    },
    '6': {
      fontSize: '2.5rem',
      lineHeight: '1',
      baselineTrim: '0.25rem',
      capHeightTrim: '0.25rem',
    },
    body: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      baselineTrim: '0.25rem',
      capHeightTrim: '0.25rem',
    },
    small: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      baselineTrim: '0.125rem',
      capHeightTrim: '0.125rem',
    },
  },
  fontFamily: {
    monospace:
      'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    heading: '1.25',
    normal: '1.5',
    paragraph: '1.75',
  },
  size: {
    '00': {
      fontSize: '0.625rem',
      lineHeight: '1rem',
    },
    '0': {
      fontSize: '0.75rem',
      lineHeight: '1.25rem',
    },
    '1': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    '2': {
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
    },
    '3': {
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
    },
    '4': {
      fontSize: '1.75rem',
      lineHeight: '2rem',
    },
    '5': {
      fontSize: '2rem',
      lineHeight: '2.5rem',
    },
    '6': {
      fontSize: '2.5rem',
      lineHeight: '3.5rem',
    },
    body: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    small: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
  },
} satisfies MapLeafNodes<typeof textVariantVars, string>;

export const defaultTextLinkTokens = {
  strong: {
    fontWeight: textVariantVars.fontWeight.medium,
    rest: {
      fgColor: baseVars.color.accent,
      textDecoration: 'underline',
    },
    hover: {
      fgColor: baseVars.color.accent,
      textDecoration: 'underline',
    },
  },
  normal: {
    fontWeight: textVariantVars.fontWeight.normal,
    rest: {
      fgColor: baseVars.color.accent,
      textDecoration: 'none',
    },
    hover: {
      fgColor: baseVars.color.accent,
      textDecoration: 'underline',
    },
  },
  weak: {
    fontWeight: textVariantVars.fontWeight.normal,
    rest: {
      fgColor: baseVars.color.fgColor,
      textDecoration: 'underline',
    },
    hover: {
      fgColor: baseVars.color.accent,
      textDecoration: 'underline',
    },
  },
  none: {
    fontWeight: 'inherit',
    rest: {
      fgColor: 'inherit',
      textDecoration: 'none',
    },
    hover: {
      fgColor: 'inherit',
      textDecoration: 'none',
    },
  },
} satisfies MapLeafNodes<typeof textLinkVars, string>;

export const formControlTokens = {
  outline: {
    width: openPropsTokens.borderSize1,
  },
} satisfies MapLeafNodes<typeof formControlVars, string>;

export const panelTokens = {
  padding: {
    inline: openPropsTokens.size3,
    block: openPropsTokens.size4,
  },
} satisfies MapLeafNodes<typeof panelVars, string>;

export const calloutTokens = {
  padding: openPropsTokens.size4,
} satisfies MapLeafNodes<typeof calloutVars, string>;

export const purposeVariantTokens = {
  critical: {
    bgColor: openPropsTokens.gray1,
    borderColor: openPropsTokens.gray4,
    fgColor: openPropsTokens.gray6,
    muted: {
      bgColor: openPropsTokens.gray9,
      borderColor: openPropsTokens.gray8,
      fgColor: openPropsTokens.gray1,
    },
  },
  info: {
    bgColor: openPropsTokens.gray1,
    borderColor: openPropsTokens.gray2,
    fgColor: openPropsTokens.gray5,
    muted: {
      bgColor: openPropsTokens.gray9,
      borderColor: openPropsTokens.gray8,
      fgColor: openPropsTokens.gray1,
    },
  },
  attention: {
    bgColor: openPropsTokens.gray4,
    borderColor: openPropsTokens.gray6,
    fgColor: openPropsTokens.gray1,
    muted: {
      bgColor: openPropsTokens.gray9,
      borderColor: openPropsTokens.gray8,
      fgColor: openPropsTokens.gray1,
    },
  },
  default: {
    bgColor: openPropsTokens.gray9,
    borderColor: openPropsTokens.gray4,
    fgColor: openPropsTokens.gray6,
    muted: {
      bgColor: openPropsTokens.gray9,
      borderColor: openPropsTokens.gray8,
      fgColor: openPropsTokens.gray1,
    },
  },
  positive: {
    bgColor: openPropsTokens.gray5,
    borderColor: openPropsTokens.gray6,
    fgColor: openPropsTokens.gray1,
    muted: {
      bgColor: openPropsTokens.gray9,
      borderColor: openPropsTokens.gray8,
      fgColor: openPropsTokens.gray1,
    },
  },
} satisfies MapLeafNodes<typeof purposeVariantVars, string>;

export const buttonVariantTokens = {
  primary: {
    rest: {
      bgColor: openPropsTokens.gray2,
      borderColor: openPropsTokens.gray6,
      fgColor: openPropsTokens.gray9,
    },
    hover: {
      bgColor: openPropsTokens.gray3,
      borderColor: openPropsTokens.gray7,
      fgColor: openPropsTokens.gray8,
    },
    active: {
      bgColor: openPropsTokens.gray3,
      borderColor: openPropsTokens.gray7,
      fgColor: openPropsTokens.gray8,
    },
    disabled: {
      bgColor: openPropsTokens.gray6,
      borderColor: openPropsTokens.gray1,
      fgColor: openPropsTokens.gray9,
    },
  },
  default: {
    rest: {
      bgColor: openPropsTokens.gray7,
      borderColor: openPropsTokens.gray4,
      fgColor: openPropsTokens.gray1,
    },
    hover: {
      bgColor: openPropsTokens.gray6,
      borderColor: openPropsTokens.gray5,
      fgColor: openPropsTokens.gray1,
    },
    active: {
      bgColor: openPropsTokens.gray8,
      borderColor: openPropsTokens.gray5,
      fgColor: openPropsTokens.gray1,
    },
    disabled: {
      bgColor: openPropsTokens.gray9,
      borderColor: openPropsTokens.gray4,
      fgColor: openPropsTokens.gray6,
    },
  },
  invisible: {
    rest: {
      bgColor: 'transparent',
      borderColor: 'transparent',
      fgColor: openPropsTokens.gray2,
    },
    hover: {
      bgColor: openPropsTokens.gray9,
      borderColor: openPropsTokens.gray9,
      fgColor: openPropsTokens.gray1,
    },
    active: {
      bgColor: openPropsTokens.gray9,
      borderColor: openPropsTokens.gray9,
      fgColor: openPropsTokens.gray1,
    },
    disabled: {
      bgColor: 'transparent',
      borderColor: openPropsTokens.gray8,
      fgColor: openPropsTokens.gray6,
    },
  },
  danger: {
    rest: {
      bgColor: openPropsTokens.red5,
      borderColor: openPropsTokens.red6,
      fgColor: openPropsTokens.gray9,
    },
    hover: {
      bgColor: openPropsTokens.red4,
      borderColor: openPropsTokens.red7,
      fgColor: openPropsTokens.gray1,
    },
    active: {
      bgColor: openPropsTokens.red4,
      borderColor: openPropsTokens.red7,
      fgColor: openPropsTokens.gray1,
    },
    disabled: {
      bgColor: openPropsTokens.gray6,
      borderColor: openPropsTokens.gray1,
      fgColor: openPropsTokens.gray9,
    },
  },
  inactive: {
    rest: {
      bgColor: openPropsTokens.gray9,
      borderColor: openPropsTokens.gray4,
      fgColor: openPropsTokens.gray6,
    },
    hover: {
      bgColor: openPropsTokens.gray9,
      borderColor: openPropsTokens.gray4,
      fgColor: openPropsTokens.gray6,
    },
    active: {
      bgColor: openPropsTokens.gray9,
      borderColor: openPropsTokens.gray4,
      fgColor: openPropsTokens.gray6,
    },
    disabled: {
      bgColor: openPropsTokens.gray9,
      borderColor: openPropsTokens.gray4,
      fgColor: openPropsTokens.gray6,
    },
  },
} satisfies MapLeafNodes<typeof buttonVariantVars, string>;
