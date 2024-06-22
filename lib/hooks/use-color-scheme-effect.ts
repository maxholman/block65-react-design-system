import { useState, useLayoutEffect } from 'react';

export function useColorSchemeEffect(
  preference?: 'dark' | 'light' | 'auto' | undefined | null,
) {
  const [prefersDark, setPrefersDark] = useState<boolean | null>(
    // eslint-disable-next-line no-nested-ternary
    preference === 'dark' ? true : preference === 'light' ? false : null,
  );

  useLayoutEffect(() => {
    const meta =
      document.querySelector('meta[name=color-scheme]') ||
      document.createElement('meta');
    meta.setAttribute('name', 'color-scheme');

    const prefersDarkMql =
      !preference || preference === 'auto'
        ? window.matchMedia('(prefers-color-scheme: dark)')
        : {
            matches: preference === 'dark',
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            addEventListener: (_eventName: 'change', _: unknown) => {},
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            removeEventListener: (_eventName: 'change', _: unknown) => {},
          };

    meta.setAttribute('content', prefersDarkMql.matches ? 'dark' : 'light');

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

    listener(prefersDarkMql);

    prefersDarkMql.addEventListener('change', listener);

    return () => {
      prefersDarkMql.removeEventListener('change', listener);
    };
  }, [preference, prefersDark]);

  return [prefersDark] as const;
}
