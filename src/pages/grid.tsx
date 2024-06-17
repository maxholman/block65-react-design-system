import type { FC } from 'react';
import { Panel, Grid, Heading, ExactText } from '../../lib/main.js';
import { lorem } from '../lorem.js';

export const GridPage: FC = () => (
  <Panel>
    <Grid cols={4}>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          transparent
        </Heading>
        <ExactText>{lorem.generateSentences(3)}</ExactText>
      </Panel>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          Ghost
        </Heading>
        <ExactText>{lorem.generateSentences(3)}</ExactText>
      </Panel>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          Subtle
        </Heading>
        <ExactText>{lorem.generateSentences(3)}</ExactText>
      </Panel>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          Standard
        </Heading>
        <ExactText>{lorem.generateSentences(3)}</ExactText>
      </Panel>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          Ghost
        </Heading>
        <ExactText>{lorem.generateParagraphs(1)}</ExactText>
      </Panel>

      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          Transparent
        </Heading>
        <ExactText>{lorem.generateParagraphs(1)}</ExactText>
      </Panel>
    </Grid>
  </Panel>
);
