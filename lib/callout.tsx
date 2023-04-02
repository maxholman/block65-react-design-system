import type { FC } from 'react';
import {
  calloutClass,
  calloutTextClass,
  calloutTextIconClass,
  calloutTextIconWrapperClass,
} from './callout.css.js';
import type { BoxBasedComponentProps } from './core.js';
import { useStringLikeDetector } from './hooks/use-string-like.js';
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
> = ({ children, className, rounded = 'medium', tone = 'info', ...props }) => {
  const isStringLike = useStringLikeDetector();

  return (
    <Inline
      component="div"
      rounded={rounded}
      className={[
        calloutClass,
        toneVariants[tone],
        fontSizeVariants[1],
        className,
      ]}
      role="alert"
      aria-live="polite"
      {...props}
    >
      <div className={calloutTextIconWrapperClass}>
        <InfoIcon className={calloutTextIconClass} />
      </div>
      <div className={calloutTextClass}>
        {isStringLike(children) ? <Text>{children}</Text> : children}
      </div>
    </Inline>
  );
};
