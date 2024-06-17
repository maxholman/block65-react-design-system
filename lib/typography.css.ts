import { createTextStyle } from '@capsizecss/vanilla-extract';
import {
  createThemeContract,
  createVar,
  style,
  styleVariants,
  type StyleRule,
} from '@vanilla-extract/css';
import { genericVars } from './core.css.js';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

export const currentCapHeight = createVar();
export const lineGap = createVar();
export const lineHeightRatio = createVar();

export type FontSize = '00' | '0' | '1' | '2' | '3' | '4' | '5' | '6';
export type FontWeight = keyof typeof genericVars.text.weight;
export type LineHeight = 'normal' | 'paragraph' | 'heading';

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
  '00': fontThemeVarsShape,
  '0': fontThemeVarsShape,
  '1': fontThemeVarsShape,
  '2': fontThemeVarsShape,
  '3': fontThemeVarsShape,
  '4': fontThemeVarsShape,
  '5': fontThemeVarsShape,
  '6': fontThemeVarsShape,
});

export const secondaryClass = style({
  // color: oklch(contrastSchemeVars.swatch.m8.l, 0, toneH),
  opacity: 0.8,
});

export const strongClass = style({
  fontWeight: genericVars.text.weight.medium,
});

export const codeClass = style({
  fontFamily: 'monospace',
});

export const fontSizeVariantTextStyles = styleVariants(
  fontThemeVars,
  (vars) => [createTextStyle(vars.values)],
);

export const capSizeVariantVars = styleVariants(fontThemeVars, (vars) => ({
  vars: { [currentCapHeight]: vars.capHeight },
}));

export const capSizeVariantTextStyles = styleVariants(fontThemeVars, (vars) => [
  createTextStyle(vars.values),
]);

export const capSizeVariants = styleVariants(fontThemeVars, (_, key) => [
  capSizeVariantVars[key],
  fontSizeVariantTextStyles[key],
]);

export const fontSizeVariants = styleVariants(fontThemeVars, (_, key) => [
  capSizeVariantVars[key],
  fontSizeVariantTextStyles[key],
]);

// ///////////////////////////

export const fontWeightVariants = styleVariants(
  genericVars.text.weight,
  (value) => [
    {
      fontWeight: value,
      fontVariationSettings: `'wght' ${value}`,
    },
  ],
);

export const lineHeightVariants = styleVariants(
  genericVars.text.lineHeight,
  (value) => [
    {
      lineHeight: value,
    },
  ],
);

const levelVariants: Record<HeadingLevel, Array<StyleRule | string>> = {
  '1': [
    {
      fontWeight: genericVars.text.weight.bold,
      letterSpacing: '-0.05em',
    },
  ],
  '2': [
    {
      fontWeight: genericVars.text.weight.bold,
      letterSpacing: '-0.05em',
    },
  ],
  '3': [
    {
      fontWeight: genericVars.text.weight.bold,
      letterSpacing: '-0.05em',
    },
  ],
  '4': [
    {
      fontWeight: genericVars.text.weight.medium,
      letterSpacing: '-0.05em',
    },
  ],
  '5': [
    {
      fontWeight: genericVars.text.weight.medium,
    },
  ],
  '6': [
    {
      fontWeight: genericVars.text.weight.medium,
    },
  ],
}; // satisfies Record<HeadingLevel, ComplexStyleRule>;

const headingClassName = style({
  vars: {
    // [toneL]: contrastSchemeVars.foreground0.l,
  },
  textWrap: 'balance',
});

export const headingVariantClasses = styleVariants(levelVariants, (rules) => [
  headingClassName,
  ...rules,
]);
