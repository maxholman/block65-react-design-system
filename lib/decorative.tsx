import { forwardRef } from 'react';
import { Box, type BoxProps } from './core.js';
import styles from './decorative.module.scss';

export type DividerProps = Pick<
  BoxProps<'hr'>,
  | 'className'
  | 'margin'
  | 'marginInline'
  | 'marginBlock'
  | 'padding'
  | 'paddingInline'
  | 'paddingBlock'
>;

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, ...props }, ref) => (
    <Box
      ref={ref}
      component="hr"
      className={[className, styles.divider]}
      {...props}
    />
  ),
);
