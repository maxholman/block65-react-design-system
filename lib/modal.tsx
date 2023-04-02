import { useEffect, type FC, type HTMLAttributes, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './buttons.js';
import { DesignSystem } from './design-system.js';
import { useDesignSystem } from './hooks/use-design-system.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
import { CloseIcon } from './icons.js';
import { Block, Inline } from './layout.js';
import {
  buttonClass,
  iconClass,
  modalClass,
  modalInnerClass,
} from './modal.css.js';
import { Panel } from './panel.js';
import { Heading } from './typography.js';

type ModalCommonProps = {
  onClose: (cancelled?: boolean) => void;
  onKeyDown?: (e: KeyboardEvent) => void; // WARN: this is not a React event
  heading?: ReactNode;
};

type ModalInnerProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof ModalCommonProps
> &
  ModalCommonProps;

export type ModalProps = ModalInnerProps & {
  show: boolean;
};

const ModalInner: FC<ModalInnerProps> = ({
  children,
  className,
  onClose,
  onKeyDown,
  heading,
  ...props
}) => {
  const ds = useDesignSystem();
  const isStringLike = useStringLikeDetector();

  useEffect(() => {
    const escapeHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose(true);
      }
      if (onKeyDown) {
        onKeyDown.call(e.target, e);
      }
    };
    window.addEventListener('keyup', escapeHandler);
    return (): void => {
      window.removeEventListener('keyup', escapeHandler);
    };
  }, [onClose, onKeyDown]);

  return createPortal(
    <DesignSystem {...ds}>
      <Block alignItems="center" className={modalClass} {...props}>
        <Panel className={modalInnerClass} padding="7">
          <Inline>
            {isStringLike(heading) ? (
              <Heading level="3" textOverflow="ellipsis">
                {heading}
              </Heading>
            ) : (
              heading
            )}
            <Button
              justifySelf="end"
              variant="transparent"
              onClick={() => onClose(true)}
              className={buttonClass}
            >
              <CloseIcon className={iconClass} />
            </Button>
          </Inline>
          <Block>{children}</Block>
        </Panel>
      </Block>
    </DesignSystem>,
    document.body,
  );
};

export const Modal: FC<ModalProps> = ({ show, ...props }) =>
  show ? <ModalInner {...props} /> : null;

export const ModalAlwaysRender = ModalInner;
