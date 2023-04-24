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
import { toneVariants, type Tone } from './tone.css.js';
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
> = ({ children, className, rounded = 'medium', tone = 'info', ...props }) => {
  return (
    <Inline
      component="div"
      background="3"
      rounded={rounded}
      className={[
        className,
        calloutClass,
        fontSizeVariants[1],
        toneVariants[tone],
      ]}
      role="alert"
      aria-live="polite"
      {...props}
    >
      <div className={calloutTextIconWrapperClass}>
        <InfoIcon className={calloutTextIconClass} />
      </div>
      <Text className={calloutTextClass} tone={tone}>
        {children}
      </Text>
    </Inline>
  );
};
