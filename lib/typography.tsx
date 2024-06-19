import {
  forwardRef,
  type FC,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react';
import styles from './typography.module.scss';
import { Box, type BoxProps } from './core.js';
import type { Falsy, Merge, ReactHTMLElementsHacked } from './types.js';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';
export type FontSize = '00' | '0' | '1' | '2' | '3' | '4' | '5' | '6';
export type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type LineHeight = 'normal' | 'paragraph' | 'heading';
export type TextWrap = 'pretty' | 'balance' | 'nowrap';

type CommonTextProps = {
  secondary?: true | Falsy;
};

export type TextProps<T extends keyof ReactHTMLElementsHacked = 'p'> =
  PropsWithChildren<
    Merge<
      Omit<BoxProps<T>, 'flexDirection' | 'flexWrap' | 'space' | 'overflow'>,
      CommonTextProps
    >
  >;

export const ExactText = forwardRef(
  <T extends keyof ReactHTMLElementsHacked = 'span'>(
    {
      component = 'span',
      className,
      secondary,
      children,
      ...props
    }: TextProps<T>,
    forwardedRef: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => (
    <Box
      component={component}
      ref={forwardedRef}
      className={[className, secondary && styles.secondary]}
      {...props}
    >
      {children}
    </Box>
  ),
);

export const Strong: FC<BoxProps<'span'>> = (props) => (
  <Box component="span" fontWeight="bold" {...props} />
);

export const Code: FC<BoxProps<'code'>> = ({ className, ...props }) => (
  <Box component="code" {...props} className={[className, styles.code]} />
);

export const Secondary: FC<BoxProps<'span'>> = ({ className, ...props }) => (
  <Box component="span" className={[className, styles.secondary]} {...props} />
);

function headingProps(level: HeadingLevel): HeadingProps {
  switch (level) {
    case '1':
      return { fontSize: '5', fontWeight: 'bold' };
    case '2':
      return { fontSize: '4', fontWeight: 'bold' };
    case '3':
      return { fontSize: '3', fontWeight: 'semibold' };
    case '4':
      return { fontSize: '2', fontWeight: 'semibold' };
    case '5':
      return { fontSize: '1', secondary: true, fontWeight: 'medium' };
    case '6':
      return { fontSize: '0', secondary: true, fontWeight: 'medium' };
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
  ({ level = '3', ...props }, ref) => (
    <ExactText
      ref={ref}
      lineHeight="heading"
      component={`h${level}`}
      {...headingProps(level)}
      {...props}
    />
  ),
);

export const Paragraph = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, ...props }, ref) => (
    <ExactText ref={ref} lineHeight="paragraph" component="p" {...props} />
  ),
);
