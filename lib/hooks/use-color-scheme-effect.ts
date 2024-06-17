import { useState, useLayoutEffect } from 'react';

export function useColorSchemeEffect() {
  const [prefersDark, setPrefersDark] = useState<boolean | null>(null);

  useLayoutEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    const meta =
      document.querySelector('meta[name=color-scheme]') ||
      document.createElement('meta');

    meta.setAttribute('name', 'color-scheme');
    meta.setAttribute('content', mql.matches ? 'dark' : 'light');

    // probably new
    if (!meta.parentElement) {
      document.head.appendChild(meta);
    }

    const listener = (e: { matches: boolean }) => {
      setPrefersDark(e.matches);
      meta.setAttribute('content', e.matches ? 'dark' : 'light');
      document.documentElement.setAttribute(
        'data-color-scheme',
        e.matches ? 'dark' : 'light',
      );
    };

    listener(mql);

    mql.addEventListener('change', listener);

    return () => {
      mql.removeEventListener('change', listener);
    };
  }, [prefersDark]);

  return [prefersDark] as const;
}
