import type { FC } from 'react';
import {
  Block,
  Button,
  ButtonIcon,
  ButtonLink,
  Divider,
  Grid,
  Heading,
  Inline,
  Panel,
  Text,
} from '../../lib/main.js';
import { CrescentMoonIcon, SunIcon } from '../icons.js';

export const ButtonsPage: FC = () => (
  <Panel variant="ghost" space="huge">
    <Block>
      <Heading level="2">Buttons</Heading>
      <Inline>
        <Button>Button</Button>
        <Button icon={<CrescentMoonIcon />}>Button</Button>
        <Button variant="ghost">Ghost</Button>
        <Button icon={<CrescentMoonIcon />} variant="ghost">
          Ghost
        </Button>
        <Button variant="subtle">Subtle</Button>
        <Button icon={<CrescentMoonIcon />} variant="subtle">
          Subtle
        </Button>
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
      <Heading level="2">Button Icons</Heading>
      <Inline>
        <ButtonIcon icon={<SunIcon />} label="Sun" />
        <ButtonIcon icon={<SunIcon />} label="Sun" variant="ghost" />
        <ButtonIcon icon={<SunIcon />} label="Sun" variant="subtle" />
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
        <Button busy icon={<CrescentMoonIcon />} variant="subtle">
          This one has an Icon
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
        <Button compact disabled>
          Button
        </Button>
        <Button compact disabled variant="ghost">
          Ghost
        </Button>
        <Button compact disabled variant="subtle">
          Subtle
        </Button>
        <Button compact icon={<CrescentMoonIcon />}>
          Button
        </Button>
      </Inline>
    </Block>
    <Divider />
    <Block>
      <Heading>Tones</Heading>
      <Grid cols="4">
        <Block>
          <Button>standard</Button>
          <Button variant="ghost">standard ghost</Button>
          <Button variant="subtle">standard subtle</Button>
          <Button variant="transparent">standard transparent</Button>
        </Block>

        <Block>
          <Button tone="neutral">neutral</Button>
          <Button variant="ghost" tone="neutral">
            neutral ghost
          </Button>

          <Button variant="subtle" tone="neutral">
            neutral subtle
          </Button>

          <Button variant="transparent" tone="neutral">
            neutral transparent
          </Button>
        </Block>

        <Block>
          <Button tone="critical">critical</Button>
          <Button variant="ghost" tone="critical">
            critical ghost
          </Button>
          <Button variant="subtle" tone="critical">
            critical subtle
          </Button>

          <Button variant="transparent" tone="critical">
            critical transparent
          </Button>
        </Block>

        <Block>
          <Button tone="promo">promo</Button>

          <Button variant="ghost" tone="promo">
            promo ghost
          </Button>
          <Button variant="subtle" tone="promo">
            promo subtle
          </Button>
          <Button variant="transparent" tone="promo">
            neutral transparent
          </Button>
        </Block>
      </Grid>

      <Divider marginBlock="huge" />

      <Heading>Hello</Heading>
      <Text>Buttons in context</Text>
      <Inline>
        <Text>Like this</Text>
        <ButtonLink tone="critical">Eject</ButtonLink>
        <Text>and like this</Text>
      </Inline>
    </Block>
    <Block>
      <Heading>Hello</Heading>
      <Text>Buttons in context</Text>
      <Inline>
        <ButtonLink tone="critical" icon={<CrescentMoonIcon />}>
          Eject
        </ButtonLink>
      </Inline>
      <Divider marginBlock="huge" />

      <Heading>Hello</Heading>
      <Text>Buttons in context</Text>
      <Inline>
        <Text>Like this</Text>
        <ButtonLink tone="critical" icon={<CrescentMoonIcon />}>
          Eject
        </ButtonLink>
        <Text>and like this</Text>
      </Inline>
    </Block>
  </Panel>
);
