import type { FC } from 'react';
import { Grid, Heading, Inline, Text } from '../../lib/main.js';
import {
  Badge,
  Panel,
  type BoxVariant,
  type Tone,
} from '../reference-impl/main.js';

const badgeVariantNames: BoxVariant[] = [
  'solid',
  'subtle',
  'ghost',
  'transparent',
];

const badgeToneNames: Tone[] = [
  'critical',
  'positive',
  'info',
  'warn',
  'promo',
];

export const BadgesPage: FC = () => (
  <>
    <Panel variant="ghost">
      <Heading>Variants</Heading>

      <Grid
        cols={{
          all: 3,
          tablet: 2,
          mobile: 1,
        }}
      >
        {badgeVariantNames.map((variant) => (
          <Panel variant="subtle" key={variant}>
            <Heading level="4">{variant}</Heading>
            <Inline flexWrap>
              {badgeToneNames.map((tone) => (
                <Badge variant={variant} tone={tone} key={tone}>
                  {tone}
                </Badge>
              ))}
            </Inline>
          </Panel>
        ))}
      </Grid>
    </Panel>

    <Panel variant="ghost">
      <Heading>Examples</Heading>
      <Grid
        cols={{
          all: 3,
          tablet: 2,
          mobile: 1,
        }}
      >
        <Panel variant="subtle">
          <Inline>
            <Heading level="4">Default Badge</Heading>
            <Badge>Active</Badge>
          </Inline>
          <Text>And some text</Text>
        </Panel>
        <Panel>
          <Inline>
            <Heading level="4" textOverflow="ellipsis">
              DBS Visa 4352
            </Heading>
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
    </Panel>
  </>
);
