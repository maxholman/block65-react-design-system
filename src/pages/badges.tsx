import type { FC } from 'react';
import {
  Badge,
  ExactText,
  Grid,
  Heading,
  Inline,
  Panel,
  type BadgeVariant,
} from '../../lib/main.js';

const variants = [
  'default',
  'info',
  'positive',
  'error',
  'attention',
] satisfies BadgeVariant[];

export const BadgesPage: FC = () => (
  <>
    <Panel>
      <Heading>Variants</Heading>

      <Grid
        cols={{
          all: 3,
          tablet: 2,
          mobile: 1,
        }}
      >
        <Panel>
          <Heading level="4">hello</Heading>
          <Inline>
            {variants.map((variant) => (
              <Badge key={variant} variant={variant}>
                {variant}
              </Badge>
            ))}
          </Inline>
        </Panel>
      </Grid>
    </Panel>

    <Panel>
      <Heading>Examples</Heading>
      <Grid
        cols={{
          all: 3,
          tablet: 2,
          mobile: 1,
        }}
      >
        <Panel>
          <Inline>
            <Heading level="4">Default Badge</Heading>
            <Badge>Active</Badge>
          </Inline>
          <ExactText>And some text</ExactText>
        </Panel>
        <Panel>
          <Inline>
            <Heading level="4" textOverflow="ellipsis">
              DBS Visa 4352
            </Heading>
            <Badge>Expires Soon</Badge>
          </Inline>
          <ExactText>And some text</ExactText>
        </Panel>
        <Panel>
          <Inline>
            <Heading level="4">Default Badge</Heading>
            <Badge>50% Off</Badge>
          </Inline>
          <ExactText>And some text</ExactText>
        </Panel>
        <Panel>
          <Inline>
            <Heading level="4">Trial Account</Heading>
            <Badge>Expired</Badge>
          </Inline>
          <ExactText>Upgrade now</ExactText>
        </Panel>
        <Panel>
          <Inline>
            <Heading level="4">Messages (4)</Heading>
            <Badge variant="positive">New</Badge>
          </Inline>
          <ExactText>You've got mail!</ExactText>
        </Panel>
      </Grid>
    </Panel>
  </>
);
