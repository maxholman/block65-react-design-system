import type { FC, PropsWithChildren } from 'react';
import type { TextAlign, TextOverflow } from './core.css.js';
import { Box, BoxBasedComponentProps } from './core.js';
import { inlineAlignSelf } from './layout.css.js';
import { Tone, toneVariants } from './tone.css.js';
import type { Merge } from './types.js';
import {
  codeClass,
  fontClass,
  FontSize,
  HeadingLevel,
  levelVariantClasses,
  secondaryClass,
  strongClass,
  textClass,
} from './typography.css.js';

// export types to assist with consumers who create augmented components
export type { FontSize, HeadingLevel, TextOverflow, TextAlign };

export const Heading: FC<
  PropsWithChildren<
    Merge<
      BoxBasedComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>,
      {
        level?: HeadingLevel;
      }
    >
  >
> = ({ level = '2', ...props }) => (
  <Box
    component={`h${level}`}
    className={levelVariantClasses[level]}
    {...props}
  />
);

export const Text: FC<
  PropsWithChildren<
    Merge<
      BoxBasedComponentProps<'p'>,
      {
        size?: FontSize;
        tone?: Tone | undefined;
      }
    >
  >
> = ({
  className,
  component = 'p',
  size = 'normal',
  tone,
  align,
  ...props
}) => (
  <Box
    component={component}
    className={[
      textClass,
      fontClass[size],
      tone && toneVariants[tone],
      align && inlineAlignSelf[align],
      className,
    ]}
    {...props}
  />
);

export const Strong: FC<BoxBasedComponentProps<'span'>> = ({
  className,
  ...props
}) => <Box component="span" {...props} className={[strongClass, className]} />;

export const Code: FC<BoxBasedComponentProps<'span'>> = ({
  className,
  ...props
}) => <Box component="span" {...props} className={[codeClass, className]} />;

export const Secondary: FC<BoxBasedComponentProps<'span'>> = ({
  className,
  align,
  ...props
}) => (
  <Box component="span" className={[secondaryClass, className]} {...props} />
);
