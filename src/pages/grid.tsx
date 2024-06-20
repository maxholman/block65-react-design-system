import type { FC } from 'react';
import { Panel, Grid, Heading, Paragraph } from '../../lib/main.js';
import { lorem } from '../lorem.js';

export const GridPage: FC = () => (
  <Panel>
    <Grid cols={4}>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          {lorem.generateWords(2)}
        </Heading>
        <Paragraph>{lorem.generateSentences(3)}</Paragraph>
      </Panel>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          {lorem.generateWords(1)}
        </Heading>
        <Paragraph>{lorem.generateSentences(3)}</Paragraph>
      </Panel>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          {lorem.generateWords(2)}
        </Heading>
        <Paragraph>{lorem.generateSentences(3)}</Paragraph>
      </Panel>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          {lorem.generateWords(1)}
        </Heading>
        <Paragraph>{lorem.generateSentences(3)}</Paragraph>
      </Panel>
      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          {lorem.generateWords(2)}
        </Heading>
        <Paragraph>{lorem.generateParagraphs(1)}</Paragraph>
      </Panel>

      <Panel>
        <Heading level="2" textOverflow="ellipsis">
          {lorem.generateWords(1)}
        </Heading>
        <Paragraph>{lorem.generateParagraphs(1)}</Paragraph>
      </Panel>
    </Grid>
  </Panel>
);
