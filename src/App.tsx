/* eslint-disable import/no-extraneous-dependencies */
import type { FC } from 'react';
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedTime,
} from 'react-intl';
import { DesignSystem, interFontThemeClassName } from '../lib/main.js';
import { MainRouter } from './pages/components/MainRouter.js';
import { useSettings } from './pages/components/use-settings.js';
import {
  darkModeThemeClassName,
  lightModeThemeClassName,
} from './reference-impl/schemes.css.js';

export const App: FC = () => {
  const [settings] = useSettings();

  return (
    <DesignSystem
      className={[
        interFontThemeClassName,
        settings.colorScheme === 'auto' && darkModeThemeClassName,

        settings.colorScheme === 'dark' && darkModeThemeClassName,
        settings.colorScheme === 'light' && lightModeThemeClassName,
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
  );
};
