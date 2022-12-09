import type { FC } from 'react';
import {
  Block,
  Button,
  Grid,
  Heading,
  Inline,
  List,
  Panel,
  Text,
} from '../../lib/main.js';
import { lorem } from '../lorem.js';

export const ListPage: FC = () => (
  <Panel variant="ghost">
    <Grid padding="huge">
      <Panel variant="ghost" space="huge">
        <Block align="center">
          <Heading level="2">Early Adopter Plan</Heading>
        </Block>
        <Block>
          <Text>{lorem.generateParagraphs(1)}</Text>
          <Text>{lorem.generateParagraphs(1)}</Text>
        </Block>
        <Block>
          <List>
            <Text>{lorem.generateSentences(1)}</Text>
            <Text>{lorem.generateSentences(1)}</Text>
            <Text>{lorem.generateSentences(1)}</Text>
            <Text>{lorem.generateSentences(1)}</Text>
            <Text>{lorem.generateSentences(1)}</Text>
          </List>
        </Block>

        <Block>
          <Inline align="center">
            <Heading level="1">$18 USD</Heading>
            <Text size="small">p/m</Text>
          </Inline>
        </Block>

        <Button>Upgrade Now</Button>
      </Panel>
      <Panel variant="ghost">
        <Heading level="2">Custom Plan</Heading>
        <Text>Need more? We can do customised models and payment terms</Text>
        <Text>No wuckers</Text>
        <Button>Contact Us</Button>
      </Panel>
    </Grid>
  </Panel>
);
