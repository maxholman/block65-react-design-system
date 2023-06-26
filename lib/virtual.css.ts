import { style } from '@vanilla-extract/css';

export const windowClassName = style({
  display: 'block', // not sure the exact reason why this must be block
  overflowY: 'scroll',
});

export const innerClassName = style({
  position: 'relative', // so that all items are positioned relative to this
});

export const itemClassName = style({
  position: 'absolute',
  width: '100%',
});
