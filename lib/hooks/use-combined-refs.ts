import type { ForwardedRef, MutableRefObject, RefCallback } from 'react';

export function useCombinedRefs<T>(
  ...refs: (RefCallback<T> | MutableRefObject<T> | ForwardedRef<T>)[]
): RefCallback<T> {
  return (node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}
