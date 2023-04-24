import { useCallback, useEffect, useRef } from 'react';

export function useAbortController(): () => AbortSignal {
  const abortControllerRef = useRef<AbortController | null>(null);
  const getAbortController = useCallback(() => {
    if (!abortControllerRef.current) {
      abortControllerRef.current = new AbortController();
    }
    return abortControllerRef.current;
  }, []);

  useEffect(
    () => () => {
      getAbortController().abort();
      abortControllerRef.current = null;
    },
    [getAbortController],
  );

  return useCallback(() => getAbortController().signal, [getAbortController]);
}
