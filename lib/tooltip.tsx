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
} from '@floating-ui/react';
import type { Placement, Side } from '@floating-ui/react';
import {
  cloneElement,
  type FC,
  isValidElement,
  type PropsWithChildren,
  type ReactNode,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  arrowOffsetVar,
  tooltipArrowStyle,
  tooltipClass,
} from './tooltip.css.js';

export type TooltipState = ReturnType<typeof useTooltipState>;

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

export const Tooltip: FC<
  PropsWithChildren<{ content: ReactNode; initialOpen?: boolean }>
> = ({ content, children, initialOpen = false }) => {
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
  } = useTooltipState({ initialOpen });

  const validChildren = isValidElement(children) ? (
    children
  ) : (
    <span>{children}</span>
  );

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
        validChildren,
        getReferenceProps({ ref: reference, ...validChildren.props }),
      )}
      {open && (
        <span
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
          <span
            ref={arrowRef}
            className={tooltipArrowStyle}
            style={{
              left: arrowX != null ? `${arrowX}px` : '',
              top: arrowY != null ? `${arrowY}px` : '',
              [staticSide[arrowPlacement]]: arrowOffsetVar,
            }}
          />
          {content}
        </span>
      )}
    </>
  );
};
