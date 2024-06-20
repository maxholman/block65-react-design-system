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
  Paragraph,
  Tooltip,
  Button,
  Panel,
} from '../../lib/main.js';

export const ListPage: FC = () => (
  <>
    <Panel>
      <Paragraph>
        Question Mark{' '}
        <Tooltip
          initialOpen
          initialPlacement="right"
          content="This is more information"
        >
          <HelpIcon />
        </Tooltip>
      </Paragraph>
    </Panel>

    <Panel>
      <Grid>
        <Panel>
          <Block alignItems="center" space="5">
            <Heading level="2">Early Adopter Plan</Heading>
            <Paragraph capSize="0">
              <Secondary>For those who like to adopt, early </Secondary>
            </Paragraph>
          </Block>
          <Block>
            <Paragraph>
              Ex veniam cillum aliquip. Irure ex sunt excepteur ea commodo duis
              reprehenderit. Qui duis cupidatat mollit laboris mollit proident
              velit magna. Excepteur anim est pariatur. Also, look at this icon{' '}
              <Tooltip content={<span>This is more information.</span>}>
                <HelpIcon />
              </Tooltip>
            </Paragraph>
          </Block>
          <Block>
            <Paragraph>
              Qui duis cupidatat mollit laboris mollit.Excepteur anim est
              pariatur.
            </Paragraph>
            <Paragraph>
              Ex veniam consectetur veniam cillum aliquip. Irure ex sunt
              excepteur ea commodo duis reprehenderit.
            </Paragraph>
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
              <Paragraph capSize="0">p/m</Paragraph>
            </Inline>
          </Block>

          <Button>Upgrade Now</Button>
        </Panel>

        <Panel>
          <Block alignItems="center" space="5">
            <Heading level="2">Custom Plan</Heading>
            <Paragraph capSize="0">
              <Secondary>Want more?</Secondary>
            </Paragraph>
          </Block>
          <Paragraph>We can do customised models and payment terms</Paragraph>
          <Paragraph>No wuckers</Paragraph>
          <Button>Contact Us</Button>
        </Panel>
      </Grid>
    </Panel>
  </>
);
