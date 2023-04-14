// eslint-disable-next-line import/no-extraneous-dependencies
import { style } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { toneH, toneL, toneS } from './tone.css.js';
import { currentCapHeight } from './typography.css.js';
import { hsl } from './utils.js';

export const calloutClass = style({
  vars: {
    [toneL]: contrastSchemeVars.level5.l,
  },
  padding: currentCapHeight,
  display: 'grid',
  borderColor: hsl(toneH, toneS, contrastSchemeVars.level2.l),
  backgroundColor: hsl(toneH, toneS, contrastSchemeVars.level2.l),
  gridTemplateColumns: 'auto 1fr',
  rowGap: 0,
  columnGap: genericVars.space[3],
  overflow: 'hidden',
  alignItems: 'start',
});

export const calloutTextIconWrapperClass = style({
  gridColumn: 1,
  lineHeight: 0,
});

export const calloutTextIconClass = style({
  display: 'inline-block',
  height: currentCapHeight,
  maxHeight: currentCapHeight,
  aspectRatio: '1/1',
});

export const calloutTextClass = style({
  gridColumn: 2,
});
