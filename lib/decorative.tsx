import type { FC } from 'react';
import { Box, type BoxBasedComponentProps } from './core.js';
import { dividerStyle } from './decorative.css.js';

export type DividerProps = Pick<
  BoxBasedComponentProps<'hr'>,
  | 'className'
  | 'margin'
  | 'marginInline'
  | 'marginBlock'
  | 'padding'
  | 'paddingInline'
  | 'paddingBlock'
>;

export const Divider: FC<DividerProps> = ({ className, ...props }) => (
  <Box
    component="hr"
    className={[className, dividerStyle]}
    {...props}
    background="2"
  />
);
