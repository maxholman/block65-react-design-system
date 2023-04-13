import { useCallback, useEffect, useRef, useState } from 'react';
import type { Primitive } from 'type-fest';

export function useDebouncedValue<T extends Primitive>(
  value: T,
  timeoutMs: number,
): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedValue(value), timeoutMs);
    return () => clearTimeout(t);
  }, [value, timeoutMs]);

  return debouncedValue;
}

export function useDebouncedCallback<A extends unknown[]>(
  fn: (...args: A) => void,
  timeoutMs: number,
): (...args: A) => void {
  const timeoutId = useRef<number>();
  return useCallback(
    (...args) => {
      clearTimeout(timeoutId.current);
      timeoutId.current = window.setTimeout(() => fn(...args), timeoutMs);
    },
    [fn, timeoutMs],
  );
}
