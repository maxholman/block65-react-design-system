import {
  forwardRef,
  type FC,
  type PropsWithChildren,
  type ForwardedRef,
} from 'react';
import { badgeClassName, type BadgeVariant } from './badges.css.js';
import type { Falsy, Tone } from './core.css.js';
import type { BoxProps } from './core.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { Inline, type InlineProps } from './layout.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';
import { Text } from './typography.js';

type CommonBadgeProps = {
  variant?: BadgeVariant;
  tone?: Tone;
  disabled?: boolean;
};

export type BadgeProps<T extends keyof ReactHTMLAttributesHacked> =
  PropsWithChildren<Merge<InlineProps<T>, CommonBadgeProps>>;

function getBadgeVariantProps(
  variant: BadgeVariant | Falsy,
): Partial<Pick<BoxProps, 'background' | 'border' | 'foreground'>> {
  switch (variant) {
    case 'solid':
      return {
        foreground: '1',
        background: '6',
        border: '6',
      };
    case 'vibrant':
      return {
        foreground: '1',
        background: '10',
        border: '10',
      };
    case 'ghost':
      return {
        border: '6',
        foreground: '6',
      };
    case 'subtle':
      return {
        foreground: '6',
        background: '4',
      };
    case 'transparent':
    default:
      return {
        foreground: '6',
      };
  }
}

export const Badge = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked>(
    { className, children, variant = 'solid', ...props }: BadgeProps<T>,
    forwardedRef: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => {
    const isStringLike = useStringLikeDetector();

    return (
      <Inline
        component="span"
        ref={forwardedRef}
        rounded="small"
        padding="2"
        tone="info"
        borderWidth="2"
        className={[badgeClassName, className]}
        {...getBadgeVariantProps(variant)}
        {...props}
      >
        {isStringLike(children) ? (
          <Text
            fontSize="0"
            fontWeight="medium"
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
  },
);

type BadgeLinkProps = CommonBadgeProps & {
  component?: never;
  href?: string;
};

export const BadgeLink: FC<Merge<BoxProps<'a' | 'button'>, BadgeLinkProps>> = (
  props,
) => <Badge component={'href' in props ? 'a' : 'button'} {...props} />;
