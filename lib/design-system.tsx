import type { FC, JSXElementConstructor, PropsWithChildren } from 'react';
import { Context } from './context.js';
import { Box, BoxBasedComponentProps } from './core.js';
import { genericThemeClass } from './design-system.css.js';
import { resetClass } from './reset.css.js';
import {
  ColorScheme,
  ContrastScheme,
  darkClass,
  darkLessContrastClass,
  darkMoreContrastClass,
  defaultBgFgClass,
  defaultColorThemeClass,
  lightClass,
  lightLessContrastClass,
  lightMoreContrastClass,
  mediaPrefersColorSchemeClass,
  mediaPrefersContrastSchemeClass,
} from './schemes/color.css.js';
import type { Merge } from './types.js';

export const DesignSystem: FC<
  Merge<
    BoxBasedComponentProps<'div'>,
    PropsWithChildren<{
      contrastScheme?: ContrastScheme;
      colorScheme?: ColorScheme;
      integrationMode?: boolean;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      stringLikeComponents?: JSXElementConstructor<any>[];
    }>
  >
> = ({
  children,
  className,
  colorScheme,
  contrastScheme,
  integrationMode,
  stringLikeComponents,
  ...props
}) => {
  // for readability and minification
  const autoColorScheme = !colorScheme || colorScheme === 'auto';
  const darkColorScheme = colorScheme === 'dark';
  const lightColorScheme = colorScheme === 'light';

  const autoContrast = !contrastScheme || contrastScheme === 'auto';
  const moreContrast = contrastScheme === 'more';
  const lessContrast = contrastScheme === 'less';

  return (
    <Context.Provider
      value={{
        colorScheme: colorScheme || 'auto',
        contrastScheme: contrastScheme || 'auto',
        ...(stringLikeComponents && { stringLikeComponents }),
      }}
    >
      <Box
        {...props}
        component="div"
        className={[
          resetClass,
          genericThemeClass,

          // color theme
          defaultColorThemeClass,

          // don't set fg/bg if we're integrating with existing frameworks
          !integrationMode && defaultBgFgClass,

          // auto color
          autoColorScheme && mediaPrefersColorSchemeClass,

          // auto contrast
          autoContrast && mediaPrefersContrastSchemeClass,

          // forced dark
          darkColorScheme && autoContrast && darkClass,

          // dark + forced contrast
          darkColorScheme && moreContrast && darkMoreContrastClass,
          darkColorScheme && lessContrast && darkLessContrastClass,

          // forced light
          lightColorScheme && autoContrast && lightClass,

          // forced light + forced contrast
          lightColorScheme && moreContrast && lightMoreContrastClass,
          lightColorScheme && lessContrast && lightLessContrastClass,

          className,
        ]}
      >
        {children}
      </Box>
    </Context.Provider>
  );
};

export const Reset: FC<PropsWithChildren> = ({ children }) => (
  <Box component="div" className={resetClass}>
    {children}
  </Box>
);
