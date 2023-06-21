import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import type { Variant } from './layout.js';
import { toneH } from './tone.css.js';
import { currentCapHeight } from './typography.css.js';

export type AvatarVariant = Exclude<Variant, 'none'> | 'image';

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

const numberOfColours = 100;

export const identClasses = [
  ...Array.from({ length: numberOfColours }).map((_, i) =>
    style({
      vars: {
        [toneH]: `${Math.round(i * (360 / numberOfColours))}`,
      },
    }),
  ),
] as const;
