import type { FC, PropsWithChildren } from 'react';
import { Box } from './core.js';
import { genericThemeClass, sansSerifFontStyle } from './design-system.css.js';
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

export const DesignSystem: FC<
  PropsWithChildren<{
    contrastScheme?: ContrastScheme;
    colorScheme?: ColorScheme;
    className?: string;
    integrationMode?: boolean;
  }>
> = ({ children, className, colorScheme, contrastScheme, integrationMode }) => {
  // for readability and minification
  const autoColorScheme = !colorScheme || colorScheme === 'auto';
  const darkColorScheme = colorScheme === 'dark';
  const lightColorScheme = colorScheme === 'light';

  const autoContrast = !contrastScheme || contrastScheme === 'auto';
  const moreContrast = contrastScheme === 'more';
  const lessContrast = contrastScheme === 'less';

  return (
    <Box
      component="div"
      className={[
        resetClass,
        sansSerifFontStyle,
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
  );
};

export const Reset: FC<PropsWithChildren> = ({ children }) => (
  <Box component="div" className={resetClass}>
    {children}
  </Box>
);
