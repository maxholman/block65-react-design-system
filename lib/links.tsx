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

export function differentOriginLinkProps(href: string) {
  if (typeof window !== 'undefined') {
    const testUrl = new URL(href, window.location.origin);
    if (testUrl.origin !== window.location.origin) {
      return { target: '_blank', rel: 'noopener noreferrer' };
    }
  }
  return null;
}

export const TextLink: FC<TextLinkProps> = ({
  component = 'a',
  children,
  className,
  weight = 'standard',
  safe = true,
  ...props
}) => (
  <Box
    component={component}
    className={[linkStyleVariant[weight], className]}
    {...(safe && props.href && differentOriginLinkProps(props.href))}
    {...props}
  >
    {children}
  </Box>
);
