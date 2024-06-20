import type { FC, PropsWithChildren } from 'react';
import styles from './link.module.scss';
import { Box, type BoxProps } from './box.js';
import { differentOriginLinkProps } from './component-utils.js';
import type { Merge, ReactHTMLElementsHacked } from './types.js';

export type LinkWeight = 'strong' | 'normal' | 'weak' | 'none';

export type TextLinkCommonProps = {
  weight?: LinkWeight;
  safe?: boolean;
};

export type TextLinkProps<T extends keyof ReactHTMLElementsHacked = 'a'> =
  PropsWithChildren<Merge<BoxProps<T>, TextLinkCommonProps>>;

/**
 * A `TextLink` is expect to be wrapped in a `Text` component
 * Think that <Text><TextLink>...</TextLink></Text>
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
    className={[styles.link, styles[weight], className]}
    {...(safe && props.href && differentOriginLinkProps(props.href))}
    {...props}
  />
);
