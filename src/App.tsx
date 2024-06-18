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
import { genericThemeClassName } from '../lib/themes/generic.css.js';
import { MainRouter } from './MainRouter.js';
import { SettingsProvider } from './pages/components/SettingsContext.js';

import './global.scss';

export const App = () => {
  useColorSchemeEffect();

  return (
    <IntlProvider locale="en">
      <SettingsProvider>
        <DesignSystem
          className={[
            interFontThemeClassName,
            genericThemeClassName,
            // darkModeColorThemeClassName,
            // buttonDarkThemeClassName,
            // calloutDarkThemeClassName,
          ]}
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
      </SettingsProvider>
    </IntlProvider>
  );
};
