import { forwardRef } from 'react';
import { Box, type BoxProps } from './core.js';
import { dividerStyle } from './decorative.css.js';

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
      className={[className, dividerStyle]}
      {...props}
    />
  ),
);
