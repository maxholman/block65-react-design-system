import { Suspense, lazy, type FC } from 'react';
import { Button } from './buttons.js';
import { InfoIcon } from './icons.js';
import type {
  MenuButtonFallbackProps,
  MenuProps,
  MenuActivatorProps,
} from './menu.js';

const MenuLazy = lazy(async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return await import('./menu.js');
  } catch (err) {
    return {
      default: ({ children, ...props }) => (
        <Button tone="critical" icon={<InfoIcon />} {...props}>
          {Object(err).name || 'Error'}
        </Button>
      ),
    };
  }
});

const Fallback: FC<MenuButtonFallbackProps> = ({ label, ...rest }) => {
  return (
    <Button busy {...rest}>
      {label}
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
