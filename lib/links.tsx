import type { FC, PropsWithChildren } from 'react';
import { differentOriginLinkProps } from './component-utils.js';
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

// `TextLink` is expect to be wrapped in a `Text` component
export const TextLink: FC<TextLinkProps> = ({
  weight = 'normal',
  safe = true,
  className,
  ...props
}) => (
  <Box
    component="a"
    className={[linkStyleVariant[weight], className]}
    {...(safe && props.href && differentOriginLinkProps(props.href))}
    {...props}
  />
);
