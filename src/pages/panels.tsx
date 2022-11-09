import type { FC } from 'react';
import { Panel } from '../../lib/panel.js';
import { Heading, Text } from '../../lib/typography.js';

export const PanelsPage: FC = () => (
  <Panel variant="ghost">
    <Text>Ground Floor</Text>
    <Panel variant="standard">
      <Heading>Nest 0 (Bottom)</Heading>
      <Text>Nest 0</Text>
      <Panel variant="ghost">
        <Heading>Nest 1</Heading>
        <Text>Nest 1</Text>
        <Panel variant="subtle">
          <Heading>Nest 2</Heading>
          <Text>Nest 2</Text>
          <Panel variant="standard">
            <Heading>Nest 3</Heading>
            <Text>Nest 3</Text>
            <Panel variant="ghost">
              <Heading>Nest 4</Heading>
              <Panel variant="ghost">
                <Heading>Nest 5</Heading>
                <Text>Nest 5</Text>
              </Panel>
            </Panel>
          </Panel>
        </Panel>
      </Panel>
    </Panel>
  </Panel>
);
