import type { FC } from 'react';
import {
  Button,
  Callout,
  Grid,
  Heading,
  Panel,
  Spinner,
  Text,
} from '../../lib/main.js';

export const LoadersPage: FC = () => (
  <>
    <Heading level="3">The worlds busiest page</Heading>

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
      <Panel alignItems="center" variant="solid" background="3">
        <Spinner size="1" />
        <Spinner size="2" />
        <Spinner size="3" />
        <Spinner size="4" />
        <Spinner size="5" />
      </Panel>
      <Panel>
        <Callout>
          <Text>
            <Spinner inline />
            woot
          </Text>
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
