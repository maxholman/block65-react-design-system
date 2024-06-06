import {
  forwardRef,
  type FC,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react';
import { badgeClassName } from './badges.css.js';
import type { BoxProps } from './core.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { Inline, type InlineProps } from './layout.js';
import type { Merge, ReactHTMLElementsHacked } from './types.js';
import { Text } from './typography.js';

export type BadgeProps<T extends keyof ReactHTMLElementsHacked> =
  PropsWithChildren<InlineProps<T>>;

export const Badge = forwardRef(
  <T extends keyof ReactHTMLElementsHacked>(
    { className, children, ...props }: BadgeProps<T>,
    forwardedRef: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => {
    const isStringLike = useStringLikeDetector();

    return (
      <Inline
        component="span"
        rounded="1"
        padding="2"
        borderWidth="2"
        className={[badgeClassName, className]}
        {...props}
        ref={forwardedRef}
      >
        {isStringLike(children) ? (
          <Text
            capSize="0"
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

type BadgeLinkProps = {
  component?: never;
  href?: string;
};

export const BadgeLink: FC<Merge<BoxProps<'a' | 'button'>, BadgeLinkProps>> = (
  props,
) => <Badge component={'href' in props ? 'a' : 'button'} {...props} />;
