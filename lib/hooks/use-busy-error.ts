import { useCallback, useMemo, useState } from 'react';

type State = [busy: boolean, error: Error | null];

type AsyncFunction<T> = (...args: unknown[]) => Promise<T>;

export function ignoreAbortError(err?: unknown): void {
  if (err instanceof DOMException && err.code === DOMException.ABORT_ERR) {
    return;
  }
  throw err;
}

export function useBusyError(initialBusy = false) {
  const [state, setState] = useState<State>([initialBusy, null]);

  const set = useCallback((errorOrBusy: boolean | Error) => {
    if (errorOrBusy instanceof Error) {
      setState([false, errorOrBusy]);
    } else {
      setState([errorOrBusy, null]);
    }
  }, []);

  const [busy, error] = state;
  return useMemo(() => ({ busy, error, set }), [busy, error, set]);
}

export function useWithBusyError(initialBusy = true) {
  const { busy, error, set } = useBusyError(initialBusy);

  const exec = useCallback(
    <T>(fn: AsyncFunction<T | void>) => {
      set(true);
      const promise = fn()
        .then((r) => {
          set(false);
          return r;
        })
        .catch(ignoreAbortError)
        .catch(set);

      return { promise };
    },
    [set],
  );

  return { busy, error, set, exec };
}
