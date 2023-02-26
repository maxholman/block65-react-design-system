import type { ClassValue } from 'clsx';
import { createContext, type JSXElementConstructor } from 'react';
import type { ColorScheme, ContrastScheme } from './schemes/color.css.js';

export const Context = createContext<{
  colorScheme: ColorScheme;
  contrastScheme: ContrastScheme;
  className?: ClassValue;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stringLikeComponents?: JSXElementConstructor<any>[];
}>({
  colorScheme: 'auto' as ColorScheme,
  contrastScheme: 'auto' as ContrastScheme,
});
