import { Suspense, lazy, type FC } from 'react';
import { Button } from './buttons.js';
import { InfoIcon } from './icons.js';
import type {
  MenuButtonFallbackProps,
  MenuProps,
  MenuActivatorProps,
} from './menu.js';

function withoutMenuProps({
  label,
  initialPlacement,
  onOpenChange,
  menuDropdownProps,
  nested,
  activator,
  ...rest
}: MenuProps) {
  return rest;
}

const MenuLazy = lazy(async () => {
  try {
    return await import('./menu.js');
  } catch (err) {
    return {
      default: ({ children, ...props }) => (
        <Button
          tone="critical"
          icon={<InfoIcon />}
          {...withoutMenuProps(props)}
        >
          {Object(err).name || 'Error'}
        </Button>
      ),
    };
  }
});

const Fallback: FC<MenuButtonFallbackProps> = (props) => {
  return (
    <Button busy {...withoutMenuProps}>
      {props.label}
    </Button>
  );
};

export const Menu: FC<MenuProps> = (props) => {
  const { fallback, ...fallbackProps } = props;

  return (
    <Suspense fallback={<Fallback {...fallbackProps} />}>
      <MenuLazy {...props} />
    </Suspense>
  );
};

export type { MenuProps, MenuActivatorProps };
