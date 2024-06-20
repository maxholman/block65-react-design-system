import type { FC } from 'react';
import {
  Badge,
  Paragraph,
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
            <Heading level="4">Status</Heading>
            <Badge variant="info">Active</Badge>
          </Inline>
          <Paragraph>And some text</Paragraph>
        </Panel>
        <Panel>
          <Inline>
            <Heading level="4" textOverflow="ellipsis">
              DBS Visa 4352
            </Heading>
            <Badge variant="attention">Expires Soon</Badge>
          </Inline>
          <Paragraph>And some text</Paragraph>
        </Panel>
        <Panel>
          <Inline>
            <Heading level="4">Lol Badge</Heading>
            <Badge>50% Off</Badge>
          </Inline>
          <Paragraph>And some text</Paragraph>
        </Panel>
        <Panel>
          <Inline>
            <Heading level="4">Trial Account</Heading>
            <Badge variant="error">Expired</Badge>
          </Inline>
          <Paragraph>Upgrade now</Paragraph>
        </Panel>
        <Panel>
          <Inline>
            <Heading level="4">Messages (4)</Heading>
            <Badge variant="positive">New</Badge>
          </Inline>
          <Paragraph>You've got mail!</Paragraph>
        </Panel>
      </Grid>
    </Panel>
  </>
);
