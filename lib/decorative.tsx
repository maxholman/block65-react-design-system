import type { FC } from 'react';
import { Box, BoxBasedComponentProps } from './core.js';
import { dividerStyle } from './decorative.css.js';

export const Divider: FC<BoxBasedComponentProps<'hr'>> = ({
  className,
  ...props
}) => <Box component="hr" className={[className, dividerStyle]} {...props} />;
