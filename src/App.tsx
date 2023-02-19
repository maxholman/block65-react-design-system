/* eslint-disable import/no-extraneous-dependencies */
import { Link, Route, Router, Routes } from '@block65/mrr';
import type { FC } from 'react';
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedTime,
  IntlProvider,
} from 'react-intl';
import { useLocalStorageState } from '../gist_modules/maxholman/react-hooks/use-localstorage-state.js';
import {
  Block,
  type ColorScheme,
  type ContrastScheme,
  DesignSystem,
  FormInputRadio,
  FormInputRadioGroup,
  Grid,
  Heading,
  Inline,
  Panel,
  Text,
  TextLink,
  interFontThemeClassName,
} from '../lib/main.js';
import { BadgesPage } from './pages/badges.js';
import { ButtonsPage } from './pages/buttons.js';
import { CalloutPage } from './pages/callout.js';
import { CorePage } from './pages/core.js';
import { FormsPage } from './pages/forms.js';
import { GridPage } from './pages/grid.js';
import { LayoutPage } from './pages/layout.js';
import { ListPage } from './pages/list.js';
import { LoadersPage } from './pages/loaders.js';
import { MediaQueryPage } from './pages/media-query.js';
import { PanelsPage } from './pages/panels.js';
import { TypographyPage } from './pages/typography.js';

export const App: FC = () => {
  const [colorScheme, setColorScheme] = useLocalStorageState<ColorScheme>(
    'color-scheme',
    'auto',
  );
  const [contrastScheme, setContrastScheme] =
    useLocalStorageState<ContrastScheme>('contrast-scheme', 'auto');

  return (
    <IntlProvider locale="en">
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
      >
        <Router>
          <Block style={{ minHeight: '100vh' }}>
            <Block padding="huge">
              <Grid
                cols={{
                  all: 2,
                  mobile: 1,
                }}
              >
                <Inline>
                  <FormInputRadioGroup name="color-scheme">
                    <Heading level="3" textOverflow="ellipsis">
                      Color Scheme
                    </Heading>
                    <FormInputRadio
                      // inline
                      label="auto"
                      checked={!colorScheme || colorScheme === 'auto'}
                      onChange={() => setColorScheme('auto')}
                    />
                    <FormInputRadio
                      // inline
                      label="force light mode"
                      checked={colorScheme === 'light'}
                      onChange={() => setColorScheme('light')}
                    />
                    <FormInputRadio
                      // inline
                      label="force dark mode"
                      checked={colorScheme === 'dark'}
                      onChange={() => setColorScheme('dark')}
                    />
                  </FormInputRadioGroup>
                </Inline>
                <Inline>
                  <FormInputRadioGroup name="contrast-scheme">
                    <Heading level="3" textOverflow="ellipsis">
                      Contrast Scheme
                    </Heading>
                    <FormInputRadio
                      // inline
                      label="auto"
                      checked={!contrastScheme || contrastScheme === 'auto'}
                      onChange={() => setContrastScheme('auto')}
                    />
                    <FormInputRadio
                      // inline
                      label="force less contrast"
                      checked={contrastScheme === 'less'}
                      onChange={() => setContrastScheme('less')}
                    />
                    <FormInputRadio
                      // inline
                      label="force more contrast"
                      checked={contrastScheme === 'more'}
                      onChange={() => setContrastScheme('more')}
                    />
                  </FormInputRadioGroup>
                </Inline>
              </Grid>

              <Panel space="huge" variant="ghost">
                <Inline align="center">
                  <Link dest="/">
                    <TextLink>Home</TextLink>
                  </Link>
                  <Link dest="/core">
                    <TextLink>Core</TextLink>
                  </Link>
                  <Link dest="/layout">
                    <TextLink>Layout</TextLink>
                  </Link>
                  <Link dest="/panels">
                    <TextLink>Panels</TextLink>
                  </Link>
                  <Link dest="/grid">
                    <TextLink>Grid</TextLink>
                  </Link>
                  <Link dest="/forms">
                    <TextLink>Forms</TextLink>
                  </Link>
                  <Link dest="/typography">
                    <TextLink>Typography</TextLink>
                  </Link>
                  <Link dest="/buttons">
                    <TextLink>Buttons</TextLink>
                  </Link>
                  <Link dest="/list">
                    <TextLink>List</TextLink>
                  </Link>
                  <Link dest="/badges">
                    <TextLink>Badges</TextLink>
                  </Link>
                  <Link dest="/loaders">
                    <TextLink>Loaders</TextLink>
                  </Link>
                  <Link dest="/callout">
                    <TextLink>Callout</TextLink>
                  </Link>
                  <Link dest="/media-query">
                    <TextLink>Media Query</TextLink>
                  </Link>
                </Inline>
              </Panel>
              <Block>
                <Routes>
                  <Route path="/">
                    <Panel space="huge" variant="ghost">
                      <Heading>Enjoy!</Heading>
                      <Text>Choose something amazing from the nav above</Text>
                    </Panel>
                  </Route>
                  <Route path="/core">
                    <CorePage />
                  </Route>
                  <Route path="/layout">
                    <LayoutPage />
                  </Route>
                  <Route path="/panels">
                    <PanelsPage />
                  </Route>
                  <Route path="/grid">
                    <GridPage />
                  </Route>
                  <Route path="/forms">
                    <FormsPage />
                  </Route>
                  <Route path="/typography">
                    <TypographyPage />
                  </Route>
                  <Route path="/buttons">
                    <ButtonsPage />
                  </Route>
                  <Route path="/list">
                    <ListPage />
                  </Route>
                  <Route path="/badges">
                    <BadgesPage />
                  </Route>
                  <Route path="/loaders">
                    <LoadersPage />
                  </Route>
                  <Route path="/callout">
                    <CalloutPage />
                  </Route>
                  <Route path="/media-query">
                    <MediaQueryPage />
                  </Route>
                  <Route>
                    <Heading>404</Heading>
                  </Route>
                </Routes>
              </Block>
            </Block>
          </Block>
        </Router>
      </DesignSystem>
    </IntlProvider>
  );
};
