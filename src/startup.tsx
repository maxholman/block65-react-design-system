import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { App } from './App.js';
import { SettingsProvider } from './SettingsContext.js';

const el = document.getElementById('root');

if (!el) {
  throw new Error('missing el');
}

createRoot(el).render(
  <StrictMode>
    <IntlProvider locale="en">
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </IntlProvider>
  </StrictMode>,
);
