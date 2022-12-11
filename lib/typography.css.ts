import { style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5';

export const textClass = style({
  lineHeight: genericVars.text.lineHeight.standard,
});

export const secondaryClass = style({
  color: hsl(0, 0, contrastSchemeVars.level4.l),
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

export type FontSize =
  | 'tiny'
  | 'small'
  | 'normal'
  | 'medium'
  | 'large'
  | 'huge';

const levelVariants: Record<
  HeadingLevel,
  {
    fontSize: string;
    fontWeight?: string;
    letterSpacing?: string;
    color?: string;
  }
> = {
  '1': {
    fontSize: genericVars.text.size.huge,
    fontWeight: genericVars.text.weight.bold,
    letterSpacing: '-0.05rem',
  },
  '2': {
    fontSize: genericVars.text.size.large,
    fontWeight: genericVars.text.weight.bold,
    letterSpacing: '-0.05rem',
  },
  '3': {
    fontSize: genericVars.text.size.medium,
    fontWeight: genericVars.text.weight.bold,
  },
  '4': {
    fontSize: genericVars.text.size.normal,
    fontWeight: genericVars.text.weight.bold,
  },
  '5': {
    fontSize: genericVars.text.size.normal,
    fontWeight: genericVars.text.weight.medium,
    color: hsl(0, 0, contrastSchemeVars.fg2.l),
  },
};

export const levelVariantClasses = styleVariants(
  levelVariants,
  (variant) => variant,
);

export const toneVariants = styleVariants(colorThemeVars.tones, (value) => ({
  backgroundColor: hsl(value.h, 100, 80),
  borderColor: hsl(value.h, 60, 70),
  color: hsl(value.h, 20, 20),
}));

export const calloutClass = style({
  padding: genericVars.space.small,
  borderWidth: genericVars.border.weight.normal,
  borderStyle: 'solid',
  borderRadius: genericVars.radius.medium,
});
