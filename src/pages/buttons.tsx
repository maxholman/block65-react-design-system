import type { FC } from 'react';
import { HelpIcon } from '../../lib/icons.js';
import type { ButtonVariant } from '../../lib/main.js';
import {
  Block,
  Button,
  ButtonIcon,
  ButtonLink,
  Divider,
  ExactText,
  Grid,
  Heading,
  Inline,
  Panel,
  UnstyledButton,
} from '../../lib/main.js';
import { CrescentMoonIcon, SunIcon } from './components/icons.js';

export const ButtonsPage: FC = () => (
  <>
    <Panel>
      <Heading level="2">Vanilla</Heading>

      <Inline flexWrap>
        {(
          [
            'default',
            'danger',
            'inactive',
            'invisible',
          ] satisfies ButtonVariant[]
        ).map((variant) => (
          <Button variant={variant} key={variant}>
            {variant}
          </Button>
        ))}
      </Inline>
    </Panel>

    <Panel>
      <Heading level="2">Disabled</Heading>

      <Inline flexWrap>
        {(
          [
            'default',
            'danger',
            'inactive',
            'invisible',
          ] satisfies ButtonVariant[]
        ).map((variant) => (
          <Button variant={variant} key={variant}>
            {variant}
          </Button>
        ))}
      </Inline>
    </Panel>

    <Panel>
      <Heading level="2">Links</Heading>

      <Inline flexWrap>
        {(
          [
            'default',
            'danger',
            'inactive',
            'invisible',
          ] satisfies ButtonVariant[]
        ).map((variant) => (
          <ButtonLink
            href="https://eject.invalid"
            variant={variant}
            key={variant}
          >
            {variant}
          </ButtonLink>
        ))}
      </Inline>
    </Panel>

    <Panel>
      <Heading level="2">With Start Icons</Heading>

      <Inline flexWrap>
        {(
          [
            'default',
            'danger',
            'inactive',
            'invisible',
          ] satisfies ButtonVariant[]
        ).map((variant) => (
          <Button icon={<CrescentMoonIcon />} variant={variant} key={variant}>
            {variant}
          </Button>
        ))}
      </Inline>
    </Panel>

    <Panel>
      <Heading level="2">With End Icons</Heading>

      <Inline flexWrap>
        {(
          [
            'default',
            'danger',
            'inactive',
            'invisible',
          ] satisfies ButtonVariant[]
        ).map((variant) => (
          <Button
            iconEnd={<CrescentMoonIcon />}
            variant={variant}
            key={variant}
          >
            {variant}
          </Button>
        ))}
      </Inline>
    </Panel>

    <Panel>
      <Heading level="2">Button Icons</Heading>
      <Inline>
        <ButtonIcon icon={<SunIcon />} label="Sun" />
        <ButtonIcon icon={<SunIcon />} label="Sun" />
        <ButtonIcon icon={<SunIcon />} label="Sun" busy />
        <ButtonIcon icon={<SunIcon />} label="Sun" />
        <ButtonIcon icon={<SunIcon />} label="Sun" busy />
        <ButtonIcon icon={<SunIcon />} label="Sun" />
        <ButtonIcon icon={<SunIcon />} label="Sun" busy />
        <ButtonIcon icon={<SunIcon />} label="Sun" />
        <ButtonIcon icon={<SunIcon />} label="Sun" busy />
      </Inline>
    </Panel>

    <Panel>
      <Heading level="2">Busy Buttons</Heading>
      <ExactText>These buttons are super busy</ExactText>
      <Inline flexWrap>
        <Button busy>Button</Button>
        <Button busy>Ghost</Button>
        <Button busy>Subtle</Button>
        <Button busy>Transparent</Button>
        <Button busy icon={<CrescentMoonIcon />}>
          This one has an Icon
        </Button>
      </Inline>
    </Panel>

    <>
      <Block>
        <Heading level="2">Disabled Buttons</Heading>
        <ExactText>These buttons are physically challenged</ExactText>
        {[false, true].map((disabled) => (
          <Block key={String(disabled)}>
            <Inline>
              <Button disabled={disabled}>Button</Button>
              <Button disabled={disabled}>Ghost</Button>
              <Button disabled={disabled}>Subtle</Button>
              <Button disabled={disabled}>Positive</Button>
              <Button disabled={disabled}>Transparent</Button>
            </Inline>
          </Block>
        ))}
      </Block>
    </>

    <Block>
      <Heading level="2">Growing Shrinking Buttons</Heading>
      <Inline>
        <Button flexShrink>A</Button>
        <Button flexGrow>B</Button>
      </Inline>
      <Grid>
        <Button flexShrink>A</Button>
        <Button>B</Button>
      </Grid>
    </Block>

    <Panel>
      <Heading level="2">capSize="0" Buttons</Heading>
      <ExactText>So cute</ExactText>
      <Inline>
        <Button capSize="0">Button</Button>
        <Button capSize="0">Ghost</Button>
        <Button capSize="0">Subtle</Button>
        <Button capSize="0" icon={<CrescentMoonIcon />}>
          Button
        </Button>
        <Button capSize="0" busy>
          Button
        </Button>
        <Button capSize="0" busy>
          Ghost
        </Button>
        <Button capSize="0" busy>
          Subtle
        </Button>
        <Button capSize="0" disabled>
          Button
        </Button>
        <Button capSize="0" disabled>
          Ghost
        </Button>
        <Button capSize="0" disabled>
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
          [
            'default',
            'danger',
            'invisible',
            'inactive',
            'primary',
          ] satisfies ButtonVariant[]
        ).map((variant) => (
          <Button variant={variant} key={variant}>
            {variant}
          </Button>
        ))}
      </Grid>
    </Panel>

    <Panel>
      <Heading>Unstyled Buttons</Heading>
      <UnstyledButton flexDirection="column" space="5">
        <Heading level="2">Things</Heading>
        <ExactText secondary>Stuff</ExactText>
        <ExactText secondary>Stuff</ExactText>
        <ExactText secondary>Stuff</ExactText>
      </UnstyledButton>
    </Panel>

    <Panel>
      <Heading>Hello</Heading>
      <ExactText>Buttons in context</ExactText>
      <Inline>
        <ExactText>Like this</ExactText>
        <ButtonLink href="https://eject.invalid">Eject</ButtonLink>
        <ExactText>and like this</ExactText>
      </Inline>
    </Panel>

    <Block>
      <Heading>Hello</Heading>
      <ExactText>Buttons in context</ExactText>
      <Inline>
        <ButtonLink href="https://eject.invalid" icon={<CrescentMoonIcon />}>
          Eject
        </ButtonLink>
      </Inline>
      <Divider marginBlock="3" />

      <Heading>Hello</Heading>
      <ExactText>Buttons in context</ExactText>
      <Inline>
        <ExactText>Like this</ExactText>
        <ButtonLink href="https://eject.invalid" icon={<CrescentMoonIcon />}>
          Eject
        </ButtonLink>
        <ExactText>and like this</ExactText>
      </Inline>

      <Heading>Hello</Heading>
      <ExactText>Buttons in context</ExactText>
      <Inline>
        <ExactText>Like this</ExactText>
        <ButtonLink href="https://eject.invalid" icon={<CrescentMoonIcon />}>
          Eject
        </ButtonLink>
        <ExactText>and like this</ExactText>
      </Inline>

      <Panel>
        <Heading>Font Size</Heading>
        <ExactText>Buttons in context</ExactText>
        <Inline>
          <Button capSize="5" icon={<CrescentMoonIcon />}>
            Eject
          </Button>
          <ButtonLink
            capSize="5"
            href="https://eject.invalid"
            icon={<CrescentMoonIcon />}
          >
            Eject
          </ButtonLink>
        </Inline>
      </Panel>

      <Panel>
        <Heading>Padding override</Heading>
        <Inline flexWrap="wrap">
          <Button capSize="5" padding="10" icon={<CrescentMoonIcon />}>
            padding="10"
          </Button>
          <Button capSize="5" paddingInline="10" icon={<CrescentMoonIcon />}>
            paddingInline="10"
          </Button>
          <Button capSize="5" paddingBlock="10" icon={<CrescentMoonIcon />}>
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
            capSize="5"
            padding="10"
            rounded="0"
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
            capSize="5"
            padding="10"
            rounded="0"
            justifyContent="start"
            alignItems="start"
            textAlign="start"
          >
            Buttonish, but notjjjjqqqyyy
          </Button>
          <Button
            capSize="5"
            padding="10"
            rounded="0"
            flexDirection="column"
            textAlign="start"
          >
            💩
          </Button>
        </Block>
      </Panel>

      <Panel>
        <ButtonIcon component="div" label="" icon={<HelpIcon />} />
      </Panel>
    </Block>
  </>
);
