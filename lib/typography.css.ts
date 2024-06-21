import { createStyleObject } from '@capsizecss/core';
import {
  createGlobalThemeContract,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { globalVars } from './box.css.js';
import { createGlobalThemeMapFn } from './css-helpers.css.js';

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

export const textVariantVars = createGlobalThemeContract(
  {
    lineHeight: {
      normal: '',
      paragraph: '',
      heading: '',
    } satisfies Record<LineHeight, string>,
    fontWeight: {
      light: '',
      normal: '',
      medium: '',
      semibold: '',
      bold: '',
    } satisfies Record<FontWeight, string>,
    fontSize: {
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
  createGlobalThemeMapFn('text'),
);

export const secondaryClassName = style({
  color: globalVars.color.muted.fgColor,
});

export const strongClassName = style({
  fontWeight: textVariantVars.fontWeight.medium,
});

export const codeClassName = style({
  fontFamily: 'monospace',
});

export const fontWeightVariantClassNames = styleVariants(
  textVariantVars.fontWeight,
  (value) => ({
    fontWeight: value,
  }),
);

export const fontSizeVariantClassNames = styleVariants(
  textVariantVars.fontSize,
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
