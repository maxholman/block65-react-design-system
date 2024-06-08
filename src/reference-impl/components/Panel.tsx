import { forwardRef, type ForwardedRef } from 'react';
import {
  Block,
  type BlockProps,
  type Falsy,
  type ReactHTMLElements,
} from '../../../lib/main.js';
import type { Merge } from '../../../lib/types.js';
import {
  boxVariantClassName,
  toneVariantClassName,
  type RefBoxVariant,
} from '../core.css.js';
import type { Tone } from '../schemes.css.js';

type RefImplPanelProps = {
  tone?: Tone | Falsy;
  variant?: RefBoxVariant | Falsy;
};

type PanelProps<T extends keyof ReactHTMLElements> = Merge<
  BlockProps<T>,
  RefImplPanelProps
>;

export const Panel = forwardRef(
  <T extends keyof ReactHTMLElements>(
    { variant = 'solid', tone = 'neutral', className, ...props }: PanelProps<T>,
    forwardedRef: ForwardedRef<ReactHTMLElements[T]>,
  ) => (
    <Block
      ref={forwardedRef}
      component="section"
      rounded="2"
      paddingBlock={props.paddingBlock || '7'}
      paddingInline={props.paddingInline || '6'}
      borderWidth="2"
      data-tone={tone && toneVariantClassName[tone]}
      className={[
        variant && boxVariantClassName[variant],
        tone && toneVariantClassName[tone],
        className,
      ]}
      {...props}
    />
  ),
);
