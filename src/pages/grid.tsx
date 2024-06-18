import type { FC } from 'react';
import { Panel, Grid, Heading, ExactText } from '../../lib/main.js';
import { lorem } from '../lorem.js';

export const GridPage: FC = () => (
  <Panel>
    <Grid cols={4}>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          {lorem.generateWords(2)}
        </Heading>
        <ExactText>{lorem.generateSentences(3)}</ExactText>
      </Panel>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          {lorem.generateWords(1)}
        </Heading>
        <ExactText>{lorem.generateSentences(3)}</ExactText>
      </Panel>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          {lorem.generateWords(2)}
        </Heading>
        <ExactText>{lorem.generateSentences(3)}</ExactText>
      </Panel>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          {lorem.generateWords(1)}
        </Heading>
        <ExactText>{lorem.generateSentences(3)}</ExactText>
      </Panel>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          {lorem.generateWords(2)}
        </Heading>
        <ExactText>{lorem.generateParagraphs(1)}</ExactText>
      </Panel>

      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          {lorem.generateWords(1)}
        </Heading>
        <ExactText>{lorem.generateParagraphs(1)}</ExactText>
      </Panel>
    </Grid>
  </Panel>
);
