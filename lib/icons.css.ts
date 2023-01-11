import { style } from '@vanilla-extract/css';
import { currentCapHeight } from './typography.css.js';

export const iconClassName = style({
  display: 'inline-block',
  height: currentCapHeight,
});
