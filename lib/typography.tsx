import { forwardRef, type FC, type PropsWithChildren } from 'react';
import type { Falsy, TextAlign, TextOverflow } from './core.css.js';
import { Box, type BoxBasedComponentProps } from './core.js';
import { toneVariants, type Tone } from './tone.css.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';
import {
  codeClass,
  fontSizeVariants,
  headingVariantClasses,
  secondaryClass,
  strongClass,
  textClass,
  type FontSize,
  type HeadingLevel,
} from './typography.css.js';

// exported types to assist with consumers who create augmented components
export type { FontSize, HeadingLevel, TextOverflow, TextAlign };

export type HeadingProps = PropsWithChildren<
  Merge<
    BoxProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>,
    {
      level?: HeadingLevel;
    } & CommonTextProps
  >
>;

type CommonTextProps = {
  // font size is only available on Text to encourage its use
  fontSize?: FontSize | Falsy;
  secondary?: boolean | Falsy;
  tone?: Tone | Falsy;
};

export type TextProps<T extends keyof ReactHTMLAttributesHacked> =
  PropsWithChildren<Merge<BoxBasedComponentProps<T>, CommonTextProps>>;

export const Text = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'p'>(
    {
      component = 'p',
      fontSize = '1',
      tone = 'neutral',
      className,
      secondary,
      ...props
    }: TextProps<T>,
    ref: React.ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => (
    <Box
      ref={ref}
      component={component}
      className={[
        className,
        textClass,
        fontSize && fontSizeVariants[fontSize],
        tone && toneVariants[tone],
        secondary && secondaryClass,
      ]}
      {...props}
    />
  ),
);

export const Strong: FC<BoxProps<'span'>> = ({ className, ...props }) => (
  <Box component="span" {...props} className={[strongClass, className]} />
);

export const Code: FC<BoxProps<'code'>> = ({ className, ...props }) => (
  <Box component="code" {...props} className={[codeClass, className]} />
);

export const Secondary: FC<BoxProps<'span'>> = ({ className, ...props }) => (
  <Box component="span" className={[secondaryClass, className]} {...props} />
);

function headingProps(level: HeadingLevel): CommonTextProps {
  switch (level) {
    case '1':
      return { fontSize: '5' };
    case '2':
      return { fontSize: '4' };
    case '3':
      return { fontSize: '3' };
    case '4':
      return { fontSize: '2' };
    case '5':
      return { fontSize: '1', secondary: true };
    case '6':
      return { fontSize: '0', secondary: true };
    default:
      return { fontSize: '1' };
  }
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = '3', className, ...props }, ref) => (
    <Text
      ref={ref}
      component={`h${level}`}
      className={[className, headingVariantClasses[level]]}
      {...headingProps(level)}
      {...props}
    />
  ),
);
