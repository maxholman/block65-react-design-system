import type { FC } from 'react';
import { Block, Heading, Panel } from '../../lib/main.js';
import { LoginPattern } from '../patterns/login.js';
import { SelectorPattern } from '../patterns/panel-selector.js';
import { PanelTogglerPattern } from '../patterns/panel-toggler.js';
import { WithColorSchemes } from './components/WithColorSchemes.js';

export const PatternPage: FC = () => (
  <>
    <Block>
      <Panel variant="ghost" hidden>
        <Heading>Login</Heading>
        <WithColorSchemes>
          <LoginPattern />
        </WithColorSchemes>
      </Panel>

      <Panel variant="ghost">
        <Heading>Selector</Heading>
        <WithColorSchemes>
          <SelectorPattern />
        </WithColorSchemes>
      </Panel>

      <Panel variant="ghost">
        <Heading>PanelTogglerPattern</Heading>
        <WithColorSchemes>
          <PanelTogglerPattern />
        </WithColorSchemes>
      </Panel>
    </Block>
  </>
);
