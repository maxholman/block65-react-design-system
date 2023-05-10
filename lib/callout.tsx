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

type CalloutCommonProps = {
  tone?: Exclude<Tone, 'accent'>;
  align?: never;
};

export type CalloutProps = Merge<
  BoxBasedComponentProps<'div'>,
  CalloutCommonProps
>;

export const Callout: FC<CalloutProps> = ({
  tone = 'info',
  children,
  className,
  ...props
}) => (
    <Inline
      component="div"
      background="3"
      rounded="medium"
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
