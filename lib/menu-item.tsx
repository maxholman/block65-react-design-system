import { forwardRef, type ReactNode } from 'react';
import { Block, type FlexProps } from './layout.js';
import type { Merge } from './types.js';

export type MenuItemProps = Merge<
  FlexProps,
  {
    label: string;
    children?: ReactNode;
  }
>;

export const MenuItem = forwardRef<HTMLElement, MenuItemProps>((props, ref) => (
  <Block {...props} ref={ref} role="menuitem" />
));
