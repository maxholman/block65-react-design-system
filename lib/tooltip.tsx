import type { Placement } from '@floating-ui/react';
import { clsx } from 'clsx';
import {
  cloneElement,
  forwardRef,
  isValidElement,
  type FC,
  type HTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import { useTooltipState } from './hooks/use-tooltip-state.js';
import { tooltipClassName } from './tooltip.css.js';

export type TooltipProps = PropsWithChildren<{
  content: ReactNode;
  initialOpen?: boolean;
  initialPlacement?: Placement;
}>;

const TooltipActual = forwardRef<
  HTMLElement,
  PropsWithChildren<HTMLAttributes<HTMLSpanElement>>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={clsx([className, tooltipClassName])} {...props} />
));

export const Tooltip: FC<TooltipProps> = ({
  content,
  children,
  initialOpen = false,
  initialPlacement,
}) => {
  const { refs, floatingStyles, open, getReferenceProps, getFloatingProps } =
    useTooltipState({
      initialOpen,
      ...(initialPlacement && { placement: initialPlacement }),
    });

  const child = isValidElement(children) ? children : <span>{children}</span>;

  return (
    <>
      {cloneElement(child, {
        ...child.props,
        ref: refs.setReference,
        ...getReferenceProps(),
      })}
      {open && (
        <TooltipActual
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {content}
        </TooltipActual>
      )}
    </>
  );
};

export default Tooltip;
