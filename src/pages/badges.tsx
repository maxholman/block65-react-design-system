import type { FC } from 'react';
import {
  Badge,
  Block,
  Grid,
  Heading,
  Inline,
  Panel,
  Text,
} from '../../lib/main.js';

export const BadgesPage: FC = () => (
  <Panel variant="ghost" space="huge">
    <Block>
      <Heading level="3">Badges</Heading>

      <Grid cols="3">
        <Panel variant="subtle">
          <Inline>
            <Heading level="4">Default Badge</Heading>
            <Badge>Active</Badge>
          </Inline>
          <Text>And some text</Text>
        </Panel>
        <Panel variant="standard">
          <Inline>
            <Heading level="4">DBS Visa 4352</Heading>
            <Badge tone="warn">Expires Soon</Badge>
          </Inline>
          <Text>And some text</Text>
        </Panel>
        <Panel variant="transparent">
          <Inline>
            <Heading level="4">Default Badge</Heading>
            <Badge tone="promo">50% Off</Badge>
          </Inline>
          <Text>And some text</Text>
        </Panel>
        <Panel variant="ghost">
          <Inline>
            <Heading level="4">Trial Account</Heading>
            <Badge tone="critical">Expired</Badge>
          </Inline>
          <Text>Upgrade now</Text>
        </Panel>
        <Panel variant="ghost">
          <Inline>
            <Heading level="4">Messages (4)</Heading>
            <Badge tone="positive">New</Badge>
          </Inline>
          <Text>You've got mail!</Text>
        </Panel>
      </Grid>

      <Inline>
        <Badge variant="ghost" tone="warn">
          Ghost Warn
        </Badge>
      </Inline>
      <Inline>
        <Badge variant="subtle">Subtle Info</Badge>
      </Inline>
    </Block>
  </Panel>
);
