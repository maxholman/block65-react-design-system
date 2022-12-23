import type { FC } from 'react';
import { Callout, Grid, Heading, Panel, Text } from '../../lib/main.js';

export const CalloutPage: FC = () => (
  <Panel variant="ghost" space="huge">
    <Callout tone="critical">
      <Text>Critical</Text>
    </Callout>
    <Callout tone="info">
      <Text>Informative!</Text>
    </Callout>
    <Callout tone="positive">
      <Text>Overwhelmingly positive!</Text>
    </Callout>
    <Callout tone="promo">
      <Text>Promotional</Text>
    </Callout>
    <Callout tone="warn">
      <Text>Warning!</Text>
    </Callout>

    <Grid>
      <Callout tone="positive">
        <Text>Overwhelmingly positive!</Text>
      </Callout>
      <Callout tone="positive">
        <Text>Overwhelmingly positive!</Text>
      </Callout>
      <Callout tone="positive">
        <Text>Overwhelmingly positive!</Text>
      </Callout>
      <Callout tone="positive">
        <Text>Overwhelmingly positive!</Text>
      </Callout>
      <Callout tone="positive">
        <Text>Overwhelmingly positive!</Text>
      </Callout>
      <Callout tone="positive">
        <Text>Overwhelmingly positive!</Text>
      </Callout>
    </Grid>

    <Heading level="1">Text Align</Heading>

    <Grid>
      <Panel>
        <Heading level="5">LTR</Heading>
        <Text textAlign="start">Start</Text>
        <Text textAlign="center">Center</Text>
        <Text textAlign="end">End</Text>
      </Panel>

      <Panel dir="rtl">
        <Heading level="5">RTL</Heading>
        <Text textAlign="start">הַתחָלָה</Text>
        <Text textAlign="center">הַתחָלָה</Text>
        <Text textAlign="end">סוֹף</Text>
      </Panel>
    </Grid>
  </Panel>
);
