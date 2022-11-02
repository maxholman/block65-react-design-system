import type { FC } from 'react';
import { Box, BoxBasedComponentProps } from './core.js';
import { linkStyle } from './links.css.js';

export const TextLink: FC<BoxBasedComponentProps<'span' | 'a'>> = ({
  children,
  className,
  ...props
}) => (
  <Box
    // if someone is trying to use it as a link, use an anchor tag
    component={'href' in props ? 'a' : 'span'}
    className={[linkStyle, className]}
    {...props}
  >
    {children}
  </Box>
);
