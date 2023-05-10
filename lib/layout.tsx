import { forwardRef, type ForwardedRef, type PropsWithChildren } from 'react';
import { type Falsy, type OrResponsive } from './core.css.js';
import { Box, type BoxBasedComponentProps } from './core.js';
import {
  alignItemsVariants,
  alignSelfVariants,
  flexGrowClass,
  flexShrinkClass,
  flexWrapVariants,
  justifyContentVariants,
  justifySelfBlockVariants,
  justifySelfInlineVariants,
  type Placement,
  type Wrap,
} from './layout.css.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';

export type Variant = 'none' | 'solid' | 'ghost' | 'subtle' | 'transparent';

export type FlexProps<T extends keyof ReactHTMLAttributesHacked = 'div'> =
  Merge<
    BoxBasedComponentProps<T>,
    PropsWithChildren<{
      alignSelf?: Placement | Falsy;
      alignItems?: Placement | Falsy;

      justifySelf?: Placement | Falsy;
      justifyContent?: Placement | Falsy;

      flexGrow?: OrResponsive<boolean> | Falsy;
      flexShrink?: OrResponsive<boolean> | Falsy;

      flexWrap?: Wrap | true | Falsy;

      variant?: Variant | Falsy;
    }>
  >;

export type BlockProps<T extends keyof ReactHTMLAttributesHacked = 'div'> =
  FlexProps<T>;

export type InlineProps<T extends keyof ReactHTMLAttributesHacked = 'div'> =
  FlexProps<T>;

function getVariantProps(
  variant: Variant,
  props: Pick<FlexProps, 'tone'>,
): BoxBasedComponentProps {
  switch (variant) {
    case 'solid':
      return {
        background: '3',
        borderTone: props.tone || 'accent',
        borderVariant: 'normal',
      };
    case 'ghost':
      return {
        background: '1',
        borderVariant: 'subtle',
        borderTone: props.tone || 'accent',
      };
    case 'subtle':
      return {
        background: '2',
        borderVariant: 'subtle',
      };
    case 'transparent':
      return {
        background: 'none',
        borderVariant: 'transparent',
      };
    case 'none':
    default:
      return {
        background: 'none',
      };
  }
}

export const Flex = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'div'>(
    {
      component = 'div',
      flexDirection = 'row',
      flexWrap,
      alignSelf,
      alignItems,
      justifySelf,
      justifyContent,
      className,
      flexGrow,
      flexShrink,
      variant,
      ...props
    }: FlexProps<T>,
    ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => {
    const isRow = flexDirection === 'row';

    return (
      <Box
        component={component}
        ref={ref}
        flexDirection={flexDirection}
        {...(variant && getVariantProps(variant, props))}
        className={[
          className,

          alignSelf && alignSelfVariants[alignSelf],

          flexGrow === true && flexGrowClass.true,
          flexGrow === false && flexGrowClass.false,

          flexShrink === true && flexShrinkClass.true,
          flexShrink === false && flexShrinkClass.false,

          flexWrap && flexWrapVariants[flexWrap === true ? 'wrap' : flexWrap],

          alignItems && alignItemsVariants[alignItems],

          justifyContent && justifyContentVariants[justifyContent],

          isRow && justifySelf && justifySelfInlineVariants[justifySelf],
          !isRow && justifySelf && justifySelfBlockVariants[justifySelf],
        ]}
        {...props}
      />
    );
  },
);

export const Block = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'div'>(
    props: BlockProps<T>,
    ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => <Flex ref={ref} flexDirection="column" space="7" {...props} />,
);

export const Inline = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'div'>(
    props: InlineProps<T>,
    ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => (
    <Flex
      ref={ref}
      flexDirection="row"
      alignItems="center"
      space="3"
      flexWrap
      {...props}
    />
  ),
);
