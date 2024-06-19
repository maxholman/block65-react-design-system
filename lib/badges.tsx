import {
  forwardRef,
  type FC,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react';
import styles from './badge.module.css';
import type { BoxProps } from './core.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { Inline, type InlineProps } from './layout.js';
import type { Falsy, Merge, ReactHTMLElementsHacked } from './types.js';
import { ExactText } from './typography.js';

export type BadgeVariant =
  | 'default'
  | 'info'
  | 'positive'
  | 'error'
  | 'attention';

export type BadgeProps<T extends keyof ReactHTMLElementsHacked> =
  PropsWithChildren<InlineProps<T>> & { variant?: BadgeVariant | Falsy };

export const Badge = forwardRef(
  <T extends keyof ReactHTMLElementsHacked>(
    { children, variant = 'default', className, ...props }: BadgeProps<T>,
    forwardedRef: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => {
    const isStringLike = useStringLikeDetector();

    return (
      <Inline
        ref={forwardedRef}
        component="span"
        padding="2"
        paddingInline="3"
        className={[className, styles.badge, variant && styles[variant]]}
        {...props}
      >
        {isStringLike(children) ? (
          <ExactText
            fontSize="0"
            fontWeight="medium"
            textOverflow="ellipsis"
            textAlign="center"
          >
            {children}
          </ExactText>
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
