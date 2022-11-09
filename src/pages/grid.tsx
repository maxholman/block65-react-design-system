import type { FC } from 'react';
import { Grid, Heading, Panel, Text } from '../../lib/main.js';
import { lorem } from '../lorem.js';

export const GridPage: FC = () => (
  <Panel variant="ghost">
    <Grid space="huge">
      <Panel variant="standard">
        <Heading level="2">Standard</Heading>
        <Text>{lorem.generateSentences(3)}</Text>
      </Panel>
      <Panel variant="ghost">
        <Heading level="2">Ghost</Heading>
        <Text>{lorem.generateSentences(3)}</Text>
      </Panel>
      <Panel variant="subtle">
        <Heading level="2">Subtle</Heading>
        <Text>{lorem.generateSentences(3)}</Text>
      </Panel>
      <Panel variant="standard">
        <Heading level="2">Standard</Heading>
        <Text>{lorem.generateSentences(3)}</Text>
      </Panel>
      <Panel variant="ghost">
        <Heading level="2">Ghost</Heading>
        <Text>{lorem.generateParagraphs(1)}</Text>
      </Panel>
      <Panel variant="subtle">
        <Heading level="2">Subtle</Heading>
        <Text>{lorem.generateParagraphs(1)}</Text>
      </Panel>
    </Grid>
  </Panel>
);
