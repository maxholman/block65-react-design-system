import { Link } from '@block65/mrr';
import type { FC } from 'react';
import {
  ArrowForwardIcon,
  Avatar,
  Block,
  Button,
  Heading,
  Panel,
  Paragraph,
} from '../../lib/main.js';

export const SelectorPattern: FC = () => (
  <Link href="">
    <Panel flexDirection="row" component="a">
      <Block>
        <Avatar label="🐱" size="3" />
      </Block>
      <Block flexGrow justifyContent="center">
        <Heading level="5">Hello good evening</Heading>
        <Paragraph>I trust you are well</Paragraph>
      </Block>

      <Block justifyContent="center">
        <Button icon={<ArrowForwardIcon />}></Button>
      </Block>
    </Panel>
  </Link>
);
