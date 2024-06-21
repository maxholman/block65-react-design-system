import { style, styleVariants } from '@vanilla-extract/css';
import { genericVars, globalVars } from './box.css.js';
import { focusRadiusVar, focusableClassName } from './focusable.css.js';
import { textVariantVars } from './typography.css.js';

const linkClassName = style([
  focusableClassName,
  {
    cursor: 'pointer',
    selectors: {
      '&:focus-visible': {
        borderRadius: focusRadiusVar,
        outlineStyle: 'solid',
        outlineColor: 'currentColor',
        outlineWidth: genericVars.border.width['3'],
        outlineOffset: genericVars.border.width['3'],
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
