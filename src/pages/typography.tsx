import type { FC } from 'react';
import {
  Block,
  Divider,
  Grid,
  Heading,
  Panel,
  Secondary,
  Strong,
  Text,
  TextLink,
} from '../../lib/main.js';

export const TypographyPage: FC = () => (
  <Panel variant="ghost" space="huge">
    <Block>
      <Block space="none">
        <Heading level="1">Heading 1</Heading>
        <Divider />
      </Block>
    </Block>
    <Block>
      <Heading level="1">Heading 1</Heading>
      <Text>Normal Text</Text>
      <Heading level="2">Heading 2</Heading>
      <Text>Normal Text</Text>
      <Heading level="3">Heading 3</Heading>
      <Text>Normal Text</Text>
      <Heading level="4">Heading 4</Heading>
      <Text>Normal Text</Text>
      <Heading level="5">Heading 5</Heading>
      <Text>
        Normal Text looks like this, and <Secondary>secondary text</Secondary>{' '}
        looks like that
      </Text>
      <Text>
        <Strong>Strong text</Strong> is strong.
      </Text>
      <Text size="small">
        Small text is small and can be <Strong>strong too</Strong>.
      </Text>
      <Text>
        <Strong>Strong text</Strong> is strong.
      </Text>
      <Text>
        Sometimes I like to look at{' '}
        <TextLink href="/buttons">button components</TextLink> and{' '}
        <TextLink href="/panels" weight="strong">
          strong panels
        </TextLink>{' '}
        or{' '}
        <TextLink href="/buttons" weight="weak">
          weak badges
        </TextLink>{' '}
        on my computer.
      </Text>
    </Block>
    <Block>
      <Heading level="1">
        Sometimes I like to look at{' '}
        <TextLink href="/buttons">button components</TextLink> or on my
        computer.
      </Heading>
    </Block>

    <Heading level="1">Text Align</Heading>

    <Grid>
      <Panel>
        <Heading level="5">LTR</Heading>
        <Text textAlign="start">Start</Text>
        <Text textAlign="center">Center</Text>
        <Text textAlign="end">End</Text>
      </Panel>

      <Panel dir="rtl">
        <Heading level="5">RTL</Heading>
        <Text textAlign="start">הַתחָלָה</Text>
        <Text textAlign="center">הַתחָלָה</Text>
        <Text textAlign="end">סוֹף</Text>
      </Panel>
    </Grid>
  </Panel>
);
