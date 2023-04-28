import type { FC } from 'react';
import { Box, type BoxBasedComponentProps } from './core.js';
import {
  inlineSpinnerClass,
  trackCircleClassName,
  runnerCircleClassName,
  spinnerClass,
  spinnerSizeVariantClassNames,
  type SpinnerSize,
} from './loaders.css.js';
import type { Merge } from './types.js';

export type SpinnerProps = Merge<
  BoxBasedComponentProps<'span'>,
  {
    inline?: boolean;
    size?: SpinnerSize;
  }
>;

export const Spinner: FC<SpinnerProps> = ({
  size = '1',
  className,
  children,
  inline,
  ...props
}) => (
  <Box
    component="span"
    className={[
      className,
      spinnerClass,
      inline && inlineSpinnerClass,
      spinnerSizeVariantClassNames[size],
    ]}
    {...props}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle className={trackCircleClassName} cx="50" cy="50" r="45" />
      <circle className={runnerCircleClassName} cx="50" cy="50" r="45" />
    </svg>
  </Box>
);
