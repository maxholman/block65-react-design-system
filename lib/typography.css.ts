import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { elevationColorLVar } from './panel.css.js';
import { colorVars, genericVars, toneH } from './theme.css.js';
import { hsl } from './utils.js';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5';

export const textClass = style({
  // color: hsl(colorVars.accent.h, 20, 30),
  lineHeight: genericVars.text.lineHeight.standard,
});

export const secondaryClass = style({
  color: hsl(0, 0, calc(elevationColorLVar).multiply(1).toString()),
});

export const strongClass = style({
  fontWeight: genericVars.text.weight.bold,
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
    letterSpacing: '-0.125rem',
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

export const toneVariants = styleVariants(colorVars.tone, (value) => ({
  vars: {
    [toneH]: value.h,
  },
  backgroundColor: hsl(toneH, 80, 80),
  borderColor: hsl(toneH, 60, 70),
  color: hsl(toneH, 100, 30),
  padding: `${genericVars.space.tiny} ${genericVars.space.tiny}`,
  borderRadius: genericVars.radius.standard,
}));

export const calloutClass = style({
  padding: genericVars.space.small,
  borderWidth: genericVars.border.weight.normal,
  borderStyle: 'solid',
});
