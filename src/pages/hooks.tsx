import type { FC } from 'react';
import { useCookieState } from '../../lib/hooks/main.js';
import { FormInput, Panel } from '../../lib/main.js';

export const HooksPage: FC = () => {
  const [cookie, setCookie] = useCookieState<string>('pookiecookie', '🍪', {
    sameSite: 'strict',
  });

  return (
    <Panel overflow="hidden">
      <FormInput
        label="Cookie"
        value={cookie}
        onChange={(e) => setCookie(e.target.value)}
      />
    </Panel>
  );
};
