import type { FC } from 'react';
import { Code, Grid, Heading, Inline, Text } from '../../lib/main.js';
import { Panel } from '../reference-impl/main.js';

const PanelGrid = () => (
  <Grid cols={{ mobile: 1, all: 2 }}>
    <Panel variant="solid">
      <Heading>solid</Heading>
      <Text>solid</Text>
    </Panel>
    <Panel variant="subtle">
      <Heading>subtle</Heading>
      <Text>subtle</Text>
    </Panel>
    <Panel variant="ghost">
      <Heading>ghost</Heading>
      <Text>ghost</Text>
    </Panel>
    <Panel variant="transparent">
      <Heading>transparent</Heading>
      <Text>transparent</Text>
    </Panel>
    <Panel>
      <Heading>none</Heading>
      <Text>none</Text>
    </Panel>
  </Grid>
);

export const PanelsPage: FC = () => (
  <>
    <Heading>Panels</Heading>
    <Panel variant="ghost">
      <PanelGrid />
    </Panel>

    <Heading>Nested</Heading>
    <Panel>
      <Grid cols={{ mobile: 1, all: 2 }}>
        <Panel variant="subtle">
          <Heading>Nested</Heading>
          <PanelGrid />
        </Panel>
        <Panel>
          <Heading>Nested</Heading>
          <PanelGrid />
        </Panel>
      </Grid>
    </Panel>

    <Heading>Overrides</Heading>

    <Panel variant="ghost">
      <Panel variant="subtle" padding="10">
        Padding override <Code>10</Code>
        <Inline></Inline>
      </Panel>
      <Panel variant="subtle" padding="0">
        <Inline>
          Padding override <Code>0</Code>
        </Inline>
      </Panel>
    </Panel>
  </>
);
