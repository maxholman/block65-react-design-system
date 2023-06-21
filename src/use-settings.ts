import { useContext } from 'react';
import { SettingsContext } from './SettingsContext.js';

export function useSettings() {
  const ctx = useContext(SettingsContext);

  if (!ctx) {
    throw new Error('useSettings must be used within SettingsProvider');
  }

  const { colorScheme, contrastScheme, setColorScheme, setContrastScheme } =
    ctx;

  return [
    {
      colorScheme,
      contrastScheme,
    },
    {
      setColorScheme,
      setContrastScheme,
    },
  ] as const;
}
