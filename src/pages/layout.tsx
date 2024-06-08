import type { FC } from 'react';
import { Badge, Block, Grid, Heading, Inline, Text } from '../../lib/main.js';
import { Button, Panel } from '../reference-impl/main.js';

export const LayoutPage: FC = () => (
  <Panel variant="ghost">
    <Block>
      <Block>
        <Badge>Badge</Badge>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Block>
    </Block>
    <Block>
      <Inline>
        <Text>Text</Text>
        <Button>Button</Button>
        <Button>Button</Button>
      </Inline>
    </Block>

    <Heading>Inline justifySelf (Grid Only)</Heading>
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
    <Grid>
      <Block justifySelf="start">
        <Badge>start</Badge>
      </Block>
      <Block justifySelf="center">
        <Badge>center</Badge>
      </Block>
      <Block justifySelf="end">
        <Badge>end</Badge>
      </Block>
    </Grid>
  </Panel>
);
