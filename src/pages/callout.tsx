import type { FC } from 'react';
import { Callout, Grid } from '../../lib/main.js';
import { WithColorSchemes } from './components/WithColorSchemes.js';

export const CalloutPage: FC = () => (
  <WithColorSchemes>
    <Callout tone="critical">Critical</Callout>
    <Callout tone="critical">
      Critical. Critical. Critical. Critical. Critical. Critical. Critical.
      Critical. Critical. Critical.Critical. Critical. Critical. Critical.
      Critical. Critical. Critical.Critical. Critical. Critical. Critical.
      Critical. Critical. Critical. Critical. Critical. Critical.Critical.
      Critical. Critical. Critical. Critical. Critical. Critical.
    </Callout>
    <Callout tone="info">Info</Callout>
    <Callout tone="positive">Positive</Callout>
    <Callout tone="promo">Promo</Callout>
    <Callout tone="warn">Warning</Callout>

    <Grid>
      <Callout tone="positive">Overwhelmingly positive!</Callout>
      <Callout tone="positive">Overwhelmingly positive!</Callout>
      <Callout tone="positive">Overwhelmingly positive!</Callout>
      <Callout tone="positive">Overwhelmingly positive!</Callout>
      <Callout tone="positive">Overwhelmingly positive!</Callout>
      <Callout tone="positive">Overwhelmingly positive!</Callout>
    </Grid>
  </WithColorSchemes>
);
