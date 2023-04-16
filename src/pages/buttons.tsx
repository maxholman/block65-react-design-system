import type { FC } from 'react';
import { FormattedMessage } from 'react-intl';
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
  type Tone,
} from '../../lib/main.js';
import { CrescentMoonIcon, SunIcon } from '../icons.js';

export const ButtonsPage: FC = () => (
  <Panel space="9">
    <Panel>
      <Heading level="2">Variants</Heading>
      <Inline flexWrap>
        <Button>
          <FormattedMessage
            id="button"
            defaultMessage="Button"
            description="Button"
          />
        </Button>

        <Button variant="ghost">Ghost</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="transparent">Transparent</Button>
      </Inline>
    </Panel>
    <Panel>
      <Heading level="2">Buttons with Icons</Heading>
      <Inline flexWrap>
        <Button icon={<CrescentMoonIcon />}>Button</Button>
        <Button icon={<CrescentMoonIcon />} variant="ghost">
          Ghost
        </Button>
        <Button icon={<CrescentMoonIcon />} variant="subtle">
          Subtle
        </Button>
        <Button icon={<CrescentMoonIcon />} variant="transparent">
          Transparent
        </Button>
      </Inline>
    </Panel>
    <Panel>
      <Heading level="2">All together</Heading>
      <Inline flexWrap>
        <ButtonIcon icon={<SunIcon />} label="Sun" />

        <Button>
          <FormattedMessage
            id="button"
            defaultMessage="Button"
            description="Button"
          />
        </Button>
        <ButtonIcon icon={<SunIcon />} label="Sun" />

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
    </Panel>

    <Panel>
      <Heading level="2">Button Links</Heading>
      <Inline>
        <ButtonLink href="https://eject.invalid">Button</ButtonLink>
        <ButtonLink href="https://eject.invalid" variant="ghost">
          Ghost
        </ButtonLink>
        <ButtonLink href="https://eject.invalid" variant="subtle">
          Subtle
        </ButtonLink>
        <ButtonLink href="https://eject.invalid" variant="transparent">
          Transparent
        </ButtonLink>
      </Inline>
    </Panel>

    <Panel>
      <Heading level="2">Button Icons</Heading>
      <Inline>
        <ButtonIcon icon={<SunIcon />} label="Sun" />
        <ButtonIcon icon={<SunIcon />} label="Sun" busy />
        <ButtonIcon icon={<SunIcon />} label="Sun" variant="ghost" />
        <ButtonIcon icon={<SunIcon />} label="Sun" variant="ghost" busy />
        <ButtonIcon icon={<SunIcon />} label="Sun" variant="subtle" />
        <ButtonIcon icon={<SunIcon />} label="Sun" variant="subtle" busy />
        <ButtonIcon icon={<SunIcon />} label="Sun" variant="transparent" />
        <ButtonIcon icon={<SunIcon />} label="Sun" variant="transparent" busy />
      </Inline>
    </Panel>

    <Panel>
      <Heading level="2">Busy Buttons</Heading>
      <Text>These buttons are super busy</Text>
      <Inline flexWrap>
        <Button busy>Button</Button>
        <Button busy variant="ghost">
          Ghost
        </Button>
        <Button busy variant="subtle">
          Subtle
        </Button>
        <Button busy variant="transparent">
          Transparent
        </Button>
        <Button busy icon={<CrescentMoonIcon />} variant="subtle">
          This one has an Icon
        </Button>
      </Inline>
    </Panel>

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
      <Inline>
        <Button compact>Button</Button>
        <Button compact variant="ghost">
          Ghost
        </Button>
        <Button compact variant="subtle">
          Subtle
        </Button>
        <Button compact icon={<CrescentMoonIcon />}>
          Button
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
      </Inline>
    </Block>
    <Divider />
    <Block>
      <Heading>Tones</Heading>
      <Grid
        cols={{
          all: 4,
          tablet: 2,
          mobile: 1,
        }}
      >
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

        {(
          [
            'accent',
            'warn',
            'neutral',
            'critical',
            'promo',
            'positive',
            'info',
          ] as Tone[]
        ).map((tone) => (
          <Block key={tone}>
            <Button tone={tone}>{tone}</Button>

            <Button variant="ghost" tone={tone}>
              {tone} ghost
            </Button>
            <Button variant="subtle" tone={tone}>
              {tone} subtle
            </Button>
            <Button variant="transparent" tone={tone}>
              {tone} transparent
            </Button>
          </Block>
        ))}
      </Grid>

      <Divider marginBlock="3" />

      <Heading>Hello</Heading>
      <Text>Buttons in context</Text>
      <Inline>
        <Text>Like this</Text>
        <ButtonLink href="https://eject.invalid" tone="critical">
          Eject
        </ButtonLink>
        <Text>and like this</Text>
      </Inline>
    </Block>
    <Block>
      <Heading>Hello</Heading>
      <Text>Buttons in context</Text>
      <Inline>
        <ButtonLink
          href="https://eject.invalid"
          tone="critical"
          icon={<CrescentMoonIcon />}
        >
          Eject
        </ButtonLink>
      </Inline>
      <Divider marginBlock="3" />

      <Heading>Hello</Heading>
      <Text>Buttons in context</Text>
      <Inline>
        <Text>Like this</Text>
        <ButtonLink
          href="https://eject.invalid"
          tone="critical"
          icon={<CrescentMoonIcon />}
        >
          Eject
        </ButtonLink>
        <Text>and like this</Text>
      </Inline>

      <Heading>Hello</Heading>
      <Text>Buttons in context</Text>
      <Inline>
        <Text>Like this</Text>
        <ButtonLink
          href="https://eject.invalid"
          tone="critical"
          icon={<CrescentMoonIcon />}
        >
          Eject
        </ButtonLink>
        <Text>and like this</Text>
      </Inline>

      <Panel>
        <Heading>Font Size</Heading>
        <Text>Buttons in context</Text>
        <Inline>
          <Button fontSize="5" tone="critical" icon={<CrescentMoonIcon />}>
            Eject
          </Button>
          <ButtonLink
            fontSize="5"
            href="https://eject.invalid"
            tone="critical"
            icon={<CrescentMoonIcon />}
          >
            Eject
          </ButtonLink>
        </Inline>
      </Panel>

      <Panel>
        <Heading>Padding override</Heading>
        <Inline flexWrap="wrap">
          <Button fontSize="5" padding="10" icon={<CrescentMoonIcon />}>
            padding="10"
          </Button>
          <Button fontSize="5" paddingInline="10" icon={<CrescentMoonIcon />}>
            paddingInline="10"
          </Button>
          <Button fontSize="5" paddingBlock="10" icon={<CrescentMoonIcon />}>
            paddingBlock="10"
          </Button>
          <ButtonLink padding="0" href="https://eject.invalid">
            padding="0"
          </ButtonLink>
        </Inline>
      </Panel>

      <Panel>
        <Heading>Buttonish things</Heading>
        <Block space="0">
          <Button
            fontSize="5"
            padding="10"
            rounded="none"
            variant="subtle"
            alignItems="start"
            flexDirection="column"
            textAlign="start"
            space="10"
          >
            <Block>Buttonish, but jjjjqqqyyynot</Block>
            <Block>Buttonish, IIILLLKKJijlREQ</Block>
            <Inline flexWrap>
              Buttonish,jjjjqqqyyy but jjjjqqqyyynot jjjjqqqyyynotpppqq
            </Inline>
          </Button>
          <Button
            fontSize="5"
            padding="10"
            rounded="none"
            variant="subtle"
            justifyContent="start"
            alignItems="start"
            textAlign="start"
          >
            Buttonish, but notjjjjqqqyyy
          </Button>
          <Button
            fontSize="5"
            padding="10"
            rounded="none"
            variant="subtle"
            flexDirection="column"
            textAlign="start"
          >
            💩
          </Button>
        </Block>
      </Panel>
    </Block>
  </Panel>
);
