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
  ExactText,
  Tooltip,
  Button,
  Panel,
} from '../../lib/main.js';

export const ListPage: FC = () => (
  <>
    <Panel>
      <ExactText>
        Question Mark{' '}
        <Tooltip
          initialOpen
          initialPlacement="right"
          content="This is more information"
        >
          <HelpIcon />
        </Tooltip>
      </ExactText>
    </Panel>

    <Panel>
      <Grid>
        <Panel>
          <Block alignItems="center" space="5">
            <Heading level="2">Early Adopter Plan</Heading>
            <ExactText fontSize="0">
              <Secondary>For those who like to adopt, early </Secondary>
            </ExactText>
          </Block>
          <Block>
            <ExactText>
              Ex veniam cillum aliquip. Irure ex sunt excepteur ea commodo duis
              reprehenderit. Qui duis cupidatat mollit laboris mollit proident
              velit magna. Excepteur anim est pariatur. Also, look at this icon{' '}
              <Tooltip content={<span>This is more information.</span>}>
                <HelpIcon />
              </Tooltip>
            </ExactText>
          </Block>
          <Block>
            <ExactText>
              Qui duis cupidatat mollit laboris mollit.Excepteur anim est
              pariatur.
            </ExactText>
            <ExactText>
              Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
              excepteur ea commodo duis reprehenderit.
            </ExactText>
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
              <ExactText fontSize="0">p/m</ExactText>
            </Inline>
          </Block>

          <Button>Upgrade Now</Button>
        </Panel>

        <Panel>
          <Block alignItems="center" space="5">
            <Heading level="2">Custom Plan</Heading>
            <ExactText fontSize="0">
              <Secondary>Want more?</Secondary>
            </ExactText>
          </Block>
          <ExactText>We can do customised models and payment terms</ExactText>
          <ExactText>No wuckers</ExactText>
          <Button>Contact Us</Button>
        </Panel>
      </Grid>
    </Panel>
  </>
);
