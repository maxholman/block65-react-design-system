import { forwardRef, type ForwardedRef } from 'react';
import { Block, type BlockProps } from './layout.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';

export type PanelProps<T extends keyof ReactHTMLAttributesHacked = 'section'> =
  Merge<
    BlockProps<T>,
    {
      variant?: Exclude<BlockProps<T>['variant'], 'none'>;
    }
  >;

export const Panel = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'section'>(
    props: PanelProps<T>,
    ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => (
    <Block
      ref={ref}
      component="section"
      rounded="medium"
      padding="6"
      variant="ghost"
      tone="neutral"
      {...props}
    />
  ),
);
