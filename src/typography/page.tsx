import { Link } from '@block65/mrr';
import type { FC } from 'react';
import { Block } from '../../lib/layout.js';
import { TextLink } from '../../lib/links.js';
import { Panel } from '../../lib/panel.js';
import { Heading, Secondary, Strong, Text } from '../../lib/typography.js';
import { dest } from '../dest.js';

export const TypographyPage: FC = () => (
  <Panel variant="ghost" space="huge" elevation="elevationBottom">
    <Block>
      <Heading level="1">Heading 1</Heading>
      <Heading level="2">Heading 2</Heading>
      <Heading level="3">Heading 3</Heading>
      <Heading level="4">Heading 4</Heading>
      <Heading level="5">Heading 5</Heading>
      <Text>
        Normal Text looks like this, and <Secondary>secondary text</Secondary>{' '}
        looks like that
      </Text>
      <Text>
        <Strong>Strong text</Strong> is strong.
      </Text>
      <Text>
        Sometimes I like to look at{' '}
        <Link url={dest('/buttons')}>
          <TextLink>button components</TextLink>
        </Link>{' '}
        on my computer.
      </Text>
    </Block>
    <Block>
      <Heading level="1">
        Sometimes I like to look at{' '}
        <Link url={dest('/buttons')}>
          <TextLink>button components</TextLink>
        </Link>{' '}
        on my computer.
      </Heading>
    </Block>
  </Panel>
);
