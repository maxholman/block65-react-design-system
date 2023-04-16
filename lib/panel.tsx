import { forwardRef, type ForwardedRef } from 'react';
import { Block, type BlockProps } from './layout.js';
import { panelVariants, type PanelVariant } from './panel.css.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';

export type PanelProps<T extends keyof ReactHTMLAttributesHacked = 'section'> =
  Merge<
    BlockProps<T>,
    {
      variant?: PanelVariant;
    }
  >;

export const Panel = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'section'>(
    { variant = 'ghost', className, ...props }: PanelProps<T>,
    ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => (
    <Block
      ref={ref}
      component="section"
      rounded="medium"
      padding="5"
      className={[className, panelVariants[variant]]}
      {...props}
    />
  ),
);
