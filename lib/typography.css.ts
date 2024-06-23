import { createStyleObject } from '@capsizecss/core';
import { style, styleVariants } from '@vanilla-extract/css';
import { globalVars, textVariantVars } from './vars.css.js';

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
