/// <reference types="vite/client" />
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedTime,
} from 'react-intl';
import { DesignSystem } from '../lib/design-system.js';
import { interFontThemeClassName } from '../lib/fonts/inter.css.js';
import { useColorSchemeEffect } from '../lib/hooks/use-color-scheme-effect.js';
import { buttonDarkThemeClassName } from '../lib/themes/button.css.js';
import { defaultThemeClassName } from '../lib/themes/default.css.js';
import { genericThemeClassName } from '../lib/themes/generic.css.js';
import { MainRouter } from './pages/components/MainRouter.js';

// import '#css';
import 'the-new-css-reset';
import './global.scss';

export const App = () => {
  useColorSchemeEffect();

  return (
    <DesignSystem
      className={[
        interFontThemeClassName,
        defaultThemeClassName,
        genericThemeClassName,
        buttonDarkThemeClassName,
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
