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

export const Block = <T extends keyof ReactHTMLAttributesHacked = 'div'>({
  component = 'div',
  space = 'large',
  className,
  ...props
}: BlockProps<T>) => (
  <Box
    {...props}
    className={[flexColumnVariants[space], className]}
    component={component}
  />
);

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
