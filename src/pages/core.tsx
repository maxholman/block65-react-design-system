import type { FC } from 'react';
import {
  Block,
  Box,
  Button,
  Code,
  Heading,
  Inline,
  Panel,
  Secondary,
  Text,
} from '../../lib/main.js';

export const CorePage: FC = () => (
  <Panel variant="ghost">
    <Box component="article">This is a box component as an article</Box>
    <Box component="div">
      This is another box component as a <Code>div</Code>
    </Box>
    <Box component="section">This is also a box component as a section</Box>
    <Block>
      <Text>This is a Text component in a Block Component</Text>
      <Text>This is a Text component in a Block Component</Text>
      <Text>This is a Text component in a Block Component</Text>
      <Text>This is a Text component in a Block Component</Text>
      <Text>This is a Text component in a Block Component</Text>
    </Block>
    <Block>
      <Inline>
        <Text>
          Text <Secondary>Secondary</Secondary>
        </Text>
        <Text align="end">
          Align End with <Secondary>Secondary</Secondary>
        </Text>
        <Button align="end">Align End</Button>
      </Inline>
    </Block>

    <Block>
      <Box tooltip={'Hello'} component="time" dateTime={new Date().toJSON()}>
        {new Date().toJSON()}
      </Box>
    </Block>

    <Heading>borderWeight</Heading>
    <Block>
      <Box
        tone="critical"
        borderWeight="none"
        rounded="medium"
        padding="medium"
      >
        <Code>borderWeight="none"</Code>
      </Box>
      <Box
        tone="critical"
        borderWeight="strong"
        rounded="medium"
        padding="medium"
      >
        <Code>borderWeight="strong"</Code>
      </Box>
      <Box tone="promo" borderWeight="strong" rounded="medium" padding="medium">
        <Code>borderWeight="strong"</Code>
      </Box>
      <Box
        tone="positive"
        borderWeight="subtle"
        rounded="medium"
        padding="medium"
      >
        <Code>borderWeight="subtle"</Code>
      </Box>
    </Block>
  </Panel>
);
