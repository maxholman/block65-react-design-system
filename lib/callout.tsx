import type { FC } from 'react';
import {
  calloutClass,
  calloutTextClass,
  calloutTextIconClass,
  calloutTextIconWrapperClass,
} from './callout.css.js';
import type { BoxBasedComponentProps } from './core.js';
import { InfoIcon } from './icons.js';
import { Inline } from './layout.js';
import { type Tone, toneVariants } from './tone.css.js';
import type { Merge } from './types.js';
import { fontSizeVariants } from './typography.css.js';
import { Text } from './typography.js';

export const Callout: FC<
  Merge<
    BoxBasedComponentProps<'div'>,
    {
      tone?: Exclude<Tone, 'accent'>;
      align?: never;
    }
  >
> = ({ children, className, tone = 'info', ...props }) => (
  <Inline
    component="div"
    className={[
      calloutClass,
      toneVariants[tone],
      fontSizeVariants.normal,
      className,
    ]}
    role="alert"
    aria-live="polite"
    {...props}
  >
    <span className={calloutTextIconWrapperClass}>
      <InfoIcon className={calloutTextIconClass} />
    </span>
    <span className={calloutTextClass}>
      <Text>{children}</Text>
    </span>
  </Inline>
);
