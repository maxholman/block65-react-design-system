import { cloneElement, type FC, type ReactNode, Children } from 'react';
import {
  calloutClass,
  calloutTextClass,
  calloutTextIconClass,
  calloutTextIconWrapperClass,
} from './callout.css.js';
import type { Falsy } from './core.css.js';
import type { BoxProps } from './core.js';
import { debugLogger, ifDebugBuild } from './debug-logger.js';
import { InfoIcon } from './icons.js';
import { Inline, type Variant } from './layout.js';
import { type Tone } from './tone.css.js';
import type { Merge, ReactHTMLElementsHacked } from './types.js';
import { fontSizeVariants } from './typography.css.js';
import { Text } from './typography.js';
import { isValidElementOfType } from './utils.js';

type CalloutVariant = Variant;

type CalloutCommonProps = {
  tone?: Exclude<Tone, 'accent'>;
  align?: never;
  children: ReactNode;
  variant?: CalloutVariant;
};

export type CalloutProps<T extends keyof ReactHTMLElementsHacked = 'div'> =
  Merge<BoxProps<T>, CalloutCommonProps>;

function getCalloutVariantProps(
  variant: CalloutVariant | Falsy,
): Partial<Pick<BoxProps, 'background' | 'border' | 'foreground'>> {
  switch (variant) {
    case 'solid':
      return {
        background: '6',
        // border: '6',
      };
    case 'vibrant':
      return {
        background: '10',
        // border: '10',
      };
    case 'ghost':
      return {
        border: '6',
        // foreground: '6',
      };
    case 'subtle':
      return {
        // border: '4',
        background: '3',
      };
    case 'transparent': {
      return {
        // foreground: '6',
      };
    }
    case 'none':
    default:
      return {};
  }
}

export const Callout: FC<CalloutProps> = ({
  variant = 'solid',
  children,
  className,
  ...props
}) => {
  ifDebugBuild(() => {
    if (
      isValidElementOfType(children, Text) &&
      Children.count(children) === 1
    ) {
      debugLogger(
        'There is no need to have a single Text component as a child of Callout',
      );
    }
  });

  return (
    <Inline
      component="div"
      rounded="medium"
      className={[className, calloutClass, fontSizeVariants[1]]}
      role="alert"
      aria-live="polite"
      {...getCalloutVariantProps(variant)}
      {...props}
    >
      <div className={calloutTextIconWrapperClass}>
        <InfoIcon className={calloutTextIconClass} />
      </div>

      {isValidElementOfType(children, Text) ? (
        cloneElement(children, {
          className: calloutTextClass,
        })
      ) : (
        <Text className={calloutTextClass}>{children}</Text>
      )}
    </Inline>
  );
};
