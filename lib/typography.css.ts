import { createTextStyle } from '@capsizecss/vanilla-extract';
import {
  createThemeContract,
  createVar,
  style,
  styleVariants,
  type StyleRule,
  fallbackVar,
} from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { toneH, toneL, toneS } from './tone.css.js';
import { hsl } from './utils.js';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

export const currentCapHeight = createVar();
export const lineGap = createVar();
export const lineHeightRatio = createVar();

export type FontSize = '00' | '0' | '1' | '2' | '3' | '4' | '5' | '6';

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

export const textClass = style({
  // text should just inherit unless a tone is specified
  color: hsl(
    toneH,
    toneS,
    fallbackVar(toneL, contrastSchemeVars.foreground1.l),
  ),
});

export const secondaryClass = style({
  color: hsl(toneH, 0, contrastSchemeVars.foreground2.l),
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
      fontWeight: genericVars.text.weight.semiBold,
      letterSpacing: '-0.05em',
    },
  ],
  '4': [
    {
      fontWeight: genericVars.text.weight.semiBold,
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
    [toneL]: contrastSchemeVars.foreground0.l,
  },
});

export const headingVariantClasses = styleVariants(levelVariants, (rules) => [
  headingClassName,
  ...rules,
]);
