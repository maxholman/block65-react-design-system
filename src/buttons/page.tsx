import type { FC } from 'react';
import { Button } from '../../lib/buttons.js';
import { Block, Inline } from '../../lib/layout.js';
import { ButtonLink } from '../../lib/links.js';
import { Panel } from '../../lib/panel.js';
import { Heading, Text } from '../../lib/typography.js';

export const ButtonsPage: FC = () => (
  <Panel variant="ghost" space="huge">
    <Block>
      <Heading level="2">Buttons</Heading>
      <Inline>
        <Button>Button</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="subtle">Subtle</Button>
      </Inline>
    </Block>

    <Block>
      <Heading level="2">Button Links</Heading>
      <Inline>
        <ButtonLink>Button</ButtonLink>
        <ButtonLink variant="ghost">Ghost</ButtonLink>
        <ButtonLink variant="subtle">Subtle</ButtonLink>
      </Inline>
    </Block>

    <Block>
      <Heading level="2">Busy Buttons</Heading>
      <Text>These buttons are super busy</Text>
      <Inline>
        <Button busy>Button</Button>
        <Button busy variant="ghost">
          Ghost
        </Button>
        <Button busy variant="subtle">
          Subtle
        </Button>
      </Inline>
    </Block>

    <Block>
      <Heading level="2">Disabled Buttons</Heading>
      <Text>These buttons are physically challenged</Text>
      <Inline>
        <Button disabled>Button</Button>
        <Button disabled variant="ghost">
          Ghost
        </Button>
        <Button disabled variant="subtle">
          Subtle
        </Button>
      </Inline>
    </Block>

    <Block>
      <Heading level="2">Compact Buttons</Heading>
      <Text>So cute</Text>
      <Inline space="small">
        <Button compact>Button</Button>
        <Button compact variant="ghost">
          Ghost
        </Button>
        <Button compact variant="subtle">
          Subtle
        </Button>
        <Button compact busy>
          Button
        </Button>
        <Button compact busy variant="ghost">
          Ghost
        </Button>
        <Button compact busy variant="subtle">
          Subtle
        </Button>
      </Inline>
    </Block>
  </Panel>
);
