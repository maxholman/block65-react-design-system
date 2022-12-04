import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Children } from 'react';
import { Box, BoxBasedComponentProps, Space } from './core.js';
import { Inline } from './layout.js';
import {
  listClass,
  listColsVar,
  listItemClass,
  listVariants,
} from './list.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export type ListProps<T extends keyof ReactHTMLAttributesHacked> =
  BoxBasedComponentProps<
    T,
    {
      variant?: 'ordered' | 'unordered';
      space?: Space;
      cols?: `${number}`;
    }
  >;

export const List = <T extends keyof ReactHTMLAttributesHacked = 'ul'>({
  variant,
  component = variant === 'ordered' ? 'ol' : 'ul',
  space = 'medium',
  className,
  cols = '1',
  children,
  ...props
}: ListProps<T>) => (
  <Box
    component={component}
    style={assignInlineVars({ [listColsVar]: cols })}
    className={[listClass, listVariants[space], className]}
    {...props}
  >
    {Children.map(children, (child) => (
      <Box component="li" className={listItemClass}>
        <Inline>{child}</Inline>
      </Box>
    ))}
  </Box>
);
