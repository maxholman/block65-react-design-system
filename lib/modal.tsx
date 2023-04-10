import {
  forwardRef,
  useEffect,
  type FC,
  type ForwardedRef,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { Button } from './buttons.js';
import type { Falsy } from './core.css.js';
import { Box, type BoxBasedComponentProps } from './core.js';
import { DesignSystem } from './design-system.js';
import { useDesignSystem } from './hooks/use-design-system.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { CloseIcon } from './icons.js';
import { Block, Inline } from './layout.js';
import {
  buttonClass,
  dialogClass,
  iconClass,
  modalClass,
  commonDimensionsClass,
  modalPanelClass,
  titleClass,
} from './modal.css.js';
import { Panel } from './panel.js';
import type { Merge } from './types.js';
import { Heading } from './typography.js';

type InnerProps<T extends string = ''> = PropsWithChildren<{
  close: (returnValue: T | '') => void;
  heading?: ReactNode | Falsy;
  dismissable?: true | Falsy;
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
}) => {
  const isStringLike = useStringLikeDetector();

  return (
    <Panel className={modalPanelClass}>
      <Inline className={titleClass}>
        {isStringLike(heading) ? (
          <Heading level="3" textOverflow="ellipsis">
            {heading}
          </Heading>
        ) : (
          heading
        )}
        {dismissable && (
          <Inline component="form" method="dialog" justifySelf="end">
            <Button
              variant="transparent"
              onClick={() => close && close('')}
              type="submit"
              className={buttonClass}
              value="close"
              autoFocus={false}
            >
              <CloseIcon className={iconClass} />
            </Button>
          </Inline>
        )}
      </Inline>
      <Block>{children}</Block>
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
    ref: ForwardedRef<HTMLDivElement | null>,
  ) => {
    const ds = useDesignSystem();

    const { dismissable = true } = props;

    useEffect(() => {
      if (dismissable) {
        const escapeHandler = (e: KeyboardEvent) => {
          if (e.key === 'Escape' && close) {
            close('');
          }
        };

        window.addEventListener('keyup', escapeHandler);
        return (): void => {
          window.removeEventListener('keyup', escapeHandler);
        };
      }
      return () => {};
    }, [close, dismissable]);

    return createPortal(
      <DesignSystem {...ds} integrationMode>
        <Box className={modalClass}>
          <Box
            component="div"
            ref={ref}
            className={[className, commonDimensionsClass]}
          >
            <ModalInner {...{ children, close, heading }} />
          </Box>
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
