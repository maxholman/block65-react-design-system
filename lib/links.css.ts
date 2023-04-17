// eslint-disable-next-line import/no-extraneous-dependencies
import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { focusableClassName, focusRadiusVar } from './focusable.css.js';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export type LinkWeight = 'strong' | 'standard' | 'weak' | 'none';

const linkColorVar = createVar();

const linkClassName = style([
  focusableClassName,
  {
    vars: {
      [linkColorVar]: hsl(
        colorThemeVars.tones.accent.h,
        colorThemeVars.tones.accent.s,
        contrastSchemeVars.foreground2.l,
      ),
    },
    cursor: 'pointer',
    selectors: {
      '&:focus-visible': {
        borderRadius: focusRadiusVar,
        outlineStyle: 'solid',
        outlineColor: 'currentColor',
        outlineWidth: genericVars.border.weight.normal,
        outlineOffset: genericVars.border.weight.normal,
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
    standard: {
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
