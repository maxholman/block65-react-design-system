import type { FC, PropsWithChildren } from 'react';
import { Box } from './core.js';
import { genericThemeClass, sansSerifFontStyle } from './design-system.css.js';
import { resetClass } from './reset.css.js';
import {
  darkClass,
  mediaPrefersClass,
  lightClass,
  ColorScheme,
  defaultColorThemeClass,
} from './schemes/color.css.js';
import type { ContrastScheme } from './schemes/contrast.css.js';

export const DesignSystem: FC<
  PropsWithChildren<{
    contrastScheme?: ContrastScheme;
    colorScheme?: ColorScheme;
    className?: string;
  }>
> = ({ children, className, colorScheme }) => (
  <Box
    component="div"
    className={[
      className,
      resetClass,
      sansSerifFontStyle,
      genericThemeClass,

      defaultColorThemeClass,

      mediaPrefersClass,

      colorScheme === 'dark' && darkClass,
      colorScheme === 'light' && lightClass,
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
