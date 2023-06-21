import { forwardRef, type ForwardedRef } from 'react';
import type { Falsy } from './core.css.js';
import type { BoxProps } from './core.js';
import { Block, type BlockProps, type Variant } from './layout.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';

type PanelVariant = Variant | 'subtle-ghost';

export type PanelProps<T extends keyof ReactHTMLAttributesHacked = 'section'> =
  Merge<
    BlockProps<T>,
    {
      variant?: PanelVariant | Falsy;
    }
  >;

function getPanelVariantProps(
  variant: PanelVariant | Falsy,
): Partial<Pick<BoxProps, 'background' | 'border' | 'foreground'>> {
  switch (variant) {
    case 'solid':
      return {
        background: '6',
      };
    case 'vibrant':
      return {
        background: '10',
      };
    case 'ghost':
      return {
        border: '5',
      };
    case 'subtle':
      return {
        background: '3',
      };
    case 'subtle-ghost':
      return {
        border: '3',
      };
    case 'transparent': {
      return {};
    }
    case 'none':
    default:
      return {};
  }
}

export const Panel = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'section'>(
    { variant, ...props }: PanelProps<T>,
    forwardedRef: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => (
    <Block
      ref={forwardedRef}
      component="section"
      rounded="medium"
      paddingInline="6"
      // I "think" this looks better with a +1 because of the negative margins
      // in the Text component which is frequently the first child
      paddingBlock="7"
      tone="neutral"
      borderWidth="2"
      {...getPanelVariantProps(variant)}
      {...props}
    />
  ),
);
