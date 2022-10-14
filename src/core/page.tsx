import type { FC } from 'react';
import { Button } from '../../lib/buttons.js';
import { Box } from '../../lib/core.js';
import { Block, Inline } from '../../lib/layout.js';
import { Panel } from '../../lib/panel.js';
import { Secondary, Text } from '../../lib/typography.js';

export const CorePage: FC = () => (
  <Panel variant="ghost">
    <Box component="article" className="blep">
      This is a box component as an article
    </Box>
    <Box component="div" className={['beep', 'boop']}>
      This is another box component as adiv
    </Box>
    <Box component="section" className="blep">
      This is also a box component as a section
    </Box>
    <Block space="huge">
      <Text>This is a Text component in a Block Component</Text>
      <Text>This is a Text component in a Block Component</Text>
      <Text>This is a Text component in a Block Component</Text>
      <Text>This is a Text component in a Block Component</Text>
      <Text>This is a Text component in a Block Component</Text>
    </Block>
    <Block space="huge">
      <Inline>
        <Text>
          Text <Secondary>Secondary</Secondary>
        </Text>
        <Text align="end">
          Also Text <Secondary>with also Secondary</Secondary>
        </Text>
        <Button align="end">Parp</Button>
      </Inline>
    </Block>
  </Panel>
);
