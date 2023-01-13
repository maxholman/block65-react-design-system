import { createTextStyle } from '@capsizecss/vanilla-extract';
import {
  createThemeContract,
  createVar,
  style,
  StyleRule,
  styleVariants,
} from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5';

export const currentCapHeight = createVar();
export const lineGap = createVar();
export const lineHeightRatio = createVar();

export type FontSize =
  | 'tiny'
  | 'small'
  | 'normal'
  | 'medium'
  | 'large'
  | 'huge';

const fontThemeVarsShape = {
  capHeight: 'cap-height',
  values: {
    fontSize: 'font-size',
    lineHeight: 'line-height',
    capHeightTrim: 'cap-height-trim',
    baselineTrim: 'baseline-trim',
  },
};

export const fontThemeVars = createThemeContract({
  huge: fontThemeVarsShape,
  large: fontThemeVarsShape,
  medium: fontThemeVarsShape,
  normal: fontThemeVarsShape,
  small: fontThemeVarsShape,
  tiny: fontThemeVarsShape,
});

export const textClass = style({
  // empty for future use
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

export const fontSizeVariantVars = styleVariants(fontThemeVars, (vars) => ({
  vars: { [currentCapHeight]: vars.capHeight },
}));

export const fontSizeVariantTextStyles = styleVariants(
  fontThemeVars,
  (vars) => [createTextStyle(vars.values)],
);

export const fontSizeVariants = styleVariants(fontThemeVars, (_, key) => [
  fontSizeVariantVars[key],
  fontSizeVariantTextStyles[key],
]);

const levelVariants: Record<HeadingLevel, Array<StyleRule | string>> = {
  '1': [
    fontSizeVariants.huge,
    {
      fontWeight: genericVars.text.weight.bold,
      letterSpacing: '-0.05rem',
    },
  ],
  '2': [
    fontSizeVariants.large,
    {
      fontWeight: genericVars.text.weight.bold,
      letterSpacing: '-0.05rem',
    },
  ],
  '3': [
    fontSizeVariants.medium,
    {
      fontWeight: genericVars.text.weight.bold,
      letterSpacing: '-0.05rem',
    },
  ],
  '4': [
    fontSizeVariants.normal,
    {
      fontWeight: genericVars.text.weight.semiBold,
      letterSpacing: '-0.05rem',
    },
  ],
  '5': [
    fontSizeVariants.normal,
    {
      fontWeight: genericVars.text.weight.medium,
      color: hsl(0, 0, contrastSchemeVars.level4.l),
    },
  ],
}; // satisfies Record<HeadingLevel, ComplexStyleRule>;

export const levelVariantClasses = styleVariants(levelVariants, (rules) => [
  ...rules,
  {
    // makes sure any heading ascenders or descenders overlap above anything
    // else (for example an border or underline)
    zIndex: 1,
  },
]);
