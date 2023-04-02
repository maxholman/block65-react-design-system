// eslint-disable-next-line import/no-extraneous-dependencies
import type { ReactElement } from 'react';
import { matchViewportVariants } from './component-utils.js';
import {
  type Columns,
  viewportGridColumnsVariants,
  viewportSpaceVariants,
  type OrResponsive,
  type Space,
} from './core.css.js';
import { Box, type BoxBasedComponentProps } from './core.js';
import { gridClass } from './grid.css.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';

export type GridProps<T extends keyof ReactHTMLAttributesHacked> = Merge<
  BoxBasedComponentProps<T>,
  {
    space?: OrResponsive<Space>;
    cols?: OrResponsive<Columns>;
  }
>;

export const Grid = <T extends keyof ReactHTMLAttributesHacked>({
  component,
  space = '5',
  className,
  cols = 3,
  ...props
}: GridProps<T>): ReactElement | null => {
  const colsByViewport = typeof cols === 'number' ? { all: cols } : cols;

  return (
    <Box
      className={[
        space &&
          matchViewportVariants(
            typeof space === 'string' ? { all: space } : space,
            viewportSpaceVariants,
          ),
        gridClass,

        colsByViewport &&
          matchViewportVariants(colsByViewport, viewportGridColumnsVariants),

        className,
      ]}
      {...props}
    />
  );
};
