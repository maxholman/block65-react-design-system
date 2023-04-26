import type { FC } from 'react';
import { Block, Grid, Heading, Panel } from '../../lib/main.js';
import { LoginPattern } from '../patterns/login.js';

export const PatternPage: FC = () => (
  <>
    <Grid cols={3}>
      <Block>
        <Heading>Login</Heading>
        <Panel variant={null} background="0" boxShadow="4" padding="10">
          <LoginPattern />
        </Panel>
      </Block>
    </Grid>
  </>
);
