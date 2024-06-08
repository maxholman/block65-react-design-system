import type {
  FC,
  JSXElementConstructor,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { Context } from './context.js';
import { Box, type BoxProps } from './core.js';
import { genericThemeClass } from './design-system.css.js';
import { resetClass } from './reset.css.js';
import type { Merge, ReactHTMLElementsHacked } from './types.js';

export type DesignSystemProps<T extends keyof ReactHTMLElementsHacked = 'div'> =
  Merge<
    BoxProps<T>,
    PropsWithChildren<{
      integrationMode?: boolean;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      stringLikeComponents?: JSXElementConstructor<any>[];
    }>
  >;

export const DesignSystem = <
  T extends Extract<keyof ReactHTMLElementsHacked, 'div' | 'dialog'>,
>({
  children,
  className,
  integrationMode,
  stringLikeComponents,
  component = 'div',
  ...props
}: DesignSystemProps<T>): ReactElement | null => (
  <Context.Provider
    value={{
      className,
      ...(stringLikeComponents && { stringLikeComponents }),
    }}
  >
    <Box
      component={component}
      className={[
        className,

        genericThemeClass,

        // if we're in integration mode, the reset can only go around el
        integrationMode && resetClass,
      ]}
      {...props}
    >
      {children}
    </Box>
  </Context.Provider>
);

export const Reset: FC<PropsWithChildren> = ({ children }) => (
  <Box component="div" className={resetClass}>
    {children}
  </Box>
);
