import type {
  FC,
  JSXElementConstructor,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { Box, type BoxProps } from './box.js';
import { DesignSystemContext } from './design-system-context.js';
import { designSystemClassName } from './design-system.css.js';
import { resetClass } from './reset.css.js';
import { genericThemeClassName } from './themes/generic.css.js';
import type { Merge, ReactHTMLElementsHacked } from './types.js';

export type DesignSystemProps<T extends keyof ReactHTMLElementsHacked = 'div'> =
  Merge<
    BoxProps<T>,
    {
      integrationMode?: boolean;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      stringLikeComponents?: JSXElementConstructor<any>[];
    }
  >;

export const DesignSystem = <
  T extends Extract<keyof ReactHTMLElementsHacked, 'div' | 'dialog'>,
>({
  className,
  integrationMode,
  stringLikeComponents,
  component = 'div',
  ...props
}: DesignSystemProps<T>): ReactElement | null => (
  <DesignSystemContext.Provider
    value={{
      className,
      ...(stringLikeComponents && { stringLikeComponents }),
    }}
  >
    <Box
      component={component}
      className={[
        className,

        genericThemeClassName,

        // if we're in integration mode, the reset can only go around el
        integrationMode && resetClass,

        designSystemClassName,
      ]}
      {...props}
    />
  </DesignSystemContext.Provider>
);

export const Reset: FC<PropsWithChildren> = (props) => (
  <Box component="div" className={resetClass} {...props} />
);
