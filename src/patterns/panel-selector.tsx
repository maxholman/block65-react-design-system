import { Link } from '@block65/mrr';
import {
  ArrowForwardIcon,
  Avatar,
  Block,
  Button,
  Heading,
  ExactText,
  Panel,
} from '../../lib/main.js';

export const SelectorPattern = () => (
  <Link href="">
    <Panel flexDirection="row" component="a">
      <Block>
        <Avatar label="🐱" size="3" />
      </Block>
      <Block flexGrow justifyContent="center">
        <Heading level="5">Hello good evening</Heading>
        <ExactText>I trust you are well</ExactText>
      </Block>

      <Block justifyContent="center">
        <Button icon={<ArrowForwardIcon />}></Button>
      </Block>
    </Panel>
  </Link>
);
