import { Route, Router, Routes } from '@block65/mrr';
import type { FC } from 'react';
import { Block, Heading } from '../lib/main.js';
import { AvatarsPage } from './pages/avatars.js';
import { BadgesPage } from './pages/badges.js';
import { ButtonsPage } from './pages/buttons.js';
import { CalloutPage } from './pages/callout.js';
import { NavigationPanel } from './pages/components/NavigationPanel.js';
import { SettingsPanel } from './pages/components/SettingsPanel.js';
import { CorePage } from './pages/core.js';
import { FormsPage } from './pages/forms.js';
import { GridPage } from './pages/grid.js';
import { HooksPage } from './pages/hooks.js';
import { IconsPage } from './pages/icons.js';
import { LayoutPage } from './pages/layout.js';
import { ListPage } from './pages/list.js';
import { LoadersPage } from './pages/loaders.js';
import { MediaQueryPage } from './pages/media-query.js';
import { DropdownMenuIframe } from './pages/menu-iframe.js';
import { DropdownMenuPage } from './pages/menu.js';
import { ModalPage } from './pages/modal.js';
import { PanelsPage } from './pages/panels.js';
import { PatternPage } from './pages/patterns.js';
import { TypographyPage } from './pages/typography.js';

export const MainRouter: FC = () => (
  <Router>
    <Routes>
      <Route path="/dropdown-menu-iframe">
        <DropdownMenuIframe />
      </Route>
      <Route>
        <Block>
          <Block padding="5" flexGrow>
            <SettingsPanel />
            <NavigationPanel />

            <Block flexGrow>
              <Routes>
                <Route path="/">
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
                <Route path="/patterns">
                  <PatternPage />
                </Route>
                <Route path="/avatars">
                  <AvatarsPage />
                </Route>
                <Route path="/hooks">
                  <HooksPage />
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
);
