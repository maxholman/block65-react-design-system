import { clsx } from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import { Box, BoxBasedComponentProps, Space } from './core.js';
import {
  flexColumnVariants,
  flexRowVariants,
  inlineAlignSelfVariants,
} from './layout.css.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';

export type BlockProps<T extends keyof ReactHTMLAttributesHacked> = Merge<
  BoxBasedComponentProps<T>,
  {
    space?: Space | undefined;
  }
>;

const BlockInner = <T extends keyof ReactHTMLAttributesHacked = 'div'>(
  { space = 'large', className, component = 'div', ...props }: BlockProps<T>,
  ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
): ReactElement | null => (
  <Box
    component={component}
    {...props}
    className={[flexColumnVariants[space], className]}
    ref={ref}
  />
);

export const Block = forwardRef(BlockInner);

export type InlineProps<T extends keyof ReactHTMLAttributesHacked> = Merge<
  BoxBasedComponentProps<T>,
  {
    space?: Space;
  }
>;

export const Inline = <T extends keyof ReactHTMLAttributesHacked = 'div'>({
  component = 'div',
  space = 'small',
  className,
  align,
  ...props
}: InlineProps<T>) => (
  <Box
    className={clsx(
      // inlineClass,
      space && flexRowVariants[space],
      align && inlineAlignSelfVariants[align],
      className,
    )}
    component={component}
    {...props}
  />
);
