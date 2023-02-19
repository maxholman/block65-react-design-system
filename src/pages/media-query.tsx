import type { FC } from 'react';
import { Block, Box } from '../../lib/main.js';

export const MediaQueryPage: FC = () => (
  <>
    <Box borderWeight={'strong'}>
      <Block
        space="medium"
        margin={{
          all: 'medium',
          wide: 'huge',
          mobile: 'small',
        }}
        flexDirection={{
          all: 'row',
          tablet: 'column',
        }}
      >
        <Block>Responsive 1</Block>
        <Block>Responsive 2</Block>
      </Block>
    </Box>
  </>
);
