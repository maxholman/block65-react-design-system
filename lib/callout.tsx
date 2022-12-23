import type { FC } from 'react';
import {
  calloutChildrenClass,
  calloutClass,
  calloutIconClass,
} from './callout.css.js';
import { Box, BoxBasedComponentProps } from './core.js';
import { Info } from './icons.js';
import { Block } from './layout.js';
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
    <Info className={calloutIconClass} />
    <Block textOverflow="break" className={calloutChildrenClass}>
      {children}
    </Block>
  </Box>
);
