import type { FC, PropsWithChildren } from 'react';
import { Box } from './core.js';
import { genericThemeClass, sansSerifFontStyle } from './design-system.css.js';
import { resetClass } from './reset.css.js';
import {
  defaultBgFgClass,
  ColorScheme,
  ContrastScheme,
  darkClass,
  darkLessContrastClass,
  darkMoreContrastClass,
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
  const autoColorScheme = colorScheme === 'auto';
  const darkColorScheme = colorScheme === 'dark';
  const lightColorScheme = colorScheme === 'light';
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
        (!colorScheme || autoColorScheme) && mediaPrefersColorSchemeClass,

        // auto contrast
        (!contrastScheme || autoColorScheme) && mediaPrefersContrastSchemeClass,

        // forced dark
        darkColorScheme && darkClass,

        // dark + forced contrast
        darkColorScheme && moreContrast && darkMoreContrastClass,
        darkColorScheme && lessContrast && darkLessContrastClass,

        // forced light
        lightColorScheme && lightClass,

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
