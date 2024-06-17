import type { FC } from 'react';
import { Callout, Grid } from '../../lib/main.js';

export const CalloutPage: FC = () => (
  <>
    <Callout>Critical</Callout>
    <Callout>
      Critical. Critical. Critical. Critical. Critical. Critical. Critical.
      Critical. Critical. Critical.Critical. Critical. Critical. Critical.
      Critical. Critical. Critical.Critical. Critical. Critical. Critical.
      Critical. Critical. Critical. Critical. Critical. Critical.Critical.
      Critical. Critical. Critical. Critical. Critical. Critical.
    </Callout>
    <Callout>Info</Callout>
    <Callout>Positive</Callout>
    <Callout>Promo</Callout>
    <Callout>Warning</Callout>

    <Grid>
      <Callout>Overwhelmingly positive!</Callout>
      <Callout>Overwhelmingly positive!</Callout>
      <Callout>Overwhelmingly positive!</Callout>
      <Callout>Overwhelmingly positive!</Callout>
      <Callout>Overwhelmingly positive!</Callout>
      <Callout>Overwhelmingly positive!</Callout>
    </Grid>
  </>
);
