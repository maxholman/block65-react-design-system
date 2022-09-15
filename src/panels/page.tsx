import type { FC } from 'react';
import { Block, Inline } from '../../lib/layout.js';
import { Panel } from '../../lib/panel.js';
import { Heading, Text } from '../../lib/typography.js';
import { lorem } from '../lorem.js';

export const PanelsPage: FC = () => (
  <Panel variant="ghost">
    <Block>
      <Panel variant="ghost" elevation="elevationBottom">
        <Heading>Nest 0</Heading>
        <Text>Nest 0</Text>
        <Panel variant="ghost" elevation="elevation1">
          <Heading>Nest 1</Heading>
          <Text>Nest 1</Text>
          <Panel variant="ghost" elevation="elevation2">
            <Heading>Nest 2</Heading>
            <Text>Nest 2</Text>
            <Panel variant="ghost" elevation="elevation3">
              <Heading>Nest 3</Heading>
              <Text>Nest 3</Text>

              <Panel variant="ghost" elevation="elevationTop">
                <Heading>Nest 4</Heading>
                <Text>Nest 4</Text>
              </Panel>
            </Panel>
          </Panel>
        </Panel>
      </Panel>
    </Block>
    <Inline space="huge">
      <Panel variant="standard" elevation="elevation1">
        <Heading level="2">Standard</Heading>
        <Text>{lorem.generateParagraphs(1)}</Text>
      </Panel>
      <Panel variant="ghost" elevation="elevation1">
        <Heading level="2">Ghost</Heading>
        <Text>{lorem.generateParagraphs(1)}</Text>
      </Panel>
      <Panel variant="subtle" elevation="elevation1">
        <Heading level="2">Subtle</Heading>
        <Text>{lorem.generateParagraphs(1)}</Text>
      </Panel>
    </Inline>
  </Panel>
);
