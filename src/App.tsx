/* eslint-disable import/no-extraneous-dependencies */
import { Link, Route, Router, Routes } from '@block65/mrr';
import { FC, useState } from 'react';
import {
  Block,
  ColorScheme,
  ContrastScheme,
  DesignSystem,
  FormInputRadio,
  FormInputRadioGroup,
  Grid,
  Heading,
  Inline,
  Panel,
  Text,
  TextLink,
} from '../lib/main.js';
import { BadgesPage } from './pages/badges.js';
import { ButtonsPage } from './pages/buttons.js';
import { CalloutPage } from './pages/callout.js';
import { CorePage } from './pages/core.js';
import { FormsPage } from './pages/forms.js';
import { GridPage } from './pages/grid.js';
import { ListPage } from './pages/list.js';
import { LoadersPage } from './pages/loaders.js';
import { PanelsPage } from './pages/panels.js';
import { TypographyPage } from './pages/typography.js';

export const App: FC = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('auto');
  const [contrastScheme, setContrastScheme] = useState<ContrastScheme>('auto');

  return (
    <DesignSystem
      colorScheme={colorScheme}
      contrastScheme={contrastScheme}
      // className={exampleColorThemeClass}
    >
      <Router>
        <Block style={{ minHeight: '100vh' }}>
          <Block padding="huge">
            <Grid>
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
                <Route>
                  <Heading>404</Heading>
                </Route>
              </Routes>
            </Block>
          </Block>
        </Block>
      </Router>
    </DesignSystem>
  );
};
