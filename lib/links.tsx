import type { FC, PropsWithChildren } from 'react';
import { Box, BoxBasedComponentProps } from './core.js';
import { linkStyleVariant, LinkVariant } from './links.css.js';
import type { Merge } from './types.js';

type TextLinkCommonProps = {
  weight?: LinkVariant;
  safe?: boolean;
};

export type TextLinkProps = PropsWithChildren<
  Merge<BoxBasedComponentProps<'a'>, TextLinkCommonProps>
>;


export const TextLink: FC<TextLinkProps> = ({
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
