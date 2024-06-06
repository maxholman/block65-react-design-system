// eslint-disable-next-line import/no-extraneous-dependencies
import { style } from '@vanilla-extract/css';
import { currentCapHeight } from './typography.css.js';

export const calloutClass = style({
  padding: currentCapHeight,
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  rowGap: 0,
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
});

export const calloutTextClass = style({
  gridColumn: 2,
});
