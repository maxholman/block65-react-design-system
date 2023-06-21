import { useCallback, useEffect, useRef } from 'react';

export function useThrottledCallback<A>(
  stableFn: (...args: A[]) => void,
  timeoutMs: number,
  { leading = true }: { leading?: boolean } = {},
): (...args: A[]) => void {
  const timeoutId = useRef<number>();
  const wasCalled = useRef<boolean>(false);

  const argsRef = useRef<A[]>([]);

  useEffect(() => () => window.clearTimeout(timeoutId.current), []);

  return useCallback(
    (...args: A[]) => {
      argsRef.current = args;

      if (leading && !wasCalled.current) {
        wasCalled.current = true;
        stableFn(...argsRef.current);
      }

      if (!timeoutId.current) {
        timeoutId.current = window.setTimeout(() => {
          timeoutId.current = undefined;
          stableFn(...argsRef.current);
        }, timeoutMs);
      }
    },
    [leading, stableFn, timeoutMs],
  );
}
