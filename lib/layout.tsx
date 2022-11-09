import { clsx } from 'clsx';
import { Box, BoxBasedComponentProps, Space } from './core.js';
import {
  flexColumnVariants,
  flexRowVariants,
  inlineAlignSelf,
  inlineClass,
} from './layout.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export type BlockProps<T extends keyof ReactHTMLAttributesHacked> =
  BoxBasedComponentProps<
    T,
    {
      space?: Space | undefined;
    }
  >;

export function Block<T extends keyof ReactHTMLAttributesHacked = 'div'>({
  component = 'div',
  space = 'standard',
  className,
  ...props
}: BlockProps<T>) {
  return (
    <Box
      {...props}
      className={[flexColumnVariants[space], className]}
      component={component}
    />
  );
}

export type InlineProps<T extends keyof ReactHTMLAttributesHacked> =
  BoxBasedComponentProps<
    T,
    {
      space?: Space;
    }
  >;

export function Inline<T extends keyof ReactHTMLAttributesHacked = 'span'>({
  component = 'span',
  space = 'standard',
  className,
  align,
  ...props
}: InlineProps<T>) {
  return (
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
}
