import { forwardRef, type FC, type ForwardedRef } from 'react';
import { Box, type BoxProps } from './box.js';
import type { Falsy, Merge, ReactHTMLElementsHacked } from './types.js';
import {
  codeClassName,
  secondaryClassName,
  type FontSize,
  type FontWeight,
  type HeadingLevel,
  type LineHeight,
  type TextWrap,
} from './typography.css.js';

export type { FontSize, FontWeight, HeadingLevel, LineHeight, TextWrap };

export type CommonTextProps = {
  secondary?: true | Falsy;
};

export type ParagraphProps<T extends keyof ReactHTMLElementsHacked = 'p'> =
  Omit<
    Merge<BoxProps<T>, CommonTextProps>,
    'flexDirection' | 'flexWrap' | 'space' | 'overflow' | 'capSize'
  >;

export type ExactTextProps<T extends keyof ReactHTMLElementsHacked = 'p'> =
  Omit<
    Merge<BoxProps<T>, CommonTextProps>,
    'flexDirection' | 'flexWrap' | 'space' | 'overflow' | 'fontSize'
  >;

export type HeadingProps = ParagraphProps & {
  level?: HeadingLevel;
};

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

export const ExactText = forwardRef(
  <T extends keyof ReactHTMLElementsHacked = 'span'>(
    { component = 'span', className, secondary, ...props }: ExactTextProps<T>,
    forwardedRef: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => (
    <Box
      component={component}
      ref={forwardedRef}
      className={[className, secondary && secondaryClassName]}
      {...props}
      capSize="1"
    />
  ),
);

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, secondary, level = '3', ...props }, ref) => {
    const { secondary: headingIsSecondary, ...rest } = headingProps(level);
    return (
      <Box
        ref={ref}
        lineHeight="heading"
        className={[
          className,
          (headingIsSecondary || secondary) && secondaryClassName,
        ]}
        component={`h${level}`}
        {...rest}
        {...props}
      />
    );
  },
);

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, secondary, ...props }, ref) => (
    <Box
      ref={ref}
      className={[className, secondary && secondaryClassName]}
      lineHeight="paragraph"
      component="p"
      {...props}
    />
  ),
);

export const Strong: FC<BoxProps<'span'>> = (props) => (
  <Box component="span" fontWeight="bold" {...props} />
);

export const Code: FC<BoxProps<'code'>> = ({ className, ...props }) => (
  <Box component="code" {...props} className={[className, codeClassName]} />
);

export const Secondary: FC<BoxProps<'span'>> = ({ className, ...props }) => (
  <Box
    component="span"
    className={[className, secondaryClassName]}
    {...props}
  />
);
