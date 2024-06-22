import { useEffect, useRef } from 'react';
import type { Falsy } from '../types.js';

export function useCustomValidity<
  T extends HTMLInputElement | HTMLSelectElement,
>(customValidity?: string | Falsy) {
  const ref = useRef<T>(null);

  useEffect(() => {
    ref.current?.setCustomValidity(customValidity || '');
  }, [customValidity]);

  return ref;
}
