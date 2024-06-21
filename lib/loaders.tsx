import type { FC } from 'react';
import { Box, type BoxProps } from './box.js';
import {
  inlineSpinnerClass,
  trackCircleClassName,
  runnerCircleClassName,
  spinnerClass,
  spinnerAnimationVariantClassNames,
  spinnerSizeVariantClassNames,
  type SpinnerSize,
} from './loaders.css.js';
import type { Merge } from './types.js';

export type SpinnerProps = Merge<
  BoxProps<'span'>,
  {
    inline?: boolean;
    size?: SpinnerSize;
    children?: never;
    delay?: boolean;
  }
>;

export const Spinner: FC<SpinnerProps> = ({
  size = '1',
  className,
  inline = true,
  delay = false,
  ...props
}) => (
  <Box
    component="span"
    role="progressbar"
    aria-busy="true"
    className={[
      className,
      spinnerClass,
      delay
        ? spinnerAnimationVariantClassNames.delay
        : spinnerAnimationVariantClassNames.regular,
      inline && inlineSpinnerClass,
      !inline && spinnerSizeVariantClassNames[size],
    ]}
    {...props}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle className={trackCircleClassName} cx="50" cy="50" r="45" />
      <circle className={runnerCircleClassName} cx="50" cy="50" r="45" />
    </svg>
  </Box>
);
