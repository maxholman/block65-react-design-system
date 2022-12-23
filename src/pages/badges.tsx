import type { FC } from 'react';
import {
  Badge,
  Block,
  Grid,
  Heading,
  Inline,
  Panel,
  Text,
  type Tone,
  type BadgeVariant,
} from '../../lib/main.js';

const badgeVariants: BadgeVariant[] = [
  'ghost',
  'subtle',
  'standard',
  'transparent',
];

const badgeTones: Tone[] = [
  'critical',
  'positive',
  'info',
  'neutral',
  'warn',
  'promo',
];

export const BadgesPage: FC = () => (
  <Panel variant="ghost" space="huge">
    <Block>
      <Heading level="3">Badges</Heading>

      <Grid>
        {badgeVariants.map((variant) => (
          <Panel variant="subtle">
            <Heading level="4">{variant}</Heading>
            {badgeTones.map((tone) => (
              <Inline>
                <Badge variant={variant} tone={tone}>
                  {tone}
                </Badge>
              </Inline>
            ))}
          </Panel>
        ))}
      </Grid>

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
    </Block>
  </Panel>
);
