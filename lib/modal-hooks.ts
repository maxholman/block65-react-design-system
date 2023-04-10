import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useToggle } from './hooks/use-toggle.js';

class ModalEmitter<T extends string> extends EventTarget {
  public close(detail: T | '') {
    this.dispatchEvent(
      new CustomEvent('close', {
        detail,
      }),
    );
  }
}

export function useDialog<T extends string>(
  onClose?: (returnValue: T | '') => void,
) {
  const ref = useRef<HTMLDialogElement | null>(null);

  const modalEmitterRef = useRef(new ModalEmitter<T>());
  const closeEvent = useCallback(
    () =>
      new Promise<T | ''>((resolve) => {
        if (!ref.current?.open) {
          resolve(
            ref.current?.returnValue ? (ref.current?.returnValue as T) : '',
          );
        }
        modalEmitterRef.current.addEventListener(
          'close',
          (e: Event | CustomEvent<T>) => resolve('detail' in e ? e.detail : ''),
          { once: true },
        );
      }),
    [],
  );

  const showModal = () => {
    ref.current?.showModal();
  };

  // Modals are always Modal, hence the name, so we dont need this
  /** @deprecated */
  const show = () => {
    ref.current?.show();
  };

  const close = useCallback((returnValue: T | '') => {
    ref.current?.close(returnValue);
  }, []);

  useEffect(() => {
    const el = ref.current;

    function handler(this: HTMLDialogElement) {
      const returnValue = this.returnValue as T | '';
      modalEmitterRef.current.close(returnValue);
      if (onClose) {
        onClose(returnValue);
      }
    }

    el?.addEventListener('close', handler);

    return () => {
      el?.removeEventListener('close', handler);
    };
  }, [onClose]);

  const props = useMemo(() => ({ ref, show, showModal, close }), [close]);
  return [props, closeEvent] as const;
}

export function useModal<T extends string>(
  onClose?: (returnValue: T | '') => void,
) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [open, toggleOpen] = useToggle();

  const modalEmitterRef = useRef(new ModalEmitter<T>());
  const closeEvent = useCallback(
    () =>
      new Promise<T | ''>((resolve) => {
        if (!open) {
          resolve('');
        }
        modalEmitterRef.current.addEventListener(
          'close',
          (e: Event | CustomEvent<T>) => resolve('detail' in e ? e.detail : ''),
          { once: true },
        );
      }),
    [open],
  );

  const showModal = (): void => {
    toggleOpen(true);
  };

  // Modals are always Modal, hence the name, so we dont need this
  /** @deprecated */
  const show = (): void => {
    toggleOpen(true);
  };

  const close = (returnValue: T | ''): void => {
    toggleOpen(false);
    modalEmitterRef.current.close(returnValue);
    if (onClose) {
      onClose(returnValue);
    }
  };

  return [{ ref, open, show, showModal, close }, closeEvent] as const;
}
