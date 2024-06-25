/// <reference types="vite/client" />
import type { FC } from 'react';
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedTime,
  IntlProvider,
} from 'react-intl';
import { useColorSchemeEffect } from '../lib/hooks/main.js';
import { DesignSystem } from '../lib/main.js';
import { MainRouter } from './MainRouter.js';
import { SettingsProvider } from './pages/components/SettingsContext.js';
import { useSettings } from './pages/components/use-settings.js';

import './global.scss'; // SCSS version, includes inter vars
// import './theme.scss'; // SCSS version

import './defaults.css.js'; // Vanilla extract version
import './inter.css.js'; // Vanilla extract version

const AppInner = () => {
  const { colorScheme } = useSettings();
  useColorSchemeEffect(colorScheme);

  return (
    <DesignSystem
      stringLikeComponents={[
        FormattedMessage,
        FormattedNumber,
        FormattedTime,
        FormattedDate,
      ]}
      space="10"
      flexDirection="column"
      flexGrow
    >
      <MainRouter />
    </DesignSystem>
  );
};

export const App: FC = () => (
  <IntlProvider locale="en">
    <SettingsProvider>
      <AppInner />
    </SettingsProvider>
  </IntlProvider>
);
