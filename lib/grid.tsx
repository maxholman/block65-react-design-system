// eslint-disable-next-line import/no-extraneous-dependencies
import { Children, type ReactElement } from 'react';
import { matchViewportVariants } from './component-utils.js';
import {
  viewportGridColumnsVariants,
  type Columns,
  type OrResponsive,
  type Space,
} from './core.css.js';
import { Box, type BoxBasedComponentProps } from './core.js';
import { gridClass } from './grid.css.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';

export type GridProps<T extends keyof ReactHTMLAttributesHacked = 'div'> =
  Merge<
    BoxBasedComponentProps<T>,
    {
      space?: OrResponsive<Space>;
      cols?: OrResponsive<Columns>;
    }
  >;

export const Grid = <T extends keyof ReactHTMLAttributesHacked = 'div'>({
  className,
  cols,
  ...props
}: GridProps<T>): ReactElement | null => {
  // defaults to the count of children
  const resolvedCols: OrResponsive<Columns> = cols || {
    all: Math.min(Children.count(props.children), 5) as Columns,
  };
  const colsByViewport =
    typeof resolvedCols === 'number' ? { all: resolvedCols } : resolvedCols;

  return (
    <Box
      space="5"
      className={[
        className,
        gridClass,
        matchViewportVariants(colsByViewport, viewportGridColumnsVariants),
      ]}
      {...props}
    />
  );
};
