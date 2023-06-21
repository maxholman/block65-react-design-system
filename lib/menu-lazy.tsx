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
          component="div"
          tone="warn"
          icon={<InfoIcon />}
          {...withoutMenuProps(props)}
        >
          {Object(err).name || 'Error'}
        </Button>
      ),
    };
  }
});

const Fallback: FC<MenuButtonFallbackProps> = (props) => (
  <Button component="div" tone="neutral" busy {...withoutMenuProps(props)}>
    {props.label}
  </Button>
);

export const Menu: FC<MenuProps> = (withFallbackProps) => {
  const { fallback, ...props } = withFallbackProps;

  return (
    <Suspense fallback={fallback || <Fallback {...props} />}>
      <MenuLazy {...props} />
    </Suspense>
  );
};

export type { MenuProps, MenuActivatorProps };
