import { createContext, type FC, type PropsWithChildren } from 'react';
import { useLocalStorageState } from '../../../lib/hooks/use-localstorage-state.js';

type ColorTheme = 'high-contrast' | 'low-contrast' | 'auto';
type ColorScheme = 'light' | 'dark' | 'auto';

export const SettingsContext = createContext<{
  colorScheme: ColorScheme;
  colorTheme: ColorTheme;
  setColorScheme: (colorScheme: ColorScheme) => void;
  setColorTheme: (colorTheme: ColorTheme) => void;
} | null>(null);

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorageState<ColorScheme>(
    'rds:color-scheme',
    'auto',
  );

  const [ColorTheme, setColorTheme] = useLocalStorageState<ColorTheme>(
    'rds:color-theme',
    'auto',
  );

  return (
    <SettingsContext.Provider
      value={{
        colorScheme,
        colorTheme: ColorTheme,
        setColorScheme,
        setColorTheme,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
