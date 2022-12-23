import type { FC } from 'react';
import { calloutClass } from './callout.css.js';
import { Box, BoxBasedComponentProps } from './core.js';
import { Info } from './icons.js';
import { alignItems } from './layout.css.js';
import { Inline } from './layout.js';
import { Tone, toneVariants } from './tone.css.js';
import type { Merge } from './types.js';

export const Callout: FC<
  Merge<
    BoxBasedComponentProps<'div'>,
    {
      tone?: Exclude<Tone, 'accent'>;
      align?: never;
    }
  >
> = ({ children, className, tone = 'info', ...props }) => (
  <Box
    component="div"
    className={[toneVariants[tone], calloutClass, className]}
    role="alert"
    aria-live="polite"
    {...props}
  >
    <Inline space="tiny" className={alignItems.center}>
      <Info />
      {children}
    </Inline>
  </Box>
);
