import type { FC } from 'react';
import { Box, type BoxProps } from './box.js';
import { differentOriginLinkProps } from './component-utils.js';
import { linkStyleVariant } from './link.css.js';
import type { Merge, ReactHTMLElementsHacked } from './types.js';

export type LinkWeight = 'strong' | 'normal' | 'weak' | 'none';

export type TextLinkCommonProps = {
  weight?: LinkWeight;
  safe?: boolean;
};

export type TextLinkProps<T extends keyof ReactHTMLElementsHacked = 'a'> =
  Merge<BoxProps<T>, TextLinkCommonProps>;

/**
 * A `TextLink` is expect to be wrapped something like a `Paragraph` component
 * Think that <Paragraph><TextLink>...</TextLink></Paragraph>
 * is akin to <p><a>...</a></p>
 *
 */
export const TextLink: FC<TextLinkProps> = ({
  weight = 'normal',
  safe = true,
  className,
  ...props
}) => (
  <Box
    component="a"
    className={[className, linkStyleVariant[weight]]}
    {...(safe && props.href && differentOriginLinkProps(props.href))}
    {...props}
  />
);
