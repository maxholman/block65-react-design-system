import { Children } from 'react';
import {
  viewportGridColumnsVariants,
  type Columns,
  type OrResponsive,
  type Space,
} from './box.css.js';
import { Box, type BoxProps } from './box.js';
import { matchViewportVariants } from './component-utils.js';
import { gridClass } from './grid.css.js';
import type { Falsy, Merge, ReactHTMLElementsHacked } from './types.js';

export type GridProps<T extends keyof ReactHTMLElementsHacked = 'div'> = Merge<
  BoxProps<T>,
  {
    space?: OrResponsive<Space | Falsy>;
    cols?: OrResponsive<Columns>;
  }
>;

export const Grid = <T extends keyof ReactHTMLElementsHacked = 'div'>({
  className,
  cols,
  ...props
}: GridProps<T>) => {
  // defaults to the count of children
  const resolvedCols: OrResponsive<Columns> = cols || {
    all: Math.min(Children.count(props.children), 10) as Columns,
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
