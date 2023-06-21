import { type FC } from 'react';
import { Block, Box, Code, Panel } from '../../lib/main.js';

export const CorePage: FC = () => (
  <>
    <Panel variant="ghost">
      <Box component="article">This is a box component as an article</Box>
      <Box component="div">
        This is another box component as a <Code>div</Code>
      </Box>
      <Box component="section">This is also a box component as a section</Box>
    </Panel>

    <Panel variant="ghost">
      <Block>
        <Box component="time" dateTime={new Date().toJSON()}>
          {new Date().toJSON()}
        </Box>
      </Block>
    </Panel>
  </>
);
