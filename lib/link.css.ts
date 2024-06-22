import { style, styleVariants } from '@vanilla-extract/css';
import { focusRadiusVar, focusableClassName } from './focusable.css.js';
import { textVariantVars } from './typography.css.js';
import { generalVars, globalVars } from './ve.css.js';

const linkClassName = style([
  focusableClassName,
  {
    cursor: 'pointer',
    selectors: {
      '&:focus-visible': {
        borderRadius: focusRadiusVar,
        outlineStyle: 'solid',
        outlineColor: 'currentColor',
        outlineWidth: generalVars.border.width['3'],
        outlineOffset: generalVars.border.width['3'],
      },
    },
  },
]);

export const linkStyleVariant = styleVariants(
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
    linkClassName,
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
