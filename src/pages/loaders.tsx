import type { FC } from 'react';
import {
  Grid,
  Heading,
  Spinner,
  Button,
  Callout,
  Panel,
  ExactText,
} from '../../lib/main.js';

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
      <Panel>
        <ExactText>
          MMMMM
          <Spinner inline />
          BBBBB
        </ExactText>
      </Panel>

      <Panel>
        <ExactText secondary>
          MMMMM
          <Spinner inline />
          BBBBB
        </ExactText>
      </Panel>

      <Panel>
        <ExactText>MMMMM </ExactText>
        <Spinner inline />
        <ExactText>BBBBB</ExactText>
      </Panel>

      <Panel>
        <ExactText secondary>MMMMM </ExactText>
        <Spinner inline />
        <ExactText secondary>BBBBB</ExactText>
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
      <Panel alignItems="center">
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
        <Button>
          Spinner in a
          <Spinner />
          button
        </Button>
      </Panel>
    </Grid>
  </>
);
