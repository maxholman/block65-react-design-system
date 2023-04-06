import { forwardRef, type ReactNode } from 'react';
import type { Merge } from 'type-fest';
import type { ButtonProps } from './buttons.js';
import { Block } from './layout.js';
import type { TextLinkProps } from './links.js';

type CommonMenuItemComponentProps = TextLinkProps | ButtonProps<'button'>;

const commonMenuItemBaseComponentProps = {
  // variant: 'none',
  tone: 'neutral',
  textAlign: 'start',
} satisfies CommonMenuItemComponentProps;

export type MenuItemProps = Merge<
  Omit<
    CommonMenuItemComponentProps,
    keyof typeof commonMenuItemBaseComponentProps
  >,
  {
    children?: ReactNode;
    // label: string;
    // disabled?: boolean;
  }
>;

export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  (props, ref) => (
    <Block
      {...commonMenuItemBaseComponentProps}
      {...props}
      ref={ref}
      role="menuitem"
    />
  ),
);
