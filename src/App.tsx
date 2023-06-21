/* eslint-disable import/no-extraneous-dependencies */
import { type FC } from 'react';
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedTime,
} from 'react-intl';
import { DesignSystem, interFontThemeClassName } from '../lib/main.js';
import { MainRouter } from './pages/components/MainRouter.js';
import { useSettings } from './pages/components/use-settings.js';

export const App: FC = () => {
  const [{ colorScheme, contrastScheme }] = useSettings();

  return (
    <DesignSystem
      colorScheme={colorScheme}
      contrastScheme={contrastScheme}
      className={[interFontThemeClassName]}
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
