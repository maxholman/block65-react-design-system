import type { Placement } from '@floating-ui/react-dom-interactions';
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  Side,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import {
  cloneElement,
  FC,
  isValidElement,
  PropsWithChildren,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  arrowoffsetVar,
  tooltipArrowStyle,
  tooltipClass,
} from './tooltip.css.js';

export type TooltipState = ReturnType<typeof useTooltipState>;

export function useTooltipState({
  initialOpen = true,
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
      offset(5),
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

export const Tooltip: FC<PropsWithChildren<{ content: ReactNode }>> = ({
  content,
  children,
}) => {
  const {
    placement,
    reference,
    floating,
    strategy,
    x,
    y,
    open,
    arrowRef,
    getReferenceProps,
    getFloatingProps,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useTooltipState();

  if (!isValidElement(children)) {
    return <>{children}</>;
  }

  const staticSide: Record<Side, Side> = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  };

  const arrowPlacement = placement.split('-')[0] as Side;

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: reference, ...children.props }),
      )}
      {open && (
        <div
          ref={floating}
          {...getFloatingProps({
            className: tooltipClass,
            style: {
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              visibility: x == null ? 'hidden' : 'visible',
            },
          })}
        >
          <div
            ref={arrowRef}
            className={tooltipArrowStyle}
            style={{
              left: arrowX != null ? `${arrowX}px` : '',
              top: arrowY != null ? `${arrowY}px` : '',
              [staticSide[arrowPlacement]]: arrowoffsetVar,
            }}
          />
          {content}
        </div>
      )}
    </>
  );
};
