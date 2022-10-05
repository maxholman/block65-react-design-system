import { Link, Route, Router, Routes } from '@block65/mrr';
import type { FC } from 'react';
import { Block, Inline } from '../lib/layout.js';
import { TextLink } from '../lib/links.js';
import { Panel } from '../lib/panel.js';
import { Theme } from '../lib/theme.js';
import { Heading, Text } from '../lib/typography.js';
import { ButtonsPage } from './buttons/page.js';
import { CorePage } from './core/page.js';
import { FormsPage } from './forms/page.js';
import { PanelsPage } from './panels/page.js';
import { TypographyPage } from './typography/page.js';

export const App: FC = () => (
  <Theme>
    <Router>
      <Block>
        <Panel space="huge" variant="ghost" elevation="bottom">
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
            <Link dest="/forms">
              <TextLink>Forms</TextLink>
            </Link>
            <Link dest="/typography">
              <TextLink>Typography</TextLink>
            </Link>
            <Link dest="/buttons">
              <TextLink>Buttons</TextLink>
            </Link>
          </Inline>
        </Panel>
        <Block>
          <Routes>
            <Route path="/">
              <Panel space="huge" variant="ghost" elevation="bottom">
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
            <Route path="/forms">
              <FormsPage />
            </Route>
            <Route path="/typography">
              <TypographyPage />
            </Route>
            <Route path="/buttons">
              <ButtonsPage />
            </Route>
            <Route>
              <Heading>404</Heading>
            </Route>
          </Routes>
        </Block>
      </Block>
    </Router>
  </Theme>
);
