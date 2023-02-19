import type { FC } from 'react';
import { Grid, Heading, Panel, Text } from '../../lib/main.js';
import { lorem } from '../lorem.js';

export const GridPage: FC = () => (
  <Panel variant="ghost">
    <Grid space="huge" cols={4}>
      <Panel variant="standard">
        <Heading level="2" textOverflow="ellipsis">
          Standard
        </Heading>
        <Text>{lorem.generateSentences(3)}</Text>
      </Panel>
      <Panel variant="ghost">
        <Heading level="2" textOverflow="ellipsis">
          Ghost
        </Heading>
        <Text>{lorem.generateSentences(3)}</Text>
      </Panel>
      <Panel variant="subtle">
        <Heading level="2" textOverflow="ellipsis">
          Subtle
        </Heading>
        <Text>{lorem.generateSentences(3)}</Text>
      </Panel>
      <Panel variant="standard">
        <Heading level="2" textOverflow="ellipsis">
          Standard
        </Heading>
        <Text>{lorem.generateSentences(3)}</Text>
      </Panel>
      <Panel variant="ghost">
        <Heading level="2" textOverflow="ellipsis">
          Ghost
        </Heading>
        <Text>{lorem.generateParagraphs(1)}</Text>
      </Panel>
      <Panel variant="neutral">
        <Heading level="2" textOverflow="ellipsis">
          Neutral
        </Heading>
        <Text>{lorem.generateParagraphs(1)}</Text>
      </Panel>
      <Panel variant="transparent">
        <Heading level="2" textOverflow="ellipsis">
          Transparent
        </Heading>
        <Text>{lorem.generateParagraphs(1)}</Text>
      </Panel>
    </Grid>
  </Panel>
);
