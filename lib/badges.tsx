import type { FC, PropsWithChildren } from 'react';
import { badgeClassName, type BadgeVariant } from './badges.css.js';
import type { BoxProps } from './core.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { Inline, type InlineProps } from './layout.js';
import { toneVariants, type Tone } from './tone.css.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';
import { Text } from './typography.js';

type CommonBadgeProps = {
  variant?: BadgeVariant;
  tone?: Tone;
};

export type BadgeProps<T extends keyof ReactHTMLAttributesHacked> =
  PropsWithChildren<Merge<InlineProps<T>, CommonBadgeProps>>;

export const Badge = <T extends keyof ReactHTMLAttributesHacked>({
  variant = 'solid',
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
      borderTone={tone}
      className={[toneVariants[tone], badgeClassName, className]}
      variant={variant}
      {...props}
    >
      {isStringLike(children) ? (
        <Text
          component="span"
          fontSize="0"
          textOverflow="ellipsis"
          textAlign="center"
          tone={null}
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

export const BadgeLink: FC<Merge<BoxProps<'a' | 'button'>, BadgeLinkProps>> = (
  props,
) => <Badge component={'href' in props ? 'a' : 'button'} {...props} />;
