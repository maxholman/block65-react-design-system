import type { FC, PropsWithChildren } from 'react';
import { Box } from './core.js';
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
    ]}
  >
    {children}
  </Box>
);
