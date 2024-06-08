import { type ForwardedRef, forwardRef } from 'react';
import {
  Badge as RdsBadge, // variant, tone and ident
  type BadgeProps as RdsBadgeProps,
  type ReactHTMLElements,
} from '../../../lib/main.js';
import type { Merge } from '../../../lib/types.js';
import {
  type RefBoxVariant,
  boxVariantClassName,
  toneVariantClassName,
} from '../core.css.js';
import type { Tone } from '../schemes.css.js';

export type BadgeProps<T extends keyof ReactHTMLElements = 'span'> = Merge<
  RdsBadgeProps<T>,
  { tone?: Tone; variant?: RefBoxVariant }
>;

export const Badge = forwardRef(
  <T extends keyof ReactHTMLElements = 'span'>(
    { tone, variant, className, ...props }: BadgeProps<T>,
    ref: ForwardedRef<ReactHTMLElements[T]>,
  ) => (
    <RdsBadge
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
