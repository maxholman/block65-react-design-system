import { Children, cloneElement, type ReactNode } from 'react';
import { Box, type BoxProps } from './box.js';
import {
  calloutStyleVariants,
  iconClassName,
  iconWrapperClassName,
  textClassName,
} from './callout.css.js';
import { debugLogger, ifDebugBuild } from './debug-logger.js';
import {
  AttentionIcon,
  CriticalIcon,
  InfoIcon,
  PositiveIcon,
} from './icons.js';
import type { PurposeVariant } from './purpose.css.js';
import type { Merge, ReactHTMLElementsHacked } from './types.js';
import { ExactText } from './typography.js';
import { isValidElementOfType } from './utils.js';

export type { PurposeVariant as CalloutVariant };

function variantIcon(variant: PurposeVariant): ReactNode {
  const props = { className: iconClassName };

  switch (variant) {
    case 'critical':
      return <CriticalIcon {...props} />;
    case 'positive':
      return <PositiveIcon {...props} />;
    case 'attention':
      return <AttentionIcon {...props} />;
    case 'default':
    case 'info':
    default:
      return <InfoIcon {...props} />;
  }
}

export type CalloutCommonProps = {
  align?: never;
  children: ReactNode;
  icon?: ReactNode;
  variant?: PurposeVariant;
};

export type CalloutProps<T extends keyof ReactHTMLElementsHacked = 'div'> =
  Merge<BoxProps<T>, CalloutCommonProps>;

export const Callout = ({
  children,
  className,
  space = '3',
  variant = 'info',
  icon,
  capSize = '1',
  ...props
}: CalloutProps) => {
  ifDebugBuild(() => {
    if (
      isValidElementOfType(children, ExactText) &&
      Children.count(children) === 1
    ) {
      debugLogger(
        'There is no need to have a single ExactText component as a child of Callout',
      );
    }
  });

  return (
    <Box
      space={space}
      className={[className, calloutStyleVariants[variant]]}
      role="alert"
      aria-live="polite"
      {...props}
    >
      <Box component="span" className={iconWrapperClassName}>
        {isValidElementOfType(icon, 'svg')
          ? cloneElement(icon, {
              className: iconClassName,
            })
          : variantIcon(variant)}
      </Box>

      {isValidElementOfType(children, ExactText) ? (
        cloneElement(children, {
          className: textClassName,
        })
      ) : (
        <ExactText capSize={capSize} className={textClassName}>
          {children}
        </ExactText>
      )}
    </Box>
  );
};
