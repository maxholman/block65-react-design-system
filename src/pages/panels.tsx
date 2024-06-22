import type { FC } from 'react';
import {
  Panel,
  Code,
  Grid,
  Heading,
  Inline,
  Paragraph,
} from '../../lib/main.js';

const PanelGrid = () => (
  <Grid cols={{ mobile: 1, all: 2 }}>
    <Panel>
      <Heading>solid</Heading>
      <Paragraph>solid</Paragraph>
    </Panel>
    <Panel>
      <Heading>subtle</Heading>
      <Paragraph>subtle</Paragraph>
    </Panel>
    <Panel>
      <Heading>ghost</Heading>
      <Paragraph>ghost</Paragraph>
    </Panel>
    <Panel>
      <Heading>transparent</Heading>
      <Paragraph>transparent</Paragraph>
    </Panel>
    <Panel>
      <Heading>none</Heading>
      <Paragraph>none</Paragraph>
    </Panel>
  </Grid>
);

export const PanelsPage: FC = () => (
  <>
    <Heading>Panels</Heading>
    <Panel>
      <PanelGrid />
    </Panel>

    <Heading>Nested</Heading>
    <Panel>
      <Grid cols={{ mobile: 1, all: 2 }}>
        <Panel>
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

    <Panel>
      <Panel padding="10">
        Padding override <Code>10</Code>
        <Inline></Inline>
      </Panel>
      <Panel padding="0">
        <Inline>
          Padding override <Code>0</Code>
        </Inline>
      </Panel>
    </Panel>
  </>
);
