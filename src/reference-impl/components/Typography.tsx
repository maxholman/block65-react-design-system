import { type ForwardedRef, forwardRef } from 'react';
import {
  // ?
  Heading as RdsHeading,
  Text as RdsText, // tone
  type HeadingProps as RdsHeadingProps, // tone
  type TextProps as RdsTextProps,
} from '../../../lib/main.js';
import type { Merge } from '../../../lib/types.js';
import { toneVariantClassName } from '../core.css.js';
import type { Tone } from '../schemes.css.js';

export type TextProps = Merge<RdsTextProps, { tone?: Tone }>;

export const Text = ({ tone, className, ...props }: TextProps) => (
  <RdsText
    {...props}
    className={[className, tone && toneVariantClassName[tone]]}
  />
);

export type HeadingProps = Merge<RdsHeadingProps, { tone?: Tone }>;

export const Heading = forwardRef(
  (props: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => (
    <RdsHeading {...props} ref={ref} />
  ),
);
