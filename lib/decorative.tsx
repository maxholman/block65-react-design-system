import { forwardRef } from 'react';
import styles from './decorative.module.scss';
import { Box, type BoxProps } from './box.js';

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
