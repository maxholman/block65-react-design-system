import { style } from '@vanilla-extract/css';
import type { Variant } from './layout.js';

export type BadgeVariant = Exclude<Variant, 'none'>;

export const badgeClassName = style({
  textTransform: 'uppercase',
});
