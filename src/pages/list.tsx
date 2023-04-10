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
  Tooltip,
} from '../../lib/main.js';

export const ListPage: FC = () => (
  <>
    <Panel>
      <Text>
        Question{' '}
        <Tooltip
          initialOpen
          initialPlacement="bottom"
          content="This is more information"
        >
          <HelpIcon />
        </Tooltip>{' '}
        Mark
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
              <Text>
                Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
                excepteur ea commodo duis reprehenderit. Qui duis cupidatat
                mollit laboris mollit proident velit magna. Excepteur anim est
                pariatur.
              </Text>
              <Text>
                Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
                excepteur ea commodo duis reprehenderit. Qui duis cupidatat
                mollit laboris mollit proident velit magna. Excepteur anim est
                pariatur.
              </Text>
              <Text>
                Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
                excepteur ea commodo duis reprehenderit. Qui duis cupidatat
                mollit laboris mollit proident velit magna. Excepteur anim est
                pariatur.
              </Text>
              <Text>
                Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
                excepteur ea commodo duis reprehenderit. Qui duis cupidatat
                mollit laboris mollit proident velit magna. Excepteur anim est
                pariatur.
              </Text>
              <Text>
                Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
                excepteur ea commodo duis reprehenderit. Qui duis cupidatat
                mollit laboris mollit proident velit magna. Excepteur anim est
                pariatur.
              </Text>
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
          <Text> We can do customised models and payment terms</Text>
          <Text>No wuckers</Text>
          <Button>Contact Us</Button>
        </Panel>
      </Grid>
    </Panel>
  </>
);
