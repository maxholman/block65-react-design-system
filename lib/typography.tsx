import type { FC, PropsWithChildren } from 'react';
import type { TextAlign, TextOverflow } from './core.css.js';
import { Box, BoxBasedComponentProps } from './core.js';
import { inlineAlignSelfVariants } from './layout.css.js';
import { Tone, toneVariants } from './tone.css.js';
import type { Merge, ReactHTMLAttributesHacked } from './types.js';
import {
  codeClass,
  fontSizeVariants,
  levelVariantClasses,
  secondaryClass,
  strongClass,
  textClass,
  type FontSize,
  type HeadingLevel,
} from './typography.css.js';

// export types to assist with consumers who create augmented components
export type { FontSize, HeadingLevel, TextOverflow, TextAlign };

export type HeadingProps = PropsWithChildren<
  Merge<
    BoxBasedComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>,
    {
      level?: HeadingLevel;
    }
  >
>;

export const Heading: FC<HeadingProps> = ({
  level = '2',
  className,
  children,
  ...props
}) => (
  <Box
    component={`h${level}`}
    className={[levelVariantClasses[level], className]}
    {...props}
  >
    {children}
  </Box>
);

type CommonTextProps = {
  size?: FontSize;
  secondary?: boolean;
  tone?: Tone | undefined;
};

export type TextProps<T extends keyof ReactHTMLAttributesHacked> =
  PropsWithChildren<Merge<BoxBasedComponentProps<T>, CommonTextProps>>;

export const Text = <T extends keyof ReactHTMLAttributesHacked>({
  className,
  component,
  size = 'normal',
  tone,
  align,
  secondary,
  children,
  ...props
}: TextProps<T>) => (
  <Box
    className={[
      textClass,
      fontSizeVariants[size],
      tone && toneVariants[tone],
      align && inlineAlignSelfVariants[align],
      secondary && secondaryClass,
      className,
    ]}
    {...props}
  >
    {children}
  </Box>
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
