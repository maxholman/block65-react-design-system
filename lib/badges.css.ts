// eslint-disable-next-line import/no-extraneous-dependencies
import { style } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import type { Variant } from './layout.js';

export type BadgeVariant = Exclude<Variant, 'none'>;

export const badgeClassName = style({
  cursor: 'default',
  fontWeight: genericVars.text.weight.medium,
  textTransform: 'uppercase',
});
