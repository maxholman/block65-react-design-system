import type { FC } from 'react';
import { HelpIcon } from '../../lib/icons.js';
import {
  Block,
  Button,
  Grid,
  Heading,
  Inline,
  List,
  Panel,
  Secondary,
  Text,
} from '../../lib/main.js';
import { Tooltip } from '../../lib/tooltip.js';
import { lorem } from '../lorem.js';

export const ListPage: FC = () => (
  <Panel variant="ghost">
    <Grid padding="huge">
      <Panel variant="ghost" space="large">
        <Block align="center">
          <Heading level="2">Early Adopter Plan</Heading>
          <Text size="small">
            <Secondary>For those who like to adopt early</Secondary>
          </Text>
        </Block>
        <Block>
          <Text>
            {lorem.generateParagraphs(1)} Also, look at this icon{' '}
            <Tooltip content="This is more information!">
              <span>
                <HelpIcon />
              </span>
            </Tooltip>
          </Text>
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

        <Block marginBlock="large" align="center">
          <Inline>
            <Heading level="1">$18 USD</Heading>
            <Text size="small">p/m</Text>
          </Inline>
        </Block>

        <Button>Upgrade Now</Button>
      </Panel>

      <Panel variant="ghost">
        <Block align="center">
          <Heading level="2">Custom Plan</Heading>
          <Text size="small" align="center">
            <Secondary>Want more?</Secondary>
          </Text>
        </Block>
        <Block>
          <Text> We can do customised models and payment terms</Text>
          <Text>No wuckers</Text>
          <Button>Contact Us</Button>
        </Block>
      </Panel>
    </Grid>
  </Panel>
);
