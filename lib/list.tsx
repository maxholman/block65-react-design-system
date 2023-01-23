// eslint-disable-next-line import/no-extraneous-dependencies
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Children } from 'react';
import { Box, BoxBasedComponentProps, Space } from './core.js';
import {
  listClass,
  listColsVar,
  listItemClass,
  listVariants,
} from './list.css.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';

export const List = <T extends keyof ReactHTMLAttributesHacked>({
  variant,
  component,
  space = 'medium',
  className,
  cols = '1',
  children,
  ...props
}: Merge<
  BoxBasedComponentProps<T>,
  {
    variant?: 'ordered' | 'unordered';
    space?: Space;
    cols?: `${number}`;
  }
>) => (
  <Box
    component={
      (component || variant === 'ordered'
        ? 'ol'
        : 'ul') as keyof ReactHTMLAttributesHacked
    }
    style={assignInlineVars({ [listColsVar]: cols })}
    className={[listClass, listVariants[space], className]}
    {...props}
  >
    {Children.map(children, (child) => (
      <Box component="li" className={listItemClass}>
        {child}
      </Box>
    ))}
  </Box>
);
