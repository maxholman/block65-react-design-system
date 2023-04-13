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
  DesignSystem,
  FormInputRadio,
  FormInputRadioGroup,
  Grid,
  Heading,
  Inline,
  interFontThemeClassName,
  Panel,
  Text,
  TextLink,
  type ColorScheme,
  type ContrastScheme,
} from '../lib/main.js';
import { BadgesPage } from './pages/badges.js';
import { ButtonsPage } from './pages/buttons.js';
import { CalloutPage } from './pages/callout.js';
import { CorePage } from './pages/core.js';
import { DropdownMenuIframe } from './pages/dropdown-menu-iframe.js';
import { DropdownMenuPage } from './pages/dropdown-menu.js';
import { FormsPage } from './pages/forms.js';
import { GridPage } from './pages/grid.js';
import { IconsPage } from './pages/icons.js';
import { LayoutPage } from './pages/layout.js';
import { ListPage } from './pages/list.js';
import { LoadersPage } from './pages/loaders.js';
import { MediaQueryPage } from './pages/media-query.js';
import { ModalPage } from './pages/modal.js';
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
          <Routes>
            <Route path="/dropdown-menu-iframe">
              <DropdownMenuIframe />
            </Route>
            <Route>
              <Block style={{ minHeight: '100vh' }} flexGrow>
                <Block padding="5" flexGrow>
                  <Grid
                    cols={{
                      all: 2,
                      mobile: 1,
                    }}
                  >
                    <FormInputRadioGroup name="color-scheme">
                      <Heading level="4" textOverflow="ellipsis">
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
                  </Grid>

                  <Panel variant="ghost">
                    <Inline justifySelf="center" space="5">
                      <Link href="/">
                        <TextLink>Home</TextLink>
                      </Link>
                      <Link href="/core">
                        <TextLink>Core</TextLink>
                      </Link>
                      <Link href="/layout">
                        <TextLink>Layout</TextLink>
                      </Link>
                      <Link href="/panels">
                        <TextLink>Panels</TextLink>
                      </Link>
                      <Link href="/grid">
                        <TextLink>Grid</TextLink>
                      </Link>
                      <Link href="/forms">
                        <TextLink>Forms</TextLink>
                      </Link>
                      <Link href="/typography">
                        <TextLink>Typography</TextLink>
                      </Link>
                      <Link href="/buttons">
                        <TextLink>Buttons</TextLink>
                      </Link>
                      <Link href="/list">
                        <TextLink>List</TextLink>
                      </Link>
                      <Link href="/badges">
                        <TextLink>Badges</TextLink>
                      </Link>
                      <Link href="/loaders">
                        <TextLink>Loaders</TextLink>
                      </Link>
                      <Link href="/callout">
                        <TextLink>Callout</TextLink>
                      </Link>
                      <Link href="/media-query">
                        <TextLink>Media Query</TextLink>
                      </Link>
                      <Link href="/modals">
                        <TextLink>Modals</TextLink>
                      </Link>
                      <Link href="/icons">
                        <TextLink>Icons</TextLink>
                      </Link>
                      <Link href="/dropdown-menu">
                        <TextLink>Dropdowns</TextLink>
                      </Link>
                    </Inline>
                  </Panel>
                  <Block flexGrow>
                    <Routes>
                      <Route path="/">
                        <Panel variant="ghost">
                          <Heading>Enjoy!</Heading>
                          <Text>
                            Choose something amazing from the nav above
                          </Text>
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
                      <Route path="/modals">
                        <ModalPage />
                      </Route>
                      <Route path="/icons">
                        <IconsPage />
                      </Route>
                      <Route path="/dropdown-menu">
                        <DropdownMenuPage />
                      </Route>
                      <Route>
                        <Heading>404</Heading>
                      </Route>
                    </Routes>
                  </Block>
                </Block>
              </Block>
            </Route>
          </Routes>
        </Router>
      </DesignSystem>
    </IntlProvider>
  );
};
