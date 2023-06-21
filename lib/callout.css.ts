// eslint-disable-next-line import/no-extraneous-dependencies
import { style } from '@vanilla-extract/css';
import { fgSwatchC, fgSwatchL } from './core.css.js';
import { genericVars } from './design-system.css.js';
import { toneH } from './tone.css.js';
import { currentCapHeight } from './typography.css.js';
import { oklch } from './utils.js';

export const calloutClass = style({
  padding: currentCapHeight,
  display: 'grid',
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
  width: '1em',
  height: '1em',
  aspectRatio: '1/1',
  color: oklch(fgSwatchL, fgSwatchC, toneH),
});

export const calloutTextClass = style({
  gridColumn: 2,
});
