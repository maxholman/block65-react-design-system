import { clsx } from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import { sansSerifFontStyle } from './global-theme.css.js';
import { localColorTheme, localTheme } from './theme.css.js';

export const Theme: FC<PropsWithChildren> = ({ children }) => (
  <div className={clsx(sansSerifFontStyle, localColorTheme, localTheme)}>
    {children}
  </div>
);
