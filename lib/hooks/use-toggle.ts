import { useCallback, useState } from 'react';

export function useToggle(initialState = false) {
  const [value, setValue] = useState(initialState);
  const toggle = useCallback((forceValue?: boolean) => {
    if (typeof forceValue !== 'undefined') {
      setValue(forceValue);
    } else {
      setValue((v) => !v);
    }
  }, []);
  return [value, toggle] as const;
}
