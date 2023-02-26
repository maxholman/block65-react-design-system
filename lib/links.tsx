import type { FC, PropsWithChildren } from 'react';
import { differentOriginLinkProps } from './component-utils.js';
import { Inline, type InlineProps } from './layout.js';
import { linkStyleVariant, type LinkWeight } from './links.css.js';
import type { Merge } from './types.js';

type TextLinkCommonProps = {
  weight?: LinkWeight;
  safe?: boolean;
};

export type TextLinkProps = PropsWithChildren<
  Merge<InlineProps<'a'>, TextLinkCommonProps>
>;

// `TextLink` is expect to be wrapped in a `Text` component
export const TextLink: FC<TextLinkProps> = ({
  weight = 'standard',
  safe = true,
  className,
  ...props
}) => (
  <Inline
    component="a"
    className={[linkStyleVariant[weight], className]}
    {...(safe && props.href && differentOriginLinkProps(props.href))}
    {...props}
  />
);
