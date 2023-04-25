import { forwardRef, type ReactNode } from 'react';
import { Block, type BlockProps } from './layout.js';
import type { Merge } from './types.js';

export type MenuItemProps = Merge<
  BlockProps,
  {
    label: string;
    children?: ReactNode;
  }
>;

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  (props, ref) => <Block {...props} ref={ref} role="menuitem" />,
);
