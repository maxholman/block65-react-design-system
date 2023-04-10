import { clsx, type ClassValue } from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import { badgeVariants, type BadgeVariant } from './badges.css.js';
import type { BoxBasedComponentProps } from './core.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { Inline, type InlineProps } from './layout.js';
import { toneVariants, type Tone } from './tone.css.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';
import { Text } from './typography.js';

type CommonBadgeProps = {
  className?: ClassValue;
  variant?: BadgeVariant;
  tone?: Tone;
};

export type BadgeProps<T extends keyof ReactHTMLAttributesHacked> =
  PropsWithChildren<Merge<InlineProps<T>, CommonBadgeProps>>;

export const Badge = <T extends keyof ReactHTMLAttributesHacked>({
  variant = 'standard',
  tone = 'info',
  className,
  children,
  ...props
}: BadgeProps<T>) => {
  const isStringLike = useStringLikeDetector();

  return (
    <Inline
      component="span"
      rounded="small"
      padding="2"
      className={clsx(toneVariants[tone], badgeVariants[variant], className)}
      {...props}
    >
      {isStringLike(children) ? (
        <Text
          component="span"
          fontSize="0"
          textOverflow="ellipsis"
          textAlign="center"
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Inline>
  );
};

type BadgeLinkProps = CommonBadgeProps & {
  component?: never;
  href?: string;
};

export const BadgeLink: FC<
  Merge<BoxBasedComponentProps<'a' | 'button'>, BadgeLinkProps>
> = (props) => (
  <Badge component={'href' in props ? 'a' : 'button'} {...props} />
);
