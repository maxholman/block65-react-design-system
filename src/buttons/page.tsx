import type { FC } from 'react';
import { Button } from '../../lib/buttons.js';
import { Block, Inline } from '../../lib/layout.js';
import { ButtonLink } from '../../lib/links.js';
import { Panel } from '../../lib/panel.js';
import { Heading } from '../../lib/typography.js';

export const ButtonsPage: FC = () => (
  <Panel variant="ghost">
    <Block space="huge">
      <Heading>Buttons</Heading>
      <Inline>
        <Button>Button</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="subtle">Subtle</Button>
      </Inline>
    </Block>

    <Block space="huge">
      <Heading>Button Links</Heading>
      <Inline>
        <ButtonLink>Button</ButtonLink>
        <ButtonLink variant="ghost">Ghost</ButtonLink>
        <ButtonLink variant="subtle">Subtle</ButtonLink>
      </Inline>
    </Block>

    <Block space="huge">
      <Heading>Busy Buttons</Heading>
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

    <Block space="huge">
      <Heading>Disabled Buttons</Heading>
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
  </Panel>
);
