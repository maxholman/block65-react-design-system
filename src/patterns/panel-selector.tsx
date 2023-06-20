import { Link } from '@block65/mrr';
import {
  ArrowForward,
  Avatar,
  Block,
  Button,
  Heading,
  Panel,
  Text,
} from '../../lib/main.js';

export const SelectorPattern = () => (
  <Link href="">
    <Panel variant="subtle-ghost" flexDirection="row" component="a">
      <Block>
        <Avatar label="🐱" size="3" />
      </Block>
      <Block flexGrow justifyContent="center">
        <Heading level="5">Hello good evening</Heading>
        <Text>I trust you are well</Text>
      </Block>

      <Block justifyContent="center">
        <Button variant="transparent" component="div">
          <ArrowForward />
        </Button>
      </Block>
    </Panel>
  </Link>
);
