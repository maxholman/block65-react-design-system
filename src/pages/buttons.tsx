import type { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { HelpIcon } from '../../lib/icons.js';
import {
  Block,
  Divider,
  Grid,
  Heading,
  Inline,
  UnstyledButton,
} from '../../lib/main.js';
import { Text } from '../reference-impl/main.js';
import {
  Button,
  ButtonIcon,
  ButtonLink,
  Panel,
  type Tone,
  type BoxVariant,
} from '../reference-impl/main.js';
import { WithColorSchemes } from './components/WithColorSchemes.js';
import { CrescentMoonIcon, SunIcon } from './components/icons.js';

export const ButtonsPage: FC = () => (
  <>
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

        <Button variant="ghost">Neutral Ghost</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="subtle">Neutral Subtle</Button>
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
        <Button iconEnd={<CrescentMoonIcon />} variant="subtle">
          EndIcon
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

    <WithColorSchemes>
      <Block>
        <Heading level="2">Disabled Buttons</Heading>
        <Text>These buttons are physically challenged</Text>
        {[false, true].map((disabled) => (
          <Block key={String(disabled)}>
            <Inline>
              <Button disabled={disabled}>Button</Button>
              <Button disabled={disabled} variant="ghost">
                Ghost
              </Button>
              <Button disabled={disabled} variant="subtle">
                Subtle
              </Button>
              <Button disabled={disabled} tone="positive">
                Positive
              </Button>
              <Button disabled={disabled} variant="transparent">
                Transparent
              </Button>
            </Inline>
          </Block>
        ))}
      </Block>
    </WithColorSchemes>

    <Block>
      <Heading level="2">Growing Shrinking Buttons</Heading>
      <Inline>
        <Button flexShrink>A</Button>
        <Button flexGrow tone="positive">
          B
        </Button>
      </Inline>
      <Grid>
        <Button flexShrink>A</Button>
        <Button tone="positive">B</Button>
      </Grid>
    </Block>

    <Panel>
      <Heading level="2">fontSize="0" Buttons</Heading>
      <Text>So cute</Text>
      <Inline>
        <Button fontSize="0">Button</Button>
        <Button fontSize="0" variant="ghost">
          Ghost
        </Button>
        <Button fontSize="0" variant="subtle">
          Subtle
        </Button>
        <Button fontSize="0" icon={<CrescentMoonIcon />}>
          Button
        </Button>
        <Button fontSize="0" busy>
          Button
        </Button>
        <Button fontSize="0" busy variant="ghost">
          Ghost
        </Button>
        <Button fontSize="0" busy variant="subtle">
          Subtle
        </Button>
        <Button fontSize="0" disabled>
          Button
        </Button>
        <Button fontSize="0" disabled variant="ghost">
          Ghost
        </Button>
        <Button fontSize="0" disabled variant="subtle">
          Subtle
        </Button>
      </Inline>
    </Panel>

    <Panel>
      <Heading>Tones</Heading>

      <Grid
        cols={{
          all: 4,
          tablet: 2,
          mobile: 1,
        }}
      >
        {(
          ['accent', 'warn', 'critical', 'promo', 'positive', 'info'] as Tone[]
        ).map((tone) => (
          <Panel key={tone}>
            <Heading>{tone}</Heading>
            {(
              [
                'solid',
                'subtle',
                'ghost',
                'transparent',
                'none',
                'vibrant',
              ] as BoxVariant[]
            ).map((variant) => (
              <Button variant={variant} tone={tone} key={variant}>
                {variant}
              </Button>
            ))}
          </Panel>
        ))}
      </Grid>
    </Panel>

    <Panel>
      <Heading>Unstyled Buttons</Heading>
      <UnstyledButton flexDirection="column" space="5">
        <Heading level="2">Things</Heading>
        <Text secondary>Stuff</Text>
        <Text secondary>Stuff</Text>
        <Text secondary>Stuff</Text>
      </UnstyledButton>
    </Panel>

    <Panel>
      <Heading>Hello</Heading>
      <Text>Buttons in context</Text>
      <Inline>
        <Text>Like this</Text>
        <ButtonLink href="https://eject.invalid" tone="critical">
          Eject
        </ButtonLink>
        <Text>and like this</Text>
      </Inline>
    </Panel>

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
            rounded="0"
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
            rounded="0"
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
            rounded="0"
            variant="subtle"
            flexDirection="column"
            textAlign="start"
          >
            💩
          </Button>
        </Block>
      </Panel>

      <Panel>
        <ButtonIcon
          component="div"
          variant="transparent"
          label=""
          icon={<HelpIcon />}
        />
      </Panel>
    </Block>
  </>
);
