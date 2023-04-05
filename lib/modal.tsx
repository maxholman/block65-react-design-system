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
  commonPanelClass,
  titleClass,
} from './modal.css.js';
import { Panel } from './panel.js';
import type { Merge } from './types.js';
import { Heading } from './typography.js';

type CommonProps = PropsWithChildren<{
  className?: string;
  close?: () => void;
  heading?: ReactNode | Falsy;
}>;

export type ModalProps = Merge<
  BoxBasedComponentProps<'div'>,
  {
    close: () => void;
    onKeyDown?: (e: KeyboardEvent) => void; // WARN: this is not a React event
    open?: boolean | Falsy;
  } & CommonProps
>;

export type DialogProps<T extends string> = Merge<
  BoxBasedComponentProps<'dialog'> & {
    show: () => void;
    showModal: () => void;
    close: (returnValue?: T) => void;
  },
  CommonProps
>;

const ModalInner: FC<CommonProps> = ({
  children,
  className,
  close,
  heading,
  ...props
}: CommonProps) => {
  const isStringLike = useStringLikeDetector();

  return (
    <Panel className={commonPanelClass} {...props}>
      <Inline className={titleClass}>
        {isStringLike(heading) ? (
          <Heading level="3" textOverflow="ellipsis">
            {heading}
          </Heading>
        ) : (
          heading
        )}
        <Inline component="form" method="dialog" justifySelf="end">
          <Button
            variant="transparent"
            onClick={() => close && close()}
            type="submit"
            className={buttonClass}
            value="close"
            autoFocus={false}
          >
            <CloseIcon className={iconClass} />
          </Button>
        </Inline>
      </Inline>
      <Block>{children}</Block>
    </Panel>
  );
};

export const Modal: FC<ModalProps> = ({
  onKeyDown,
  open,
  ...props
}: ModalProps) => {
  const ds = useDesignSystem();

  const { close } = props;

  useEffect(() => {
    const escapeHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && close) {
        close();
      }
      if (onKeyDown) {
        onKeyDown.call(e.target, e);
      }
    };

    window.addEventListener('keyup', escapeHandler);
    return (): void => {
      window.removeEventListener('keyup', escapeHandler);
    };
  }, [close, onKeyDown]);

  return createPortal(
    <DesignSystem {...ds} integrationMode>
      <Box className={modalClass}>
        <Box component="dialog" open={!!open} className={commonDimensionsClass}>
          <ModalInner {...props} />
        </Box>
      </Box>
    </DesignSystem>,
    document.body,
  );
};

export const Dialog = forwardRef(
  <T extends string>(
    { show, showModal, close, ...props }: DialogProps<T>,
    ref: ForwardedRef<HTMLDialogElement | null>,
  ) => {
    const ds = useDesignSystem();
    return createPortal(
      <DesignSystem {...ds} integrationMode>
        <Box
          component="dialog"
          className={[commonDimensionsClass, dialogClass]}
          ref={ref}
        >
          <ModalInner {...props} />
        </Box>
      </DesignSystem>,
      document.body,
    );
  },
);
