import { Children, cloneElement, type ReactNode } from 'react';
import styles from './callout.module.scss';
import { Box, type BoxProps } from './core.js';
import { debugLogger, ifDebugBuild } from './debug-logger.js';
import { InfoIcon } from './icons.js';
import { Case, Switch } from './switch.js';
import type { Merge, ReactHTMLElementsHacked } from './types.js';
import { ExactText } from './typography.js';
import { isValidElementOfType } from './utils.js';

export type CalloutVariant = 'info' | 'warning' | 'critical' | 'success';

export type CalloutCommonProps = {
  align?: never;
  children: ReactNode;
  icon?: ReactNode;
  variant?: CalloutVariant;
};

export type CalloutProps<T extends keyof ReactHTMLElementsHacked = 'div'> =
  Merge<BoxProps<T>, CalloutCommonProps>;

export const Callout = ({
  children,
  className,
  space = '3',
  variant = 'info',
  icon,
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
      className={[className, styles.calloutClass, styles[variant]]}
      role="alert"
      aria-live="polite"
      {...props}
    >
      <Box component="span" className={[styles.calloutIconWrapper]}>
        {isValidElementOfType(icon, 'svg') ? (
          cloneElement(icon, {
            className: styles.calloutIcon,
          })
        ) : (
          <Switch predicate={(v) => v === variant}>
            <Case value="info">
              <InfoIcon className={styles.calloutIcon} />
            </Case>
            <Case value="warning">
              <InfoIcon className={styles.calloutIcon} />
            </Case>
            <Case value="critical">
              <InfoIcon className={styles.calloutIcon} />
            </Case>
            <Case value="success">
              <InfoIcon className={styles.calloutIcon} />
            </Case>
          </Switch>
        )}
      </Box>

      {isValidElementOfType(children, ExactText) ? (
        cloneElement(children, {
          className: styles.calloutText,
        })
      ) : (
        <Box component="span" className={styles.calloutText}>
          <span className={styles.truncate}>{children}</span>
        </Box>
      )}
    </Box>
  );
};
