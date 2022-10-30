import type { FC, PropsWithChildren } from 'react';
import { Box } from './core.js';
import { elevations } from './panel.css.js';
import { resetClass } from './reset.css.js';
import {
  genericThemeClass,
  colorVariantsClass,
  sansSerifFontStyle,
  colacubeColorThemeClass,
  backgroundColorThemeClass,
} from './theme.css.js';

export const Theme: FC<PropsWithChildren> = ({ children }) => (
  <Box
    component="div"
    className={[
      resetClass,
      sansSerifFontStyle,
      genericThemeClass,
      colorVariantsClass,
      colacubeColorThemeClass,
      backgroundColorThemeClass,
      elevations.none,
    ]}
  >
    {children}
  </Box>
);

export const Reset: FC<PropsWithChildren> = ({ children }) => (
  <Box component="div" className={[resetClass]}>
    {children}
  </Box>
);
