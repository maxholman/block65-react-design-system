import { forwardRef, type FC, type ForwardedRef } from 'react';
import { Box, type BoxProps } from './box.js';
import type { Falsy, Merge, ReactHTMLElementsHacked } from './types.js';
import {
  codeClassName,
  secondaryClassName,
  type FontSize,
  type FontWeight,
  type LineHeight,
  type TextWrap,
} from './typography.css.js';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

export type { FontSize, FontWeight, LineHeight, TextWrap };

export type CommonTextProps = {
  secondary?: true | Falsy;
  flexDirection?: never;
  flexWrap?: never;
  space?: never;
  overflow?: never;
};

export type ParagraphProps<T extends keyof ReactHTMLElementsHacked = 'p'> =
  Merge<BoxProps<T>, CommonTextProps>;

export type ExactTextProps<T extends keyof ReactHTMLElementsHacked = 'p'> =
  Merge<BoxProps<T>, CommonTextProps>;

export type HeadingProps<T extends keyof ReactHTMLElementsHacked = 'p'> = Merge<
  BoxProps<T>,
  CommonTextProps & { level?: HeadingLevel }
>;

function headingProps(
  level: HeadingLevel,
): Partial<HeadingProps<`h${HeadingLevel}`>> {
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
      return {
        fontSize: '1',
        secondary: true,
        fontWeight: 'medium',
      };
    case '6':
      return {
        fontSize: '0',
        secondary: true,
        fontWeight: 'medium',
      };
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
      capSize="1"
      {...props}
    />
  ),
);

export const Heading = forwardRef(
  <T extends keyof ReactHTMLElementsHacked = 'h3'>(
    {
      level = '3',
      component = `h${level}`,
      className,
      secondary,
      ...props
    }: HeadingProps<T>,
    forwardedRef: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => {
    const { secondary: headingIsSecondary, ...rest } = headingProps(level);
    return (
      <Box
        component={component}
        ref={forwardedRef}
        lineHeight="heading"
        className={[
          className,
          (headingIsSecondary || secondary) && secondaryClassName,
        ]}
        {...rest}
        {...props}
      />
    );
  },
);

export const Paragraph = forwardRef(
  <T extends keyof ReactHTMLElementsHacked = 'p'>(
    { component = 'p', className, secondary, ...props }: ParagraphProps<T>,
    forwardedRef: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => (
    <Box
      component={component}
      ref={forwardedRef}
      className={[className, secondary && secondaryClassName]}
      lineHeight="paragraph"
      {...props}
    />
  ),
);

export const Strong: FC<BoxProps<'span'>> = (props) => (
  <Box component="span" fontWeight="bold" {...props} />
);

export const Code: FC<ParagraphProps<'code'>> = ({
  className,
  secondary,
  ...props
}) => (
  <Box
    component="code"
    {...props}
    className={[className, secondary && secondaryClassName, codeClassName]}
  />
);

export const Secondary: FC<ParagraphProps<'span'>> = ({
  className,
  secondary,
  ...props
}) => (
  <Box
    component="span"
    className={[className, secondaryClassName]}
    {...props}
  />
);
