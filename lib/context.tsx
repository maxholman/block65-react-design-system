import type { ClassValue } from 'clsx';
import { createContext, type JSXElementConstructor } from 'react';

export const Context = createContext<{
  className?: ClassValue;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stringLikeComponents?: JSXElementConstructor<any>[];
}>({});
