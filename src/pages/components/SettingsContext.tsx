import { createContext, type FC, type PropsWithChildren } from 'react';
import { useLocalStorageState } from '../../../lib/hooks/use-localstorage-state.js';
import type { ContrastScheme, ColorScheme } from '../../reference-impl/main.js';

export const SettingsContext = createContext<{
  colorScheme: ColorScheme;
  contrastScheme: ContrastScheme;
  setColorScheme: (colorScheme: ColorScheme) => void;
  setContrastScheme: (contrastScheme: ContrastScheme) => void;
} | null>(null);

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorageState<ColorScheme>(
    'rds:color-scheme',
    'auto',
  );

  const [contrastScheme, setContrastScheme] =
    useLocalStorageState<ContrastScheme>('rds:contrast-scheme', 'auto');

  return (
    <SettingsContext.Provider
      value={{
        colorScheme,
        contrastScheme,
        setColorScheme,
        setContrastScheme,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
