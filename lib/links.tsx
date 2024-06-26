import type { FC } from 'react';
import { Box, type BoxProps } from './box.js';
import { differentOriginLinkProps } from './component-utils.js';
import { textLinkVariantClassNames } from './link.css.js';
import type { LinkVariant } from './link.css.js';
import type { ReactHTMLElementsHacked } from './types.js';

export type { LinkVariant };

export type TextLinkCommonProps = {
  variant?: LinkVariant;
  safe?: boolean;
};

export type TextLinkProps<T extends keyof ReactHTMLElementsHacked = 'a'> =
  BoxProps<T> & TextLinkCommonProps;

/**
 * A `TextLink` is expect to be wrapped something like a `Paragraph` component
 * Think that <Paragraph><TextLink>...</TextLink></Paragraph>
 * is akin to <p><a>...</a></p>
 *
 */
export const TextLink: FC<TextLinkProps> = ({
  variant = 'normal',
  safe = true,
  className,
  ...props
}) => (
  <Box
    component="a"
    className={[className, textLinkVariantClassNames[variant]]}
    {...(safe && props.href && differentOriginLinkProps(props.href))}
    {...props}
  />
);
