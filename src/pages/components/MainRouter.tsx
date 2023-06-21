import { Route, Router, Routes } from '@block65/mrr';
import type { FC } from 'react';
import { Block, Heading } from '../../../lib/main.js';
import { AvatarsPage } from '../avatars.js';
import { BadgesPage } from '../badges.js';
import { ButtonsPage } from '../buttons.js';
import { CalloutPage } from '../callout.js';
import { CorePage } from '../core.js';
import { FormsPage } from '../forms.js';
import { GridPage } from '../grid.js';
import { IconsPage } from '../icons.js';
import { LayoutPage } from '../layout.js';
import { ListPage } from '../list.js';
import { LoadersPage } from '../loaders.js';
import { MediaQueryPage } from '../media-query.js';
import { DropdownMenuIframe } from '../menu-iframe.js';
import { DropdownMenuPage } from '../menu.js';
import { ModalPage } from '../modal.js';
import { PanelsPage } from '../panels.js';
import { PatternPage } from '../patterns.js';
import { SwatchesPage } from '../swatches.js';
import { TypographyPage } from '../typography.js';
import { NavigationPanel } from './NavigationPanel.js';
import { SettingsPanel } from './SettingsPanel.js';

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
                <Route path="/swatches">
                  <SwatchesPage />
                </Route>
                <Route path="/avatars">
                  <AvatarsPage />
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
