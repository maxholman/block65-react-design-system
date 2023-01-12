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

export const ListPage: FC = () => (
  <Panel variant="ghost">
    <Grid padding="huge">
      <Panel variant="ghost" space="large">
        <Block align="center" space="huge">
          <Heading level="2">Early Adopter Plan</Heading>
          <Text size="small">
            <Secondary>For those who like to adopt early </Secondary>
          </Text>
        </Block>
        <Block>
          <Text>
            Ex veniam{' '}
            <Tooltip initialOpen content={'This is more information'}>
              <HelpIcon />
            </Tooltip>{' '}
            veniam cillum aliquip. Irure ex sunt excepteur ea commodo duis
            reprehenderit. Qui duis cupidatat mollit laboris mollit proident
            velit magna. Excepteur anim est pariatur. Also, look at this icon{' '}
            <Tooltip content={<span>This is more information.</span>}>
              <HelpIcon />
            </Tooltip>
          </Text>
        </Block>
        <Block>
          <Text>
            Qui duis cupidatat mollit laboris mollit.Excepteur anim est
            pariatur.
          </Text>
          <Text>
            Ex veniam consectetur veniam cillum aliquip. Irure ex sunt excepteur
            ea commodo duis reprehenderit.
          </Text>
        </Block>
        <Block>
          <List>
            <Text>
              Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
              excepteur ea commodo duis reprehenderit. Qui duis cupidatat mollit
              laboris mollit proident velit magna. Excepteur anim est pariatur.
            </Text>
            <Text>
              Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
              excepteur ea commodo duis reprehenderit. Qui duis cupidatat mollit
              laboris mollit proident velit magna. Excepteur anim est pariatur.
            </Text>
            <Text>
              Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
              excepteur ea commodo duis reprehenderit. Qui duis cupidatat mollit
              laboris mollit proident velit magna. Excepteur anim est pariatur.
            </Text>
            <Text>
              Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
              excepteur ea commodo duis reprehenderit. Qui duis cupidatat mollit
              laboris mollit proident velit magna. Excepteur anim est pariatur.
            </Text>
            <Text>
              Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
              excepteur ea commodo duis reprehenderit. Qui duis cupidatat mollit
              laboris mollit proident velit magna. Excepteur anim est pariatur.
            </Text>
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

      <Panel variant="ghost" space="large">
        <Block align="center" space="huge">
          <Heading level="2">Custom Plan</Heading>
          <Text size="small" align="center">
            <Secondary>Want more?</Secondary>
          </Text>
        </Block>
        <Text> We can do customised models and payment terms</Text>
        <Text>No wuckers</Text>
        <Button>Contact Us</Button>
      </Panel>
    </Grid>
  </Panel>
);
