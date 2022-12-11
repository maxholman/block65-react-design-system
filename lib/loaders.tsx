import { clsx } from 'clsx';
import type { FC } from 'react';
import { Box, BoxBasedComponentProps } from './core.js';
import {
  spinnerCircleClass,
  spinnerCircleClass2,
  spinnerClass,
} from './loaders.css.js';

export const Spinner: FC<BoxBasedComponentProps<'span'>> = ({
  className,
  children,
  ...props
}) => (
  <Box component="span" className={clsx(className, spinnerClass)} {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle className={spinnerCircleClass} cx="50" cy="50" r="45" />
      <circle className={spinnerCircleClass2} cx="50" cy="50" r="45" />
    </svg>
  </Box>
);
