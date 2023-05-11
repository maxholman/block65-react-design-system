import {
  forwardRef,
  useEffect,
  type FC,
  type ForwardedRef,
  type PropsWithChildren,
  type ReactNode,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { ButtonIcon } from './buttons.js';
import type { Falsy } from './core.css.js';
import { Box, type BoxBasedComponentProps } from './core.js';
import { DesignSystem } from './design-system.js';
import { useCombinedRefs } from './hooks/use-combined-refs.js';
import { useDesignSystem } from './hooks/use-design-system.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { CloseIcon } from './icons.js';
import { Block, Inline } from './layout.js';
import {
  buttonClass,
  commonDimensionsClass,
  dialogClass,
  modalClass,
  modalPanelClass,
} from './modal.css.js';
import { Panel } from './panel.js';
import type { Merge } from './types.js';
import { Heading } from './typography.js';

type InnerProps<T extends string = ''> = PropsWithChildren<{
  close: (returnValue: T | '' | 'dismiss') => void;
  heading?: ReactNode | Falsy;
  dismissable?: true | Falsy;
  lightDismiss?: true | Falsy;
}>;

export type DialogProps<
  T extends string,
  C extends 'dialog' | 'div' = 'dialog',
> = Merge<
  BoxBasedComponentProps<C>,
  InnerProps<T> & {
    show: () => void;
    showModal: () => void;
  }
>;

const ModalInner: FC<InnerProps> = ({
  children,
  dismissable = true,
  close,
  heading,
  ...props
}) => {
  const isStringLike = useStringLikeDetector();

  return (
    <Panel className={modalPanelClass} {...props}>
      <Inline flexWrap="nowrap">
        {isStringLike(heading) ? (
          <Heading level="3" textOverflow="ellipsis">
            {heading}
          </Heading>
        ) : (
          heading
        )}
        {dismissable && (
          <Inline component="form" method="dialog" justifySelf="end">
            <ButtonIcon
              variant="transparent"
              onClick={() => close('')}
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
    </Panel>
  );
};

export const Modal = forwardRef(
  <T extends string>(
    {
      children,
      className,
      close,
      show,
      showModal,
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
    const ref = useCombinedRefs(forwardedRef, backdropRef);

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
        <Box className={modalClass}>
          <Block
            component="div"
            ref={ref}
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
    {
      children,
      className,
      close,
      show,
      showModal,
      heading,
      ...props
    }: DialogProps<T>,
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
