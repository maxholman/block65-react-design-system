import { clsx } from 'clsx';
import { Box, BoxBasedComponentProps, Space } from './core.js';
import {
  flexColumnVariants,
  flexRowVariants,
  gridVariants,
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
  space = 'medium',
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
  space = 'small',
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

export type GridProps<T extends keyof ReactHTMLAttributesHacked> =
  BoxBasedComponentProps<
    T,
    {
      space?: Space | undefined;
    }
  >;

export function Grid<T extends keyof ReactHTMLAttributesHacked = 'div'>({
  component,
  space = 'medium',
  className,
  ...props
}: GridProps<T>) {
  return (
    <Box
      space={space}
      className={[gridVariants[space], className]}
      {...props}
    />
  );
}
