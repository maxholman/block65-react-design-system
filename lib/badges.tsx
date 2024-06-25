import { forwardRef, type ForwardedRef } from 'react';
import { badgePurposeClassNames } from './badge.css.js';
import { Box } from './box.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { Inline, type FlexProps } from './layout.js';
import type { PurposeVariant } from './purpose.css.js';
import type { Falsy, ReactHTMLElementsHacked } from './types.js';

export type BadgeProps<T extends keyof ReactHTMLElementsHacked> =
  FlexProps<T> & { variant?: PurposeVariant | Falsy };

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
        className={[className, variant && badgePurposeClassNames[variant]]}
        {...props}
      >
        {isStringLike(children) ? (
          <Box
            component="span"
            fontSize="0"
            fontWeight="medium"
            textOverflow="ellipsis"
            textAlign="center"
          >
            {children}
          </Box>
        ) : (
          children
        )}
      </Inline>
    );
  },
);
