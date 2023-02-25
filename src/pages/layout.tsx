import type { FC } from 'react';
import {
  Badge,
  Block,
  Button,
  Heading,
  Inline,
  Panel,
  Text,
} from '../../lib/main.js';

export const LayoutPage: FC = () => (
  <Panel variant="ghost" space="huge">
    <Block>
      <Block>
        <Badge>Block</Badge>
        <Button>Block</Button>
        <Button>Block</Button>
        <Button>Block</Button>
      </Block>
    </Block>
    <Block>
      <Inline>
        <Text>Inline</Text>
        <Button>Inline</Button>
        <Button>Inline</Button>
      </Inline>
    </Block>

    <Heading>Inline justifySelf</Heading>
    <Panel variant="ghost">
      <Inline justifySelf="start">
        <Badge>start</Badge>
      </Inline>
      <Inline justifySelf="center">
        <Badge>center</Badge>
      </Inline>
      <Inline justifySelf="end">
        <Badge>end</Badge>
      </Inline>
    </Panel>

    <Heading>Block justifySelf</Heading>
    <Panel variant="ghost" style={{ height: '20rem' }}>
      <Block justifySelf="start">
        <Badge>start</Badge>
      </Block>
      <Block justifySelf="center">
        <Badge>center</Badge>
      </Block>
      <Block justifySelf="end">
        <Badge>end</Badge>
      </Block>
    </Panel>
  </Panel>
);
