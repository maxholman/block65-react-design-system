import type { FC } from 'react';
import { Button } from '../../lib/buttons.js';
import { Box } from '../../lib/core.js';
import { Block, Inline } from '../../lib/layout.js';
import { Panel } from '../../lib/panel.js';
import { Secondary, Text } from '../../lib/typography.js';

export const CorePage: FC = () => (
  <Panel variant="ghost">
    <Box component="article">This is a box component as an article</Box>
    <Box component="div">
      This is another box component as a <code>div</code>
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
  </Panel>
);
