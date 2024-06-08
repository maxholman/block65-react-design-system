import type { FC } from 'react';
import { Grid, Heading, Spinner, Text } from '../../lib/main.js';
import { Button, Callout, Panel } from '../reference-impl/main.js';

export const LoadersPage: FC = () => (
  <>
    <Heading>The worlds busiest page</Heading>

    <Grid
      cols={{
        all: 3,
        desktop: 4,
        mobile: 2,
      }}
    >
      <Panel variant="ghost">
        <Text>
          MMMMM
          <Spinner inline />
          BBBBB
        </Text>
      </Panel>

      <Panel variant="ghost">
        <Text secondary>
          MMMMM
          <Spinner inline />
          BBBBB
        </Text>
      </Panel>

      <Panel variant="ghost">
        <Text>MMMMM </Text>
        <Spinner inline />
        <Text>BBBBB</Text>
      </Panel>

      <Panel variant="ghost">
        <Text secondary>MMMMM </Text>
        <Spinner inline />
        <Text secondary>BBBBB</Text>
      </Panel>

      <Spinner size="1" />
      <Spinner size="5" />
      <Spinner size="1" />
      <Spinner size="5" />
      <Spinner size="1" />
    </Grid>

    <Grid>
      <Panel alignItems="center">
        <Spinner size="1" />
        <Spinner size="2" />
        <Spinner size="3" />
        <Spinner size="4" />
        <Spinner size="5" />
      </Panel>
      <Panel alignItems="center" variant="solid">
        <Spinner size="1" />
        <Spinner size="2" />
        <Spinner size="3" />
        <Spinner size="4" />
        <Spinner size="5" />
      </Panel>
      <Panel>
        <Callout>
          MMMMM
          <Spinner />
          BBBBB test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
        </Callout>
      </Panel>
      <Panel>
        <Button>
          Spinner in a
          <Spinner />
          button
        </Button>
        <Button variant="ghost">
          Spinner in a
          <Spinner />
          button
        </Button>
      </Panel>
    </Grid>
  </>
);
