import type { FC } from 'react';
import { useCookieState, useTraceUpdate } from '../../lib/hooks/main.js';
import { FormInput } from '../../lib/main.js';
import { Panel } from '../reference-impl/main.js';

export const HooksPage: FC = () => {
  const [cookie, setCookie] = useCookieState<string>('pookiecookie', '🍪', {
    sameSite: 'strict',
  });

  // eslint-disable-next-line no-console
  useTraceUpdate({ setCookie }, console.warn);

  return (
    <>
      <Panel variant="ghost" overflow="hidden">
        <FormInput
          label="Cookie"
          value={cookie}
          onChange={(e) => setCookie(e.target.value)}
        />
      </Panel>
    </>
  );
};
