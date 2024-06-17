import type { FC } from 'react';
import {
  Badge,
  Block,
  Grid,
  Heading,
  Inline,
  Button,
  Panel,
  ExactText,
} from '../../lib/main.js';

export const LayoutPage: FC = () => (
  <Panel>
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
        <ExactText>Text</ExactText>
        <Button>Button</Button>
        <Button>Button</Button>
      </Inline>
    </Block>

    <Heading>Inline justifySelf (Grid Only)</Heading>
    <Panel>
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
