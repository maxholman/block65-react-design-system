import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useToggle } from './hooks/use-toggle.js';

class ModalEmitter<T extends string> extends EventTarget {
  public close(detail: T | 'dismiss') {
    this.dispatchEvent(
      new CustomEvent('close', {
        detail,
      }),
    );
  }
}

export function useDialog<T extends string>(
  onClose?: (returnValue: T | 'dismiss') => void,
) {
  const ref = useRef<HTMLDialogElement | null>(null);

  const modalEmitterRef = useRef(new ModalEmitter<T>());

  // is this a memory leak? it adds a listener on every call
  const closeEvent = useCallback(
    () =>
      new Promise<T | 'dismiss'>((resolve) => {
        if (!ref.current?.open) {
          resolve(
            ref.current?.returnValue
              ? (ref.current?.returnValue as T)
              : 'dismiss',
          );
        }
        modalEmitterRef.current.addEventListener(
          'close',
          (e: Event | CustomEvent<T>) =>
            resolve('detail' in e ? e.detail : 'dismiss'),
          { once: true },
        );
      }),
    [],
  );

  const show = () => {
    ref.current?.showModal();
  };

  const close = useCallback((returnValue: T | 'dismiss') => {
    ref.current?.close(returnValue);
  }, []);

  useEffect(() => {
    const el = ref.current;

    function handler(this: HTMLDialogElement) {
      const returnValue = this.returnValue as T | 'dismiss';
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

  const dialog = useMemo(() => ({ ref, show, close }), [close]);
  return [dialog, closeEvent] as const;
}

export function useModal<T extends string>(
  onClose?: (returnValue: T | 'dismiss') => void,
) {
  const [open, toggleOpen] = useToggle();
  const ref = useRef<HTMLDivElement | null>(null);
  const modalEmitterRef = useRef(new ModalEmitter<T>());

  const show = useCallback(() => {
    toggleOpen(true);

    return new Promise<T | 'dismiss'>((resolve) => {
      modalEmitterRef.current.addEventListener(
        'close',
        (e: Event | CustomEvent<T>) =>
          resolve('detail' in e ? e.detail : 'dismiss'),
        { once: true },
      );
    });
  }, [toggleOpen]);

  const close = useCallback(
    (returnValue: T | 'dismiss'): void => {
      toggleOpen(false);
      modalEmitterRef.current.close(returnValue);
      if (onClose) {
        onClose(returnValue);
      }
    },
    [onClose, toggleOpen],
  );

  const modal = useMemo(
    () => ({ ref, open, show, close }),
    [ref, open, show, close],
  );

  return modal;
}
