import type { FC } from 'react';
import { Grid, Heading, Text } from '../../lib/main.js';
import { lorem } from '../lorem.js';
import { Panel } from '../reference-impl/main.js';

export const GridPage: FC = () => (
  <Panel variant="ghost">
    <Grid cols={4}>
      <Panel variant="transparent">
        <Heading level="2" textOverflow="ellipsis">
          transparent
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
      <Panel variant="solid">
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

      <Panel variant="transparent">
        <Heading level="2" textOverflow="ellipsis">
          Transparent
        </Heading>
        <Text>{lorem.generateParagraphs(1)}</Text>
      </Panel>
    </Grid>
  </Panel>
);
