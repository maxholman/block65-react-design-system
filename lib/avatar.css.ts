import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { currentCapHeight } from './typography.css.js';

export const avatarClassName = style({
  display: 'inline-grid',
  aspectRatio: '1/1',
  width: calc.multiply(currentCapHeight, 4),
  height: calc.multiply(currentCapHeight, 4),
  placeItems: 'center',
  textTransform: 'uppercase',
});

export const avatarImgClass = style({
  objectFit: 'cover',
  objectPosition: 'center',
  overflow: 'hidden',
  aspectRatio: '1/1',
});
