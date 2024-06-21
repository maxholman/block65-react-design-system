import {
  createGlobalThemeContract,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { globalVars } from './box.css.js';
import { createGlobalThemeMapFn } from './css-helpers.css.js';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';
export type FontSize = '00' | '0' | '1' | '2' | '3' | '4' | '5' | '6';
export type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type LineHeight = 'normal' | 'paragraph' | 'heading';
export type TextWrap = 'pretty' | 'balance' | 'nowrap';

// $font-sizes: (6, 5, 4, 3, 2, 1, 0, '00');

// @each $size in $font-sizes {
//   .fontSize-#{$size} {
//     font-size: var(--text-fontSize-#{$size});
//   }
// }

// @each $size in $font-sizes {
//   .capSize-#{$size} {
//     font-size: var(--text-fontSize-capSize-#{$size});
//     padding: var(--text-padding-capSize-#{$size});
//     line-height: var(--text-lineHeight-capSize-#{$size});

//     &::before {
//       content: '';
//       margin-top: var(--text-marginTop-capSize-#{$size});
//       display: block;
//       height: 0;
//     }
//     &::after {
//       content: '';
//       margin-top: var(--text-marginBottom-capSize-#{$size});
//       display: block;
//       height: 0;
//     }
//   }
// }

// /**
// * Font weight
// */
// $weights: (bold, semibold, medium, regular, light);

// @each $weight in $weights {
//   .fontWeight-#{$weight} {
//     font-weight: var(--text-weight-#{$weight});
//   }
// }

// /**
// * Line height
// */
// $heights: (regular, paragraph, heading);

// @each $height in $heights {
//   .lineHeight-#{$height} {
//     line-height: var(--text-lineHeight-#{$height});
//   }
// }

// .secondary {
//   color: var(--fgColor-muted);
// }

// .strong {
//   font-weight: var(--text-weight-medium);
// }

// .code {
//   font-family: monospace;
// }

// // .h1 {
// //   font-size: var(--text-fontSize-6);
// // }

// // .h2 {
// //   font-size: var(--text-fontSize-5);
// // }

// // .h1,
// // .h2 {
// //   font-weight: var(--text-weight-semiBold);
// //   letter-spacing: var(--text-letterSpacing-tight);
// // }

// // .h3 {
// //   font-size: var(--text-fontSize-4);
// // }

// // .h4 {
// //   font-size: var(--text-fontSize-3);
// // }

// // .h3,
// // .h4 {
// //   font-weight: var(--text-weight-medium);
// //   letter-spacing: var(--text-letterSpacing-tight);
// // }

// // .h5 {
// //   font-size: var(--text-fontSize-2);
// // }

// // .h6 {
// //   font-size: var(--text-fontSize-1);
// // }

// // .h5,
// // .h6 {
// //   font-weight: var(--text-weight-regular);
// // }

// // .h1,
// // .h2,
// // .h3,
// // .h4,
// // .h5,
// // .h6 {
// //   line-height: var(--text-lineHeight-heading);
// // }

export const textVariantVars = createGlobalThemeContract(
  {
    lineHeight: {
      normal: '',
      paragraph: '',
      heading: '',
    },
    fontWeight: {
      light: '',
      normal: '',
      medium: '',
      semibold: '',
      bold: '',
    },
    fontSize: {
      '00': '',
      '0': '',
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
    },
    capSize: {
      '00': '',
      '0': '',
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
    },
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
    fontSize: value,
  }),
);

export const capSizeVariantClassNames = styleVariants(
  textVariantVars.capSize,
  (value) => ({
    fontSize: value,
    padding: 'var(--text-padding-capSize-#{$size})',
    lineHeight: 'var(--text-lineHeight-capSize-#{$size})',
    '&::before': {
      content: '""',
      marginTop: 'var(--text-marginTop-capSize-#{$size})',
      display: 'block',
      height: 0,
    },
    '&::after': {
      content: '""',
      marginTop: 'var(--text-marginBottom-capSize-#{$size})',
      display: 'block',
      height: 0,
    },
  }),
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
