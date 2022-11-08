import type { FC } from 'react';
import { Grid } from '../../lib/grid.js';
import { Panel } from '../../lib/panel.js';

export const GridPage: FC = () => (
  <Panel variant="ghost">
    <Grid>
      <Panel variant="subtle">1</Panel>
      <Panel variant="subtle">1</Panel>
      <Panel variant="subtle">1</Panel>
      <Panel variant="subtle">1</Panel>
      <Panel variant="subtle">1</Panel>
      <Panel variant="subtle">1</Panel>
    </Grid>
  </Panel>
);
