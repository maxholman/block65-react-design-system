import type { FC } from 'react';
import { Block, Heading, Panel } from '../../lib/main.js';
import { BasicPopover } from '../patterns/basic-popover.js';
import { LoginPattern } from '../patterns/login.js';
import { SelectorPattern } from '../patterns/panel-selector.js';
import { PanelTogglerPattern } from '../patterns/panel-toggler.js';

export const PatternPage: FC = () => (
  <>
    <Block>
      <Panel hidden>
        <Heading>Login</Heading>
        <>
          <LoginPattern />
        </>
      </Panel>

      <Panel>
        <Heading>Selector</Heading>
        <>
          <SelectorPattern />
        </>
      </Panel>

      <Panel>
        <Heading>PanelTogglerPattern</Heading>
        <>
          <PanelTogglerPattern />
        </>
      </Panel>

      <Heading>BasicPopover</Heading>
      <>
        <BasicPopover />
      </>
    </Block>
  </>
);
