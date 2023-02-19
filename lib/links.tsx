import type { FC, PropsWithChildren } from 'react';
import { Box, type BoxBasedComponentProps } from './core.js';
import { linkStyleVariant, type LinkWeight } from './links.css.js';
import type { Merge } from './types.js';

type TextLinkCommonProps = {
  weight?: LinkWeight;
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

// `TextLink` is expect to be wrapped in a `Text` component
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
