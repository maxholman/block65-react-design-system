import { Children, cloneElement, type FC, type ReactNode } from 'react';
import {
  calloutClass,
  calloutTextClass,
  calloutTextIconClass,
  calloutTextIconWrapperClass,
} from './callout.css.js';
import { Box, type BoxProps } from './core.js';
import { debugLogger, ifDebugBuild } from './debug-logger.js';
import { InfoIcon } from './icons.js';
import type { Merge, ReactHTMLElementsHacked } from './types.js';
import { ExactText } from './typography.js';
import { isValidElementOfType } from './utils.js';

type CalloutCommonProps = {
  align?: never;
  children: ReactNode;
};

export type CalloutProps<T extends keyof ReactHTMLElementsHacked = 'div'> =
  Merge<BoxProps<T>, CalloutCommonProps>;

export const Callout: FC<CalloutProps> = ({
  children,
  className,
  space = '3',
  ...props
}) => {
  ifDebugBuild(() => {
    if (
      isValidElementOfType(children, ExactText) &&
      Children.count(children) === 1
    ) {
      debugLogger(
        'There is no need to have a single Text component as a child of Callout',
      );
    }
  });

  return (
    <Box
      space={space}
      component="div"
      className={[className, calloutClass]}
      overflow="hidden"
      role="alert"
      capSize="1"
      aria-live="polite"
      {...props}
    >
      <div className={calloutTextIconWrapperClass}>
        <InfoIcon className={calloutTextIconClass} />
      </div>

      {isValidElementOfType(children, ExactText) ? (
        cloneElement(children, {
          className: calloutTextClass,
        })
      ) : (
        <ExactText capSize="1" className={calloutTextClass}>
          {children}
        </ExactText>
      )}
    </Box>
  );
};
