import type { FC, PropsWithChildren } from 'react';
import {
  DesignSystem,
  Grid,
  type ColorScheme,
  Heading,
  Block,
} from '../../../lib/main.js';

export const WithColorSchemes: FC<PropsWithChildren> = ({ children }) => (
  <Grid cols={1}>
    {(['dark', 'light'] satisfies ColorScheme[]).map((scheme) => (
      <DesignSystem
        key={scheme}
        colorScheme={scheme}
        padding="10"
        background="0"
      >
        <Block>
          <Heading level="5">[{scheme}]</Heading>
          {children}
        </Block>
      </DesignSystem>
    ))}
  </Grid>
);
