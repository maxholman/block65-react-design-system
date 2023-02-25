import type { FC } from 'react';
import { Block, Box, Grid } from '../../lib/main.js';

export const MediaQueryPage: FC = () => (
  <>
    <Box borderWeight="strong">
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

      <Grid
        cols={{
          mobile: 1,
          tablet: 2,
          desktop: 3,
          wide: 4,
        }}
      >
        <Block>Responsive 1</Block>
        <Block>Responsive 2</Block>

        <Block>Responsive 3</Block>
        <Block>Responsive 4</Block>

        <Block>Responsive 5</Block>
        <Block>Responsive 6</Block>
      </Grid>
    </Box>
  </>
);
