import { createStyleObject } from '@capsizecss/core';
import {
  createGlobalThemeContract,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { createGlobalThemeMapFn } from './css-helpers.js';
import { globalVars, type Prefix } from './vars.css.js';

export type FontSize =
  | 'body'
  | 'small'
  | '00'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6';

export type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

export type LineHeight = 'normal' | 'paragraph' | 'heading';

export type TextWrap = 'pretty' | 'balance' | 'nowrap';

const capSizeShape = {
  fontSize: '',
  lineHeight: '',
  capHeightTrim: '',
  baselineTrim: '',
};

const fontSizeShape = {
  fontSize: '',
  lineHeight: '',
};

export const textVarsMapFnPrefix = 'text' satisfies Prefix;
export const textVariantVars = createGlobalThemeContract(
  {
    lineHeight: {
      normal: '',
      paragraph: '',
      heading: '',
    } satisfies Record<LineHeight, string>,
    fontWeight: {
      light: '', // normally 300
      normal: '', // normally 400
      medium: '', // normally 500
      semibold: '', // normally 600
      bold: '', // normally 700
    } satisfies Record<FontWeight, string>,
    size: {
      body: fontSizeShape,
      small: fontSizeShape,
      '00': fontSizeShape,
      '0': fontSizeShape,
      '1': fontSizeShape,
      '2': fontSizeShape,
      '3': fontSizeShape,
      '4': fontSizeShape,
      '5': fontSizeShape,
      '6': fontSizeShape,
    } satisfies Record<FontSize, typeof fontSizeShape>,
    capSize: {
      body: capSizeShape,
      small: capSizeShape,
      '00': capSizeShape,
      '0': capSizeShape,
      '1': capSizeShape,
      '2': capSizeShape,
      '3': capSizeShape,
      '4': capSizeShape,
      '5': capSizeShape,
      '6': capSizeShape,
    } satisfies Record<FontSize, typeof capSizeShape>,
  },
  createGlobalThemeMapFn(textVarsMapFnPrefix),
);

export const secondaryClassName = style({
  color: globalVars.color.muted.fgColor,
});

export const strongClassName = style({
  fontWeight: textVariantVars.fontWeight.medium,
});

export const codeClassName = style({
  fontFamily:
    'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
});

export const fontWeightVariantClassNames = styleVariants(
  textVariantVars.fontWeight,
  (value) => ({
    fontWeight: value,
  }),
);

export const fontSizeVariantClassNames = styleVariants(
  textVariantVars.size,
  (value) => ({
    fontSize: value.fontSize,
  }),
);

export const capSizeVariantClassNames = styleVariants(
  textVariantVars.capSize,
  createStyleObject,
);

export const lineHeightVariantClassNames = styleVariants(
  textVariantVars.lineHeight,
  (value) => ({
    lineHeight: value,
  }),
);

export const textClassName = style({
  color: globalVars.color.fgColor,
});
