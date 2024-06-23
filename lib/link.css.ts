import { style, styleVariants } from '@vanilla-extract/css';
import { focusRadiusVar, focusableClassName } from './focusable.css.js';
import {
  globalVars,
  propsVars,
  textLinkVars,
  textVariantVars,
} from './vars.css.js';

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
