import { useState, useEffect } from 'react';

export function useNavigatorOnline() {
  const [online, setOnline] = useState(
    typeof window !== 'undefined' ? window.navigator.onLine : false,
  );

  useEffect(() => {
    const updateOnline = () =>
      setOnline(
        typeof window !== 'undefined' ? window.navigator.onLine : false,
      );

    window.addEventListener('online', updateOnline);
    window.addEventListener('offline', updateOnline);
    return () => {
      window.removeEventListener('online', updateOnline);
      window.removeEventListener('offline', updateOnline);
    };
  }, []);

  return online;
}
