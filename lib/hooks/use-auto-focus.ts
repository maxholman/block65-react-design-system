import { useCallback, useEffect, useState } from 'react';
import { useDebouncedCallback } from './use-debounced.js';

export function useAutoFocus(
  autoFocus: boolean | 'force' | undefined,
  mediaQuery = '(min-width: 50em)',
) {
  const win = typeof window !== 'undefined' ? window : undefined;

  const shouldAutoFocus = useCallback(
    () =>
      // if its forced, then we definitely should
      autoFocus === 'force' ||
      // if its just true, then we maybe should
      (autoFocus === true
        ? win?.matchMedia(mediaQuery).matches === true
        : false),
    [autoFocus, mediaQuery, win],
  );

  const [willAutoFocus, setWillAutoFocus] =
    useState<boolean>(shouldAutoFocus());

  const onResize = useDebouncedCallback(
    useCallback(() => setWillAutoFocus(shouldAutoFocus()), [shouldAutoFocus]),
    100,
  );

  useEffect(() => {
    // dont even bother adding it if we didnt ask for autoFocus
    if (autoFocus) {
      win?.addEventListener('resize', onResize);
    }
    return () => win?.removeEventListener('resize', onResize);
  }, [autoFocus, onResize, win]);

  return willAutoFocus;
}
