import type { FC } from 'react';
import { Block, Grid } from '../../lib/main.js';

export const MediaQueryPage: FC = () => (
  <>
    <Block
      margin={{
        all: '3',
        wide: '4',
        mobile: '2',
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
      margin={{
        all: '3',
        wide: '5',
        mobile: '2',
      }}
      cols={{
        tablet: 2,
        mobile: 1,
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
  </>
);
