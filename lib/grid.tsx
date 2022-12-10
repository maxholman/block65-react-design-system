import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Children } from 'react';
import { Box, BoxBasedComponentProps, Space } from './core.js';
import { gridColsVar, gridVariants } from './grid.css.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';

export type GridProps<T extends keyof ReactHTMLAttributesHacked> = Merge<
  BoxBasedComponentProps<T>,
  {
    space?: Space | undefined;
    cols?: `${number}`;
  }
>;

export const Grid = <T extends keyof ReactHTMLAttributesHacked = 'div'>({
  component,
  space = 'medium',
  className,
  cols,
  ...props
}: GridProps<T>) => (
  <Box
    style={assignInlineVars({
      [gridColsVar]: cols || `${Children.count(props.children)}`,
    })}
    className={[gridVariants[space], className]}
    {...props}
  />
);
