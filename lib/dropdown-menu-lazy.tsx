import { Suspense, lazy, type FC, type PropsWithChildren } from 'react';
import { Button, ButtonIcon } from './buttons.js';
import type { MenuProps } from './dropdown-menu.js';
import { InfoIcon } from './icons.js';

const MenuLazy = lazy(() =>
  import('./dropdown-menu.js').catch(async (err) => ({
    default: () => (
      <ButtonIcon
        tone="critical"
        disabled
        icon={<InfoIcon />}
        label={Object(err).name || 'Error'}
      />
    ),
  })),
);

export const Menu: FC<PropsWithChildren<MenuProps>> = (props) => (
  <Suspense fallback={<Button busy>{props.label}</Button>}>
    <MenuLazy {...props} />
  </Suspense>
);

export type { MenuProps };
