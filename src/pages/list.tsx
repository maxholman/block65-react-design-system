import type { FC } from 'react';
import { HelpIcon } from '../../lib/icons.js';
import {
  Block,
  Grid,
  Heading,
  Inline,
  List,
  ListItem,
  Secondary,
  Text,
  Tooltip,
} from '../../lib/main.js';
import { Button, Panel } from '../reference-impl/main.js';

export const ListPage: FC = () => (
  <>
    <Panel variant="ghost">
      <Text>
        Question Mark{' '}
        <Tooltip
          initialOpen
          initialPlacement="right"
          content="This is more information"
        >
          <HelpIcon />
        </Tooltip>
      </Text>
    </Panel>

    <Panel variant="ghost">
      <Grid>
        <Panel variant="ghost">
          <Block alignItems="center" space="5">
            <Heading level="2">Early Adopter Plan</Heading>
            <Text fontSize="0">
              <Secondary>For those who like to adopt early </Secondary>
            </Text>
          </Block>
          <Block>
            <Text>
              Ex veniam cillum aliquip. Irure ex sunt excepteur ea commodo duis
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
              Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
              excepteur ea commodo duis reprehenderit.
            </Text>
          </Block>
          <Block>
            <List>
              <ListItem>
                Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
                excepteur ea commodo duis reprehenderit. Qui duis cupidatat
                mollit laboris mollit proident velit magna. Excepteur anim est
                pariatur.
              </ListItem>
              <ListItem>
                Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
                excepteur ea commodo duis reprehenderit. Qui duis cupidatat
                mollit laboris mollit proident velit magna. Excepteur anim est
                pariatur.
              </ListItem>
              <ListItem>
                Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
                excepteur ea commodo duis reprehenderit. Qui duis cupidatat
                mollit laboris mollit proident velit magna. Excepteur anim est
                pariatur.
              </ListItem>
              <ListItem>
                Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
                excepteur ea commodo duis reprehenderit. Qui duis cupidatat
                mollit laboris mollit proident velit magna. Excepteur anim est
                pariatur.
              </ListItem>
              <ListItem>
                Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
                excepteur ea commodo duis reprehenderit. Qui duis cupidatat
                mollit laboris mollit proident velit magna. Excepteur anim est
                pariatur.
              </ListItem>
            </List>
          </Block>

          <Block marginBlock="4" alignItems="center">
            <Inline>
              <Heading level="1">$18 USD</Heading>
              <Text fontSize="0">p/m</Text>
            </Inline>
          </Block>

          <Button>Upgrade Now</Button>
        </Panel>

        <Panel variant="ghost">
          <Block alignItems="center" space="5">
            <Heading level="2">Custom Plan</Heading>
            <Text fontSize="0">
              <Secondary>Want more?</Secondary>
            </Text>
          </Block>
          <Text>We can do customised models and payment terms</Text>
          <Text>No wuckers</Text>
          <Button>Contact Us</Button>
        </Panel>
      </Grid>
    </Panel>
  </>
);
