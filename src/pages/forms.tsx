import type { FC } from 'react';
import { Grid, Heading, Panel } from '../../lib/main.js';
import { ExampleForm } from './components/ExampleForm.js';

export const FormsPage: FC = () => (
  <Panel>
    <Heading level="1">Example Form</Heading>
    <Grid cols={1} space="14">
      <ExampleForm />
      <ExampleForm />
      <ExampleForm />
      <ExampleForm />
      <ExampleForm />
      <ExampleForm />
    </Grid>
  </Panel>
);
