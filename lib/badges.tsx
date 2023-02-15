import { ClassValue, clsx } from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import { BadgeVariant, badgeVariants } from './badges.css.js';
import type { BoxBasedComponentProps } from './core.js';
import { Tone, toneVariants } from './tone.css.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';
import { Text } from './typography.js';

type CommonBadgeProps = {
  className?: ClassValue;
  variant?: BadgeVariant;
  tone?: Tone;
};

export type BadgeProps<T extends keyof ReactHTMLAttributesHacked> =
  PropsWithChildren<Merge<BoxBasedComponentProps<T>, CommonBadgeProps>>;

export const Badge = <T extends keyof ReactHTMLAttributesHacked>({
  component,
  variant = 'standard',
  tone = 'info',
  rounded = 'small',
  align,
  className,
  children,
  ...props
}: BadgeProps<T>) => (
  <Text
    size="tiny"
    textOverflow="ellipsis"
    rounded={rounded}
    className={clsx(toneVariants[tone], badgeVariants[variant], className)}
    {...props}
  >
    {children}
  </Text>
);

type BadgeLinkProps = CommonBadgeProps & {
  component?: never;
  href?: string;
};

export const BadgeLink: FC<
  Merge<BoxBasedComponentProps<'a' | 'button'>, BadgeLinkProps>
> = (props) => (
  <Badge component={'href' in props ? 'a' : 'button'} {...props} />
);
