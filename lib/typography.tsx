import {
  forwardRef,
  type FC,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react';
import type { Falsy, TextOverflow, Tone } from './core.css.js';
import { Box, type BoxProps } from './core.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';
import {
  codeClass,
  headingVariantClasses,
  secondaryClass,
  type HeadingLevel,
} from './typography.css.js';

type CommonTextProps = {
  secondary?: boolean | Falsy;
  tone?: Tone | Falsy;
  textOverflow?: TextOverflow | Falsy;
};

export type TextProps<T extends keyof ReactHTMLAttributesHacked = 'p'> =
  PropsWithChildren<
    Merge<
      Omit<
        BoxProps<T>,
        'flexDirection' | 'flexWrap' | 'space' | 'textOverflow' | 'overflow'
      >,
      CommonTextProps
    >
  >;

export const Text = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'p'>(
    {
      component = 'p',
      className,
      secondary,
      textOverflow,
      children,
      ...props
    }: TextProps<T>,
    forwardedRef: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => (
    <Box
      component={component}
      ref={forwardedRef}
      className={[className, secondary && secondaryClass]}
      fontSize="1"
      {...props}
    >
      {textOverflow && children ? (
        <Box component="span" textOverflow={textOverflow}>
          {children}
        </Box>
      ) : (
        children
      )}
    </Box>
  ),
);

export const Strong: FC<BoxProps<'span'>> = (props) => (
  <Box component="span" fontWeight="semiBold" {...props} />
);

export const Code: FC<BoxProps<'code'>> = ({ className, ...props }) => (
  <Box component="code" {...props} className={[codeClass, className]} />
);

export const Secondary: FC<BoxProps<'span'>> = ({ className, ...props }) => (
  <Box component="span" className={[secondaryClass, className]} {...props} />
);

function headingProps(level: HeadingLevel): HeadingProps {
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
      return {};
  }
}

export type HeadingProps = PropsWithChildren<
  Merge<
    TextProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>,
    {
      level?: HeadingLevel;
    }
  >
>;

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
