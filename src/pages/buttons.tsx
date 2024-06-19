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
  Heading,
  Inline,
  Panel,
  Paragraph,
  UnstyledButton,
} from '../../lib/main.js';
import { CrescentMoonIcon, SunIcon } from './components/icons.js';

const variants = [
  'primary',
  'default',
  'danger',
  'inactive',
  'invisible',
] satisfies ButtonVariant[];

export const ButtonsPage: FC = () => (
  <>
    <Panel>
      <Heading>Vanilla</Heading>

      <Inline flexWrap>
        {variants.map((variant) => (
          <Button variant={variant} key={variant}>
            {variant}
          </Button>
        ))}
      </Inline>
    </Panel>

    <Panel>
      <Heading>Disabled</Heading>

      <Inline flexWrap>
        {variants.map((variant) => (
          <Button disabled variant={variant} key={variant}>
            {variant}
          </Button>
        ))}
      </Inline>
    </Panel>

    <Panel>
      <Heading>Links</Heading>

      <Inline flexWrap>
        {variants.map((variant) => (
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
      <Heading>With Start Icons</Heading>

      <Inline flexWrap>
        {variants.map((variant) => (
          <Button icon={<CrescentMoonIcon />} variant={variant} key={variant}>
            {variant}
          </Button>
        ))}
      </Inline>
    </Panel>

    <Panel>
      <Heading>With End Icons</Heading>

      <Inline flexWrap>
        {variants.map((variant) => (
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
      <Heading>Button Icons</Heading>
      <Inline>
        {variants.map((variant) => (
          <ButtonIcon
            icon={<SunIcon />}
            label="Sun"
            variant={variant}
            key={variant}
          />
        ))}
      </Inline>
    </Panel>

    <Panel>
      <Heading>Busy Buttons</Heading>
      <ExactText>These buttons are super busy</ExactText>
      <Inline>
        {variants.map((variant) => (
          <Button busy variant={variant} key={variant}>
            {variant}
          </Button>
        ))}
      </Inline>
    </Panel>

    <Panel>
      <Heading>Small buttons</Heading>
      <Paragraph>OMG So cute!</Paragraph>
      <Inline>
        {variants.map((variant) => (
          <>
            <Button size="small" icon={<CrescentMoonIcon />}>
              small
            </Button>

            <Button size="small" busy variant={variant} key={variant}>
              {variant} busy
            </Button>
            <Button size="small" disabled variant={variant} key={variant}>
              {variant} disabled
            </Button>
          </>
        ))}
      </Inline>
    </Panel>

    <Panel>
      <Heading>bui bui buttons</Heading>
      <Paragraph>So fat!</Paragraph>
      <Inline>
        {variants.map((variant) => (
          <>
            <Button size="large" icon={<CrescentMoonIcon />}>
              large
            </Button>

            <Button size="large" busy variant={variant} key={variant}>
              {variant} busy
            </Button>
            <Button size="large" disabled variant={variant} key={variant}>
              {variant} disabled
            </Button>
          </>
        ))}
      </Inline>
    </Panel>

    <Panel>
      <Heading>Unstyled Buttons with stuff inside</Heading>
      <UnstyledButton flexDirection="column" space="5">
        <Heading>Things</Heading>
        <ExactText secondary>Stuff</ExactText>
        <ExactText secondary>Stuff</ExactText>
        <ExactText secondary>Stuff</ExactText>
      </UnstyledButton>
    </Panel>

    <Divider marginBlock="3" />

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
          <Button fontSize="5" icon={<CrescentMoonIcon />}>
            Eject
          </Button>
          <ButtonLink
            fontSize="5"
            href="https://eject.invalid"
            icon={<CrescentMoonIcon />}
          >
            Eject
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
