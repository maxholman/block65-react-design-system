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
  levelVariantClasses,
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
    BoxBasedComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>,
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
      fontSize = 'normal',
      className,
      tone,
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

export const Strong: FC<BoxBasedComponentProps<'span'>> = ({
  className,
  ...props
}) => <Box component="span" {...props} className={[strongClass, className]} />;

export const Code: FC<BoxBasedComponentProps<'code'>> = ({
  className,
  ...props
}) => <Box component="code" {...props} className={[codeClass, className]} />;

export const Secondary: FC<BoxBasedComponentProps<'span'>> = ({
  className,
  ...props
}) => (
  <Box component="span" className={[secondaryClass, className]} {...props} />
);

function headingProps(level: HeadingLevel): CommonTextProps {
  switch (level) {
    case '1':
      return { fontSize: 'huge' };
    case '2':
      return { fontSize: 'large' };
    case '3':
      return { fontSize: 'medium' };
    case '4':
      return { fontSize: 'normal' };
    case '5':
      return { fontSize: 'normal', secondary: true };
    default:
      return { fontSize: 'normal' };
  }
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = '3', className, children, ...props }, ref) => {
    const textProps = headingProps(level);

    return (
      <Text
        ref={ref}
        component={`h${level}`}
        className={[levelVariantClasses[level], className]}
        // have to force this to null to avoid the default value
        fontSize={null}
        {...textProps}
        {...props}
      >
        {children}
      </Text>
    );
  },
);
