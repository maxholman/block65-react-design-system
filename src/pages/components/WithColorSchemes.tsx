import type { FC, PropsWithChildren } from 'react';
import { Block, DesignSystem, Grid, Heading } from '../../../lib/main.js';
import type { ColorScheme } from '../../reference-impl/main.js';

export const WithColorSchemes: FC<PropsWithChildren> = ({ children }) => (
  <Grid cols={1}>
    {(['dark', 'light'] satisfies ColorScheme[]).map((scheme) => (
      <DesignSystem key={scheme} padding="10">
        <Block>
          <Heading level="5">[{scheme}]</Heading>
          {children}
        </Block>
      </DesignSystem>
    ))}
  </Grid>
);
