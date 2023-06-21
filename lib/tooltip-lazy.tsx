import { Suspense, lazy, type FC } from 'react';
import type { TooltipProps } from './tooltip.js';

export const TooltipLazy = lazy(() => import('./tooltip.js'));

export const Tooltip: FC<TooltipProps> = (props) => (
  <Suspense fallback={props.children}>
    <TooltipLazy {...props} />
  </Suspense>
);
