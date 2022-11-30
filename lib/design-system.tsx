import type { FC, PropsWithChildren } from 'react';
import { Box } from './core.js';
import { genericThemeClass, sansSerifFontStyle } from './design-system.css.js';
import { resetClass } from './reset.css.js';
import {
  darkClass,
  mediaPrefersColorSchemeClass,
  lightClass,
  ColorScheme,
  defaultColorThemeClass,
  darkMoreContrastClass,
  darkLessContrastClass,
  ContrastScheme,
} from './schemes/color.css.js';

export const DesignSystem: FC<
  PropsWithChildren<{
    contrastScheme?: ContrastScheme;
    colorScheme?: ColorScheme;
    className?: string;
  }>
> = ({ children, className, colorScheme, contrastScheme }) => (
  <Box
    component="div"
    className={[
      resetClass,
      sansSerifFontStyle,
      genericThemeClass,

      defaultColorThemeClass,

      // mediaPrefersContrastSchemeClass,
      // contrastScheme === 'more' && moreContrastClass,
      // contrastScheme === 'less' && lessContrastClass,

      (!colorScheme || colorScheme === 'auto') && mediaPrefersColorSchemeClass,

      colorScheme === 'dark' && darkClass,
      colorScheme === 'dark' &&
        contrastScheme === 'more' &&
        darkMoreContrastClass,
      colorScheme === 'dark' &&
        contrastScheme === 'less' &&
        darkLessContrastClass,

      colorScheme === 'light' && lightClass,

      className,
    ]}
  >
    {children}
  </Box>
);

export const Reset: FC<PropsWithChildren> = ({ children }) => (
  <Box component="div" className={resetClass}>
    {children}
  </Box>
);
