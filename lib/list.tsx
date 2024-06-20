import { assignInlineVars } from '@vanilla-extract/dynamic';
import type { Space } from './box.css.js';
import { Box, type BoxProps } from './box.js';
import {
  listClass,
  listColsVar,
  listItemClass,
  listVariants,
} from './list.css.js';
import type { Merge, ReactHTMLElementsHacked } from './types.js';

export type ListCommonProps = {
  variant?: 'ordered' | 'unordered';
  space?: Space;
  cols?: `${number}`;
};

export type ListProps<T extends keyof ReactHTMLElementsHacked = 'ul'> = Merge<
  BoxProps<T>,
  ListCommonProps
>;

export const List = <T extends keyof ReactHTMLElementsHacked>({
  variant,
  component,
  space = '5',
  className,
  cols = '1',
  ...props
}: ListProps<T>) => (
  <Box
    component={
      (component || variant === 'ordered'
        ? 'ol'
        : 'ul') as keyof ReactHTMLElementsHacked
    }
    style={assignInlineVars({ [listColsVar]: cols })}
    className={[listClass, listVariants[space], className]}
    {...props}
  />
);

export const ListItem = ({ className, ...props }: BoxProps<'li'>) => (
  <Box component="li" className={[className, listItemClass]} {...props} />
);
