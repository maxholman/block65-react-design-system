import type { FC } from 'react';
import { Block, Button, Inline, Panel, Text } from '../../lib/main.js';

export const LayoutPage: FC = () => (
  <Panel variant="ghost">
    <Block>Layouts are tight!</Block>
    <Block>
      <Block>
        <Text>Block</Text>
        <Button>Button</Button>
        <Button>Button</Button>
      </Block>
    </Block>
    <Block>
      <Inline>
        <Text>Inline</Text>
        <Button>Button</Button>
        <Button>Button</Button>
      </Inline>
    </Block>
  </Panel>
);
