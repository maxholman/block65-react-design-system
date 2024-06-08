import {
  Callout as RdsCallout, // variant, tone and ident
  type CalloutProps as RdsCalloutProps,
} from '../../../lib/main.js';
import type { Merge } from '../../../lib/types.js';
import {
  type RefBoxVariant,
  boxVariantClassName,
  toneVariantClassName,
} from '../core.css.js';
import type { Tone } from '../schemes.css.js';

export type CalloutProps = Merge<
  RdsCalloutProps,
  { variant?: RefBoxVariant; tone?: Tone }
>;

export const Callout = ({
  variant,
  tone,
  className,
  ...props
}: CalloutProps) => (
  <RdsCallout
    {...props}
    className={[
      className,
      variant && boxVariantClassName[variant],
      tone && toneVariantClassName[tone],
    ]}
  />
);
