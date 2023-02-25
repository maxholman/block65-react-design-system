import { clsx, type ClassValue } from 'clsx';
import {
  createElement,
  forwardRef,
  type ForwardedRef,
  type ReactElement,
  type ReactNode,
} from 'react';
import { matchViewportVariants } from './component-utils.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  borderWeightVariants,
  roundedVariants,
  textAlignVariants,
  textOverflowVariants,
  viewportMarginVariants,
  viewportPaddingVariants,
  type BorderWeight,
  type Falsy,
  type OrResponsive,
  type Responsive,
  type Rounded,
  type Space,
  type TextAlign,
  type TextOverflow,
  type Viewport,
} from './core.css.js';
import { alignItemsVariants, type Align } from './layout.css.js';
import { toneVariants, type Tone } from './tone.css.js';
import { Tooltip } from './tooltip.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';

export type BoxBasedComponentProps<T extends keyof ReactHTMLAttributesHacked> =
  Merge<
    ReactHTMLAttributesHacked[T],
    {
      className?: ClassValue;
      component?: T;

      align?: Align | Falsy;
      margin?: OrResponsive<Space> | Falsy;
      marginBlock?: OrResponsive<Space> | Falsy;
      marginInline?: OrResponsive<Space> | Falsy;
      padding?: OrResponsive<Space> | Falsy;
      paddingBlock?: OrResponsive<Space> | Falsy;
      paddingInline?: OrResponsive<Space> | Falsy;
      tooltip?: ReactNode;
      textAlign?: TextAlign | Falsy;
      textOverflow?: TextOverflow | Falsy;
      rounded?: Rounded | Falsy;
      borderWeight?: BorderWeight | Falsy;
      tone?: Tone | Falsy;
    }
  >;

const BoxInner = <T extends keyof ReactHTMLAttributesHacked>(
  {
    children,
    component,
    className,
    align,
    margin,
    marginBlock,
    marginInline,
    padding,
    paddingBlock,
    paddingInline,
    textAlign,
    textOverflow,
    tooltip,
    rounded,
    borderWeight,
    tone,
    ...props
  }: BoxBasedComponentProps<T>,
  ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
): ReactElement | null => {
  const el = createElement(
    component || 'div',
    {
      ...props,
      className:
        clsx(
          align && alignItemsVariants[align],

          margin &&
            marginBlock !== margin &&
            matchViewportVariants(
              typeof margin === 'string' ? { all: margin } : margin,
              viewportMarginVariants,
            ),
          marginBlock &&
            marginBlock !== margin &&
            matchViewportVariants(
              typeof marginBlock === 'string'
                ? { all: marginBlock }
                : marginBlock,
              viewportMarginVariants,
            ),

          marginInline &&
            marginInline !== margin &&
            matchViewportVariants(
              typeof marginInline === 'string'
                ? { all: marginInline }
                : marginInline,
              viewportMarginVariants,
            ),

          padding &&
            paddingBlock !== padding &&
            matchViewportVariants(
              typeof padding === 'string' ? { all: padding } : padding,
              viewportPaddingVariants,
            ),
          paddingBlock &&
            paddingBlock !== padding &&
            matchViewportVariants(
              typeof paddingBlock === 'string'
                ? { all: paddingBlock }
                : paddingBlock,
              viewportPaddingVariants,
            ),

          paddingInline &&
            paddingInline !== padding &&
            matchViewportVariants(
              typeof paddingInline === 'string'
                ? { all: paddingInline }
                : paddingInline,
              viewportPaddingVariants,
            ),

          textAlign && textAlignVariants[textAlign],
          rounded && roundedVariants[rounded],
          borderWeight && borderWeightVariants[borderWeight],
          tone && toneVariants[tone],

          className,
        ) || undefined,
      ref,
    },
    textOverflow && children ? (
      <span className={textOverflow && textOverflowVariants[textOverflow]}>
        {children}
      </span>
    ) : (
      children
    ),
  );

  if (tooltip) {
    return <Tooltip content={tooltip}>{el}</Tooltip>;
  }

  return el;
};

export const Box = forwardRef(BoxInner);
