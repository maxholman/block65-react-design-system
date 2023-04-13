import { forwardRef, type ForwardedRef, type PropsWithChildren } from 'react';
import { matchViewportVariants } from './component-utils.js';
import {
  flexDirectionVariants,
  viewportFlexDirectionVariants,
  viewportSpaceVariants,
  type Falsy,
  type FlexDirection,
  type OrResponsive,
  type Space,
} from './core.css.js';
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

type LayoutProps<T extends keyof ReactHTMLAttributesHacked = 'div'> = Merge<
  BoxBasedComponentProps<T>,
  PropsWithChildren<{
    space?: OrResponsive<Space> | Falsy;
    flexDirection?: OrResponsive<FlexDirection> | Falsy;

    alignSelf?: Placement | Falsy;
    alignItems?: Placement | Falsy;

    justifySelf?: Placement | Falsy;
    justifyContent?: Placement | Falsy;

    flexGrow?: OrResponsive<boolean> | Falsy;
    flexShrink?: OrResponsive<boolean> | Falsy;

    flexWrap?: Wrap | Falsy;
  }>
>;

export type BlockProps<T extends keyof ReactHTMLAttributesHacked = 'div'> =
  LayoutProps<T>;

export type InlineProps<T extends keyof ReactHTMLAttributesHacked = 'div'> =
  LayoutProps<T>;

function getViewportVariantClasses({ flexDirection, space }: BlockProps) {
  return [
    flexDirection &&
      (typeof flexDirection === 'string'
        ? flexDirectionVariants[flexDirection]
        : matchViewportVariants(flexDirection, viewportFlexDirectionVariants)),

    space &&
      matchViewportVariants(
        typeof space === 'string' ? { all: space } : space,
        viewportSpaceVariants,
      ),
  ];
}

const LayoutInner = <T extends keyof ReactHTMLAttributesHacked = 'div'>(
  {
    component = 'div',
    flexDirection = 'column',
    space,
    alignSelf,
    alignItems,
    justifySelf,
    justifyContent,
    className,
    flexGrow,
    flexShrink,
    flexWrap = 'wrap',
    ...props
  }: LayoutProps<T>,
  ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
) => {
  const isRow = flexDirection === 'row';

  return (
    <Box
      component={component}
      ref={ref}
      className={[
        alignSelf && alignSelfVariants[alignSelf],

        flexGrow === true && flexGrowClass.true,
        flexGrow === false && flexGrowClass.false,

        flexShrink === true && flexShrinkClass.true,
        flexShrink === false && flexShrinkClass.false,

        flexWrap && flexWrapVariants[flexWrap],

        alignItems && alignItemsVariants[alignItems],

        justifyContent && justifyContentVariants[justifyContent],

        isRow && justifySelf && justifySelfInlineVariants[justifySelf],
        !isRow && justifySelf && justifySelfBlockVariants[justifySelf],

        getViewportVariantClasses({ flexDirection, space }),
        className,
      ]}
      {...props}
    />
  );
};

export const Block = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'div'>(
    props: BlockProps<T>,
    ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => LayoutInner({ flexDirection: 'column', space: '6', ...props }, ref),
);

export const Inline = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'div'>(
    props: InlineProps<T>,
    ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) =>
    LayoutInner(
      { flexDirection: 'row', alignItems: 'center', space: '3', ...props },
      ref,
    ),
);
