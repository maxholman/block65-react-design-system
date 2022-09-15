import type { FC } from 'react';
import { Box } from '../../lib/core.js';
import { Panel } from '../../lib/panel.js';

export const CorePage: FC = () => (
  <Panel variant="ghost">
    <Box component="article" className="blep">
      This is a box component
    </Box>
    <Box component="div" className={['beep', 'boop']}>
      This is another box component
    </Box>
    <Box component="section" className="blep">
      This is also a box component
    </Box>
  </Panel>
);
