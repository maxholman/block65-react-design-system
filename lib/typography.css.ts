import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { elevationColorLVar } from './panel.css.js';
import { genericVars } from './theme.css.js';
import { hsl } from './utils.js';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5';

export const textStyle = style({
  // color: hsl(colorVars.color.accent.h, 20, 30),
  lineHeight: genericVars.text.lineHeight.standard,
});

export const secondaryStyle = style({
  color: hsl(0, 0, calc(elevationColorLVar).multiply(0.7).toString()),
});

export const strongStyle = style({
  fontWeight: genericVars.text.weight.bold,
});

export const fontStyle = styleVariants(genericVars.text.size, (value) => ({
  fontSize: value,
}));

export const toneStyle = styleVariants(genericVars.color.tone, (value) => ({
  color: value,
}));

const levelVariants: Record<
  HeadingLevel,
  { fontSize: string; fontWeight?: string }
> = {
  '1': {
    fontSize: genericVars.text.size.huge,
    fontWeight: genericVars.text.weight.heavy,
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
