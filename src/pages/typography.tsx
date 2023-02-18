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
    <Block space="large">
      <Heading level="2">Text is texty</Heading>

      <Text>
        Normal text is normal. Normal text is normal. Normal text is normal.
        Normal text is normal. Normal text is normal. Normal text is normal.
        <Secondary>Secondary text</Secondary> looks like that.{' '}
        <Strong>Strong text</Strong> is strong. Normal text is normal. Normal
        text is normal. Normal text is normal. Normal text is normal. Normal
        text is normal. <Strong>Strong text</Strong> is strong. Normal text is
        normal. Normal text is normal. Normal text is normal.{' '}
        <Secondary>Secondary text</Secondary> looks like that. Normal text is
        normal. Normal text is normal. Normal text is normal. Normal text is
        normal. Normal text is normal. Normal text is normal.{' '}
        <Strong>Strong text</Strong> is strong. Normal text is normal. Normal
        text is normal. Normal text is normal. Normal text is normal.{' '}
        <Secondary>Secondary text</Secondary> looks like that. Normal text is
        normal.
      </Text>

      <Text>
        <Strong>Strong text</Strong> is strong.
      </Text>

      <Text>
        <Secondary>Secondary text</Secondary> looks like that
      </Text>

      <Text fontSize="small">
        PS: Small text is small and can be <Strong>strong text</Strong> or{' '}
        <Secondary>secondary text</Secondary> too.
      </Text>
    </Block>

    <Block>
      <Heading level="2">Links are linky</Heading>

      <Text>
        Sometimes I like to look at{' '}
        <TextLink href="/buttons">normal buttons</TextLink>,{' '}
        <TextLink href="/panels" weight="strong">
          strong panels
        </TextLink>{' '}
        or{' '}
        <TextLink href="/badges" weight="weak">
          weak badges
        </TextLink>
      </Text>
    </Block>

    <Divider />

    <Block space="huge">
      <Heading level="2">Headings are heady</Heading>

      <Block>
        <Block space="none">
          <Heading level="1">Heading 1</Heading>
          <Divider />
        </Block>
        <Text>With fake underline</Text>
      </Block>

      <Divider />

      <Heading>Size overrides</Heading>
      <Block>
        <Heading level="5" fontSize="huge">
          Heading 5
        </Heading>
        <Heading level="1">Heading 1</Heading>
        <Heading level="1" fontSize="normal">
          Heading 1
        </Heading>
      </Block>

      <Divider />

      <Block>
        <Heading level="2">Heading 2</Heading>
        <Text>Normal Text</Text>
      </Block>
      <Block>
        <Heading level="3">Heading 3</Heading>
        <Text>Normal Text</Text>
      </Block>
      <Block>
        <Heading level="4">Heading 4</Heading>
        <Text>Normal Text</Text>
      </Block>
      <Block>
        <Heading level="5">Heading 5</Heading>
        <Text>Normal Text</Text>
      </Block>
    </Block>

    <Divider />

    <Block>
      <Heading level="1">Text Align</Heading>

      <Grid>
        <Panel variant="ghost">
          <Heading level="5">LTR</Heading>
          <Text textAlign="start">Start</Text>
          <Text textAlign="center">Center</Text>
          <Text textAlign="end">End</Text>
        </Panel>

        <Panel variant="ghost" dir="rtl">
          <Heading level="5">RTL</Heading>
          <Text textAlign="start">הַתחָלָה</Text>
          <Text textAlign="center">הַתחָלָה</Text>
          <Text textAlign="end">סוֹף</Text>
        </Panel>
      </Grid>
    </Block>
  </Panel>
);
