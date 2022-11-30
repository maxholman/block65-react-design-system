import { style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5';

export const textClass = style({
  // color: hsl(colorVars.accent.h, 20, 30),
  lineHeight: genericVars.text.lineHeight.standard,
});

export const secondaryClass = style({
  color: hsl(0, 0, contrastSchemeVars.ink.l),
});

export const strongClass = style({
  fontWeight: genericVars.text.weight.bold,
});

export const codeClass = style({
  fontFamily: 'monospace',
});

export const fontClass = styleVariants(genericVars.text.size, (value) => ({
  fontSize: value,
}));

const levelVariants: Record<
  HeadingLevel,
  { fontSize: string; fontWeight?: string; letterSpacing?: string }
> = {
  '1': {
    fontSize: genericVars.text.size.huge,
    fontWeight: genericVars.text.weight.heavy,
    letterSpacing: '-0.05rem',
  },
  '2': {
    fontSize: genericVars.text.size.large,
    fontWeight: genericVars.text.weight.bold,
  },
  '3': {
    fontSize: genericVars.text.size.medium,
    fontWeight: genericVars.text.weight.semiBold,
  },
  '4': { fontSize: genericVars.text.size.medium },
  '5': { fontSize: genericVars.text.size.medium },
};

export const levelVariantClasses = styleVariants(
  levelVariants,
  (variant) => variant,
);

export const toneVariants = styleVariants(colorThemeVars.tones, (value) => ({
  backgroundColor: hsl(value.h, 80, 80),
  borderColor: hsl(value.h, 60, 70),
  color: hsl(value.h, 100, 30),
  padding: `${genericVars.space.tiny} ${genericVars.space.tiny}`,
  borderRadius: genericVars.radius.standard,
}));

export const calloutClass = style({
  padding: genericVars.space.small,
  borderWidth: genericVars.border.weight.normal,
  borderStyle: 'solid',
});
