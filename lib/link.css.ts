import { style, styleVariants } from '@vanilla-extract/css';
import { genericVars, globalVars } from './box.css.js';
import { focusRadiusVar, focusableClassName } from './focusable.css.js';

const linkClassName = style([
  focusableClassName,
  {
    // vars: {
    //   [linkColorVar]: oklch(
    //     contrastSchemeVars.swatch.v8.l,
    //     contrastSchemeVars.swatch.v8.c,
    //     colorThemeVars.tones.accent.h,
    //   ),
    // },
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
      fontWeight: genericVars.text.weight.medium,
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
