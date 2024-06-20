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
import styles from './tooltip.module.scss';
import { paddingVariants, roundedVariants } from './box.css.js';
import { useTooltipState } from './hooks/use-tooltip-state.js';

export type TooltipProps = PropsWithChildren<{
  content: ReactNode;
  initialOpen?: boolean;
  initialPlacement?: Placement;
}>;

const TooltipActual = forwardRef<
  HTMLElement,
  PropsWithChildren<HTMLAttributes<HTMLSpanElement>>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={clsx([
      className,
      styles.tooltip,
      paddingVariants['4'],
      roundedVariants['2'],
    ])}
    {...props}
  />
));

export const Tooltip: FC<TooltipProps> = ({
  content,
  children,
  initialOpen = false,
  initialPlacement,
}) => {
  const {
    refs,
    floatingStyles,
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

  const child = isValidElement(children) ? children : <span>{children}</span>;

  // const arrowPlacement = placement.split('-')[0] as Side;

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
        </TooltipActual>
      )}
    </>
  );
};

export default Tooltip;
