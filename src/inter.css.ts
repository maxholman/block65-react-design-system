import { precomputeValues } from '@capsizecss/core';
import interFontMetrics from '@capsizecss/metrics/inter';
import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { vars } from '#vars';

function interCapSize(capHeightPx: number) {
  return precomputeValues({
    capHeight: capHeightPx,
    fontMetrics: interFontMetrics,
  });
}

function fontSize(fontSizePx: number) {
  return {
    fontSize: `${fontSizePx}px`,
    lineHeight: 'initial',
  };
}

const globalSelector = ':root';

globalStyle(globalSelector, {
  fontFamily: 'Inter, sans-serif',
  fontOpticalSizing: 'auto',
  fontStyle: 'normal',
  fontVariationSettings: "'slnt' 0",
});

createGlobalTheme(globalSelector, vars.text.capSize, {
  '00': interCapSize(9), // 12.375
  0: interCapSize(10), // 13.75
  1: interCapSize(12), // 16.5px
  2: interCapSize(15), // 20.625px
  3: interCapSize(16), // 22px
  4: interCapSize(18), // 24.75px
  5: interCapSize(26), // 35.75px
  6: interCapSize(31), // 42.5px
  body: interCapSize(12),
  small: interCapSize(10),
});

createGlobalTheme(globalSelector, vars.text.size, {
  '00': fontSize(12),
  0: fontSize(14),
  1: fontSize(16),
  2: fontSize(20),
  3: fontSize(22),
  4: fontSize(25),
  5: fontSize(35),
  6: fontSize(42),
  body: fontSize(16),
  small: fontSize(14),
});

createGlobalTheme(globalSelector, vars.text.lineHeight, {
  heading: '1.2',
  normal: 'initial',
  paragraph: '1.45',
});

createGlobalTheme(globalSelector, vars.text.fontWeight, {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
});
