import { clsx } from 'clsx';
import { Box, BoxBasedComponentProps, Space } from './core.js';
import {
  flexColumnVariants,
  flexRowVariants,
  inlineAlignSelf,
  inlineClass,
} from './layout.css.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';

export type BlockProps<T extends keyof ReactHTMLAttributesHacked> = Merge<
  BoxBasedComponentProps<T>,
  {
    space?: Space | undefined;
  }
>;

export const Block = <T extends keyof ReactHTMLAttributesHacked = 'div'>({
  component = 'div',
  space = 'medium',
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

export const Inline = <T extends keyof ReactHTMLAttributesHacked = 'span'>({
  component = 'span',
  space = 'small',
  className,
  align,
  ...props
}: InlineProps<T>) => (
  <Box
    className={clsx(
      inlineClass,
      space && flexRowVariants[space],
      align && inlineAlignSelf[align],
      className,
    )}
    component={component}
    {...props}
  />
);
