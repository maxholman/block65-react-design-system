// eslint-disable-next-line import/no-extraneous-dependencies
import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { focusRadiusVar, focusableClassName } from './focusable.css.js';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { oklch } from './utils.js';

export type LinkWeight = 'strong' | 'normal' | 'weak' | 'none';

const linkColorVar = createVar();

const linkClassName = style([
  focusableClassName,
  {
    vars: {
      [linkColorVar]: oklch(
        contrastSchemeVars.swatch[6].l,
        contrastSchemeVars.swatch[6].c,
        colorThemeVars.tones.accent.h,
      ),
    },
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
      color: linkColorVar,
      fontWeight: genericVars.text.weight.semiBold,
    },
    normal: {
      color: linkColorVar,
    },
    none: {
      // color: linkColorVar,
    },
    weak: {
      textDecoration: 'underline',
      selectors: {
        '&:hover': {
          color: linkColorVar,
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
