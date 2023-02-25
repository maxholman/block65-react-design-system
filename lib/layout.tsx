import {
  forwardRef,
  type ForwardedRef,
  type PropsWithChildren,
  type ReactElement,
} from 'react';
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
import {
  Box,
  matchViewportVariants,
  type BoxBasedComponentProps,
} from './core.js';
import { inlineAlignSelfVariants } from './layout.css.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';

type CommonProps<T extends keyof ReactHTMLAttributesHacked = 'div'> = Merge<
  BoxBasedComponentProps<T>,
  PropsWithChildren<{
    space?: OrResponsive<Space> | Falsy;
    flexDirection?: OrResponsive<FlexDirection> | Falsy;
  }>
>;

export type BlockProps<T extends keyof ReactHTMLAttributesHacked = 'div'> =
  CommonProps<T>;

function getLayoutClasses({ flexDirection, space }: BlockProps) {
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

const BlockInner = <T extends keyof ReactHTMLAttributesHacked = 'div'>(
  {
    component = 'div',
    space = 'medium',
    flexDirection = 'column',
    className,
    align,
    ...props
  }: BlockProps<T>,
  ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
): ReactElement | null => (
  <Box
    component={component}
    className={[
      align && inlineAlignSelfVariants[align],
      getLayoutClasses({ flexDirection, space }),
      className,
    ]}
    {...props}
    ref={ref}
  />
);

export const Block = forwardRef(BlockInner);

export type InlineProps<T extends keyof ReactHTMLAttributesHacked = 'div'> =
  CommonProps<T>;

export const Inline = <T extends keyof ReactHTMLAttributesHacked = 'div'>({
  component = 'div',
  space = 'small',
  flexDirection = 'row',
  className,
  align,
  ...props
}: InlineProps<T>) => (
  <Box
    component={component}
    className={[
      align && inlineAlignSelfVariants[align],
      getLayoutClasses({ flexDirection, space }),
      className,
    ]}
    {...props}
  />
);
