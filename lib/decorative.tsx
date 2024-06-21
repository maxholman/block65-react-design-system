import { forwardRef } from 'react';
import { Box, type BoxProps } from './box.js';
import { dividerClassName } from './decorative.css.js';

export type DividerProps = BoxProps<'hr'>;

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, ...props }, ref) => (
    <Box
      ref={ref}
      component="hr"
      className={[className, dividerClassName]}
      {...props}
    />
  ),
);
