import type { FC } from 'react';
import { Block, Inline } from '../../lib/layout.js';
import { ButtonLink } from '../../lib/buttons.js';
import { TextLink } from '../../lib/links.js';
import { Panel } from '../../lib/panel.js';
import { Heading, Text } from '../../lib/typography.js';
import { lorem } from '../lorem.js';

export const FormsPage: FC = () => (
  <Inline space="large" component="main">
    <Block space="large" component="section">
      <Heading level="1">Level 1</Heading>
      <Panel space="huge">
        <Heading level="2">Level 2</Heading>
        <Panel space="huge">
          <Heading level="3">Level 3</Heading>
          <Panel space="huge">
            <Heading level="4">Level 4 is tight!</Heading>
            <Text>
              If you need to find out more,{' '}
              <TextLink href="#">go to my website</TextLink>
            </Text>
            <Text>
              There are also other resources available, such as those on{' '}
              <ButtonLink href="#">example.com</ButtonLink>
            </Text>
          </Panel>
        </Panel>
      </Panel>

      <Block space="large">
        <Heading level="1">{lorem.generateSentences(1)}</Heading>

        <Inline space="medium">
          <Text>{lorem.generateParagraphs(1)}</Text>
          <Text>{lorem.generateParagraphs(1)}</Text>
          <Text>{lorem.generateParagraphs(1)}</Text>
        </Inline>
      </Block>

      <Block space="medium" align="center">
        <Heading level="2">lorem.generateSentences(1)</Heading>
        <Text>{lorem.generateParagraphs(1)}</Text>
        <Text>{lorem.generateParagraphs(1)}</Text>
      </Block>
    </Block>
  </Inline>
);
