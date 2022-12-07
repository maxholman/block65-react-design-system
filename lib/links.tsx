import type { FC } from 'react';
import { Box, BoxBasedComponentProps } from './core.js';
import { linkStyleVariant, LinkVariant } from './links.css.js';

export const TextLink: FC<
  BoxBasedComponentProps<'span' | 'a'> & { weight?: LinkVariant }
> = ({ children, className, weight = 'standard', ...props }) => (
  <Box
    // if someone is trying to use this as a link, use an anchor element
    component={'href' in props ? 'a' : 'span'}
    className={[linkStyleVariant[weight], className]}
    {...props}
  >
    {children}
  </Box>
);
