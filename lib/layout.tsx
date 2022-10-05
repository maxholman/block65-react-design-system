import { clsx } from 'clsx';
import { createElement } from 'react';
import { Box, BoxBasedComponentProps } from './core.js';
import {
  alignItems,
  flexColumnVariants,
  flexRowVariants,
} from './layout.css.js';
import type { Space } from './theme.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export function Block<T extends keyof ReactHTMLAttributesHacked = 'div'>({
  component = 'div',
  space = 'standard',
  className,
  ...props
}: BoxBasedComponentProps<
  T,
  {
    space?: Space;
  }
>) {
  return (
    <Box
      {...props}
      className={[flexColumnVariants[space], className]}
      component={component}
    />
  );
}

export function Inline<T extends keyof ReactHTMLAttributesHacked = 'span'>({
  children,
  className,
  component,
  space = 'standard',
  align,
  ...props
}: BoxBasedComponentProps<
  T,
  {
    space?: Space;
  }
>) {
  return createElement(
    component || 'span',
    {
      ...props,
      className: clsx(
        flexRowVariants[space],
        className,
        align && alignItems[align],
      ),
    },
    children,
  );
}
