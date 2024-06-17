import { fallbackVar, style } from '@vanilla-extract/css';
import { currentCapHeight } from './typography.css.js';

export const iconClassName = style({
  display: 'inline-block',
  height: fallbackVar(currentCapHeight, '1em'),
});
