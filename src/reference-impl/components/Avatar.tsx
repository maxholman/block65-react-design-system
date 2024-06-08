import { type ForwardedRef, forwardRef } from 'react';
import {
  Avatar as RdsAvatar, // variant, tone and ident
  type AvatarProps as RdsAvatarProps,
  type ReactHTMLElements,
} from '../../../lib/main.js';
import type { Merge } from '../../../lib/types.js';
import {
  type RefBoxVariant,
  boxVariantClassName,
  toneVariantClassName,
} from '../core.css.js';
import type { Tone } from '../schemes.css.js';

export type AvatarProps<T extends keyof ReactHTMLElements = 'span'> = Merge<
  RdsAvatarProps<T>,
  { tone?: Tone; variant?: RefBoxVariant }
>;

export const Avatar = forwardRef(
  <T extends keyof ReactHTMLElements = 'span'>(
    { tone, variant, className, ...props }: AvatarProps<T>,
    ref: ForwardedRef<ReactHTMLElements[T]>,
  ) => (
    <RdsAvatar
      {...props}
      ref={ref}
      className={[
        className,
        variant && boxVariantClassName[variant],
        tone && toneVariantClassName[tone],
      ]}
    />
  ),
);
