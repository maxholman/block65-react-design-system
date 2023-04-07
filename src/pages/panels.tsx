import type { FC } from 'react';
import { Code, Grid, Heading, Inline, Panel, Text } from '../../lib/main.js';

const PanelGrid = () => (
  <Grid cols={{ mobile: 1, all: 2 }}>
    <Panel variant="standard">
      <Heading>standard</Heading>
      <Text>standard</Text>
    </Panel>
    <Panel variant="ghost">
      <Heading>ghost</Heading>
      <Text>ghost</Text>
    </Panel>
    <Panel variant="subtle">
      <Heading>subtle</Heading>
      <Text>subtle</Text>
    </Panel>
    <Panel variant="transparent">
      <Heading>transparent</Heading>
      <Text>transparent</Text>
    </Panel>
  </Grid>
);

export const PanelsPage: FC = () => (
  <Panel variant="ghost">
    <Grid cols={{ mobile: 1, all: 2 }}>
      <Panel variant="subtle">
        <PanelGrid />
      </Panel>
      <Panel>
        <PanelGrid />
      </Panel>
    </Grid>
    <Panel variant="subtle" padding="5">
      <Inline>
        Padding override <Code>huge</Code>
      </Inline>
    </Panel>
    <Panel variant="subtle" padding="0">
      <Inline>
        Padding override <Code>none</Code>
      </Inline>
    </Panel>
  </Panel>
);
