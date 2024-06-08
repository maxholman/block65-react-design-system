import {
  forwardRef,
  useEffect,
  useRef,
  type FC,
  type ForwardedRef,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { ButtonIcon } from './buttons.js';
import type { Falsy } from './core.css.js';
import { Box, type BoxProps } from './core.js';
import { DesignSystem } from './design-system.js';
import { useDesignSystem } from './hooks/use-design-system.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { CloseIcon } from './icons.js';
import { Block, Inline } from './layout.js';
import {
  buttonClass,
  commonDimensionsClass,
  dialogClass,
  modalClass,
} from './modal.css.js';
import type { Merge } from './types.js';
import { Heading } from './typography.js';

type InnerProps<T extends string | 'dismiss' = 'dismiss'> = PropsWithChildren<{
  close: (returnValue: T | 'dismiss') => void;
  heading?: ReactNode | Falsy;
  dismissable?: true | Falsy;
  lightDismiss?: true | Falsy;
}>;

export type DialogProps<
  T extends string,
  C extends 'dialog' | 'div' = 'dialog',
> = Merge<
  BoxProps<C>,
  InnerProps<T | 'dismiss'> & {
    show: () => void;
  }
>;

const ModalInner: FC<InnerProps> = ({
  children,
  dismissable = true,
  lightDismiss,
  close,
  heading,
  ...props
}) => {
  const isStringLike = useStringLikeDetector();

  return (
    <Block component="section" padding="8" {...props}>
      <Inline flexWrap="nowrap">
        {isStringLike(heading) ? <Heading>{heading}</Heading> : heading}
        {dismissable && (
          <Inline component="form" method="dialog" justifySelf="end">
            <ButtonIcon
              onClick={() => close('dismiss')}
              type="submit"
              className={buttonClass}
              value="close"
              label="close"
              autoFocus={false}
              icon={<CloseIcon />}
            />
          </Inline>
        )}
      </Inline>
      <Block flexGrow>{children}</Block>
    </Block>
  );
};

export const Modal = forwardRef(
  <T extends string>(
    {
      children,
      className,
      close,
      show,
      heading,
      ...props
    }: DialogProps<T, 'div'>,
    forwardedRef: ForwardedRef<HTMLDivElement | null>,
  ) => {
    const ds = useDesignSystem();

    const { dismissable = true, lightDismiss = dismissable } = props;

    useEffect(() => {
      if (dismissable) {
        const escapeHandler = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            close('dismiss');
          }
        };

        window.addEventListener('keyup', escapeHandler);
        return (): void => {
          window.removeEventListener('keyup', escapeHandler);
        };
      }
      return () => {};
    }, [close, dismissable]);

    const backdropRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const el = backdropRef.current;
      if (lightDismiss && el) {
        const handler = (e: MouseEvent) => {
          if (e.target === e.currentTarget) {
            close('dismiss');
          }
        };

        el.addEventListener('click', handler);
        return (): void => {
          el.removeEventListener('click', handler);
        };
      }
      return () => {};
    }, [close, lightDismiss]);

    return createPortal(
      <DesignSystem {...ds} integrationMode>
        <Box className={modalClass} ref={backdropRef}>
          <Block
            ref={forwardedRef}
            className={[className, commonDimensionsClass]}
          >
            <ModalInner {...{ children, close, heading }} {...props} />
          </Block>
        </Box>
      </DesignSystem>,
      document.body,
    );
  },
);

export const Dialog = forwardRef(
  <T extends string>(
    { children, className, close, show, heading, ...props }: DialogProps<T>,
    ref: ForwardedRef<HTMLDialogElement | null>,
  ) => {
    const ds = useDesignSystem();
    return createPortal(
      <DesignSystem {...ds} integrationMode>
        <Box
          {...props}
          component="dialog"
          className={[className, commonDimensionsClass, dialogClass]}
          ref={ref}
        >
          <ModalInner {...{ children, close, heading }} />
        </Box>
      </DesignSystem>,
      document.body,
    );
  },
);
