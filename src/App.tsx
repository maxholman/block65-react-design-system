/// <reference types="vite/client" />
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedTime,
  IntlProvider,
} from 'react-intl';
import { DesignSystem } from '../lib/design-system.js';
import { interFontThemeClassName } from '../lib/fonts/inter.css.js';
import { useColorSchemeEffect } from '../lib/hooks/use-color-scheme-effect.js';
import { MainRouter } from './MainRouter.js';
import { SettingsProvider } from './pages/components/SettingsContext.js';
import { useSettings } from './pages/components/use-settings.js';

import './global.scss';

const AppInner = () => {
  const [{ colorScheme }] = useSettings();

  const [prefersDark] = useColorSchemeEffect(colorScheme);

  console.log({ colorScheme, prefersDark });

  return (
    <DesignSystem
      className={interFontThemeClassName}
      stringLikeComponents={[
        FormattedMessage,
        FormattedNumber,
        FormattedTime,
        FormattedDate,
      ]}
      space="10"
      flexDirection="column"
      style={{
        flexGrow: 1,
        minHeight: '100vh',
      }}
    >
      <MainRouter />
    </DesignSystem>
  );
};

export const App = () => (
  <IntlProvider locale="en">
    <SettingsProvider>
      <AppInner />
    </SettingsProvider>
  </IntlProvider>
);
