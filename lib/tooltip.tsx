import type { Placement } from '@floating-ui/react';
import {
  cloneElement,
  isValidElement,
  type FC,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import { useTooltipState } from './hooks/use-tooltip-state.js';
import { tooltipClass } from './tooltip.css.js';

export type TooltipState = ReturnType<typeof useTooltipState>;

export type TooltipProps = PropsWithChildren<{
  content: ReactNode;
  initialOpen?: boolean;
  initialPlacement?: Placement;
}>;

/* const staticSide: Record<Side, Side> = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
}; */

export const Tooltip: FC<TooltipProps> = ({
  content,
  children,
  initialOpen = false,
  initialPlacement,
}) => {
  const {
    reference,
    floating,
    strategy,
    x,
    y,
    open,
    getReferenceProps,
    getFloatingProps,
    // placement,
    // arrowRef,
    // middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useTooltipState({
    initialOpen,
    ...(initialPlacement && { placement: initialPlacement }),
  });

  const validChildren = isValidElement(children) ? (
    children
  ) : (
    <span>{children}</span>
  );

  // const arrowPlacement = placement.split('-')[0] as Side;

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
          {/* <span
            ref={arrowRef}
            className={tooltipArrowClass}
            style={{
              left: arrowX != null ? `${arrowX}px` : '',
              top: arrowY != null ? `${arrowY}px` : '',
              [staticSide[arrowPlacement]]: arrowOffsetVar,
            }}
          /> */}
          {content}
        </span>
      )}
    </>
  );
};

export default Tooltip;
