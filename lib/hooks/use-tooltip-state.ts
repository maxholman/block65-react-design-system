import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  type Placement,
} from '@floating-ui/react';
import { useMemo, useRef, useState } from 'react';

export { type Placement } from '@floating-ui/react-dom';

export function useTooltipState({
  initialOpen = false,
  placement = 'top',
}: {
  initialOpen?: boolean;
  placement?: Placement;
} = {}) {
  const [open, setOpen] = useState(initialOpen);
  const arrowRef = useRef(null);

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(10),
      flip(),
      shift(),
      // arrow should always be at the end, after shift()
      // per https://floating-ui.com/docs/arrow#order
      arrow({ element: arrowRef }),
    ],
  });

  const { context } = data;

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return useMemo(
    () => ({
      open,
      setOpen,
      arrowRef,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data],
  );
}
