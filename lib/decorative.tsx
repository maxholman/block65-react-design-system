import type { FC } from 'react';
import { Box, type BoxBasedComponentProps } from './core.js';
import { dividerStyle } from './decorative.css.js';

export const Divider: FC<BoxBasedComponentProps<'hr'>> = ({
  className,
  ...props
}) => <Box component="hr" className={[className, dividerStyle]} {...props} />;
