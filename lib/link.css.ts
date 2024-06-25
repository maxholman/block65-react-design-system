import {
  createGlobalThemeContract,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { createGlobalThemeMapFn } from './css-helpers.js';
import { focusableClassName, focusRadiusVar } from './focusable.css.js';
import { textVariantVars } from './typography.css.js';
import { globalVars, type Prefix, propsVars } from './vars.css.js';

export type LinkVariant = 'strong' | 'normal' | 'weak' | 'none';

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

const textLinkClassName = style([
  focusableClassName,
  {
    cursor: 'pointer',
    selectors: {
      '&:focus-visible': {
        borderRadius: focusRadiusVar,
        outlineStyle: 'solid',
        outlineColor: 'currentColor',
        outlineWidth: propsVars.border.width['3'],
        outlineOffset: propsVars.border.width['3'],
      },
    },
  },
]);

export const linkStyleVariantLegacy = styleVariants(
  {
    strong: {
      color: globalVars.color.accent,
      fontWeight: textVariantVars.fontWeight.medium,
    },
    normal: {
      color: globalVars.color.accent,
    },
    none: {
      // color: linkColorVar,
    },
    weak: {
      textDecoration: 'underline',
      selectors: {
        '&:hover': {
          color: globalVars.color.accent,
        },
      },
    },
  } as const,
  (cssProps) => [
    textLinkClassName,
    {
      selectors: {
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      ...cssProps,
    },
  ],
);

export const textLinkVariantClassNames = styleVariants(
  textLinkVars,
  (variant) => [
    textLinkClassName,
    {
      fontWeight: variant.fontWeight,
      color: variant.rest.fgColor,
      textDecoration: variant.rest.textDecoration,
      selectors: {
        '&:hover,&:focus': {
          color: variant.hover.fgColor,
        },
        '&:active': {
          color: variant.hover.fgColor,
          textDecoration: variant.hover.textDecoration,
        },
      },
    },
  ],
);
