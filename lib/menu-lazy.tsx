import { Suspense, lazy, type FC, type PropsWithChildren } from 'react';
import { Button } from './buttons.js';
import type { MenuButtonProps, MenuProps } from './menu.js';
import { InfoIcon } from './icons.js';

const MenuLazy = lazy(async () => {
  try {
    return await import('./menu.js');
  } catch (err) {
    return {
      default: ({ children, ...props }: MenuButtonProps) => (
        <Button tone="critical" icon={<InfoIcon />} {...props}>
          {Object(err).name || 'Error'}
        </Button>
      ),
    };
  }
});

export const Menu: FC<PropsWithChildren<MenuProps>> = (props) => {
  const {
    label,
    menuDropdownProps,
    initialPlacement,
    nested,
    onOpenChange,
    ...rest
  } = props;

  return (
    <Suspense
      fallback={
        <Button busy {...rest}>
          {props.label}
        </Button>
      }
    >
      <MenuLazy {...props} />
    </Suspense>
  );
};

export type { MenuProps, MenuButtonProps };
