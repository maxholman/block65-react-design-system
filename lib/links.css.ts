import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export type LinkVariant = 'strong' | 'standard' | 'weak';

const linkColorVar = createVar();

const linkStyle = style({
  vars: {
    [linkColorVar]: hsl(
      colorThemeVars.tones.accent.h,
      colorThemeVars.tones.accent.s,
      contrastSchemeVars.level3.l,
    ),
  },
  cursor: 'pointer',
});

export const linkStyleVariant = styleVariants(
  {
    strong: {
      color: linkColorVar,
      fontWeight: genericVars.text.weight.semiBold,
    },
    standard: {
      color: linkColorVar,
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
    linkStyle,
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
