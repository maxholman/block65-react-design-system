import { useEffect, useRef } from 'react';

export function useDialog<T extends string>(
  onClose?: (returnValue?: T) => void,
) {
  const ref = useRef<HTMLDialogElement | null>(null);

  const showModal = (): void => {
    ref.current?.showModal();
  };

  const show = (): void => {
    ref.current?.show();
  };

  const close = (returnValue?: T): void => {
    ref.current?.close(returnValue);
  };

  useEffect(() => {
    const el = ref.current;

    function cb(this: HTMLDialogElement) {
      if (onClose) {
        onClose(this.returnValue as T);
      }
    }

    el?.addEventListener('close', cb);

    return () => {
      el?.removeEventListener('close', cb);
    };
  }, [onClose]);

  return { ref, show, showModal, close };
}
