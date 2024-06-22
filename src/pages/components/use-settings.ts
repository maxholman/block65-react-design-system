import { useContext } from 'react';
import { SettingsContext } from './SettingsContext.js';

export function useSettings() {
  const ctx = useContext(SettingsContext);

  if (!ctx) {
    throw new Error('useSettings must be used within SettingsProvider');
  }

  return ctx;
}
