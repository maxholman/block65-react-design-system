import type { FC } from 'react';
import { Box, BoxBasedComponentProps } from './core.js';
import { linkStyleVariant, LinkVariant } from './links.css.js';
import type { Merge } from './types.js';

export const TextLink: FC<
  Merge<
    BoxBasedComponentProps<'span' | 'a' | 'button'>,
    { href?: string; weight?: LinkVariant }
  >
> = ({
  component = 'a',
  children,
  className,
  weight = 'standard',
  ...props
}) => (
  <Box
    component={component}
    className={[linkStyleVariant[weight], className]}
    {...props}
  >
    {children}
  </Box>
);
