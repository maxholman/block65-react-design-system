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
  justifySelfBlockVariants,
  justifySelfInlineVariants,
  type Placement,
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
    justifyItems?: Placement | Falsy;
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
    space = '5',
    alignSelf,
    alignItems,
    justifySelf,
    justifyItems,
    className,
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

        alignItems && alignItemsVariants[alignItems],

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
  ) => LayoutInner({ flexDirection: 'column', ...props }, ref),
);

export const Inline = forwardRef(
  <T extends keyof ReactHTMLAttributesHacked = 'div'>(
    props: InlineProps<T>,
    ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) =>
    LayoutInner({ flexDirection: 'row', alignItems: 'center', ...props }, ref),
);
