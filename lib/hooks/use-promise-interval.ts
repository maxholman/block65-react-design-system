import { useCallback, useEffect, useRef } from 'react';

export function usePromiseInterval(
  fn: () => Promise<number | void | null> | number | void | null,
  defaultInterval: number,
) {
  const t = useRef<number>();

  const startTimer = useCallback(
    (newInterval: number | void | null = null) => {
      const interval = newInterval || defaultInterval;

      // logger.debug('starting timer with interval %d', interval);

      t.current = window.setTimeout(async () => {
        // logger.debug('timer fired %d', t.current);
        await Promise.resolve(fn()).then(startTimer).catch(startTimer);
      }, interval);

      // logger.debug('timer started %d', t.current);

      return () => clearTimeout(t.current);
    },
    [fn, defaultInterval],
  );

  useEffect(() => startTimer(), [startTimer]);
}
