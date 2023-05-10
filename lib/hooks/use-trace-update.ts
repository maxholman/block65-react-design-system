import { useEffect, useRef } from 'react';

export function useTraceUpdate<
  T extends Record<string, unknown>,
  C extends object = { [key in keyof T]: [T[key], T[key]] },
>(props: T, callback?: (changedProps: C) => void): void {
  const prev = useRef<T>(props);
  useEffect(() => {
    const changedProps = Object.entries(props).reduce<C>((ps: C, [k, v]) => {
      if (prev.current[k] !== v) {
        return {
          ...ps,
          [k]: [prev.current[k], v],
        };
      }
      return ps;
    }, {} as unknown as C);

    if (Object.keys(changedProps).length > 0) {
      if (callback) {
        callback(changedProps);
      } else {
        // eslint-disable-next-line no-console
        console.debug('Changed props:', changedProps);
      }
    }

    prev.current = props;
  });
}
