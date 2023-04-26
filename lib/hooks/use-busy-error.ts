import { useCallback, useState } from 'react';

type State = { busy: boolean; error: Error | null };

type AsyncFunction<T> = (...args: unknown[]) => Promise<T>;

export function ignoreAbortError(err?: unknown): void {
  if (err instanceof DOMException && err.code === DOMException.ABORT_ERR) {
    return;
  }
  throw err;
}

export function useBusyError(initialBusy = false) {
  const [state, setState] = useState<State>({ busy: initialBusy, error: null });

  const set = useCallback((errorOrBusy: boolean | Error) => {
    if (errorOrBusy instanceof Error) {
      setState({ busy: false, error: errorOrBusy });
    } else {
      setState({ busy: errorOrBusy, error: null });
    }
  }, []);

  return [state, set] as const;
}

export function useWithBusyError(initialBusy = false) {
  const [{ busy, error }, set] = useBusyError(initialBusy);

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

  return [{ busy, error }, exec, set] as const;
}
