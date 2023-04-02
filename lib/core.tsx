import { clsx, type ClassValue } from 'clsx';
import {
  Suspense,
  createElement,
  forwardRef,
  lazy,
  type ForwardedRef,
  type ReactNode,
} from 'react';
import { matchViewportVariants } from './component-utils.js';
import {
  borderWeightVariants,
  roundedVariants,
  textAlignVariants,
  textOverflowVariants,
  viewportMarginBlockVariants,
  viewportMarginInlineVariants,
  viewportMarginVariants,
  viewportPaddingBlockVariants,
  viewportPaddingInlineVariants,
  viewportPaddingVariants,
  type BorderWeight,
  type Falsy,
  type OrResponsive,
  type Rounded,
  type Space,
  type TextAlign,
  type TextOverflow,
} from './core.css.js';
import { toneVariants, type Tone } from './tone.css.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';

const LazyTooltip = lazy(() => import('./tooltip.js'));

export type BoxBasedComponentProps<T extends keyof ReactHTMLAttributesHacked> =
  Merge<
    ReactHTMLAttributesHacked[T],
    {
      className?: ClassValue;
      component?: T;

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
) => {
  const el = createElement(
    component || 'div',
    {
      ...props,
      className:
        clsx(
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
              viewportMarginBlockVariants,
            ),

          marginInline &&
            marginInline !== margin &&
            matchViewportVariants(
              typeof marginInline === 'string'
                ? { all: marginInline }
                : marginInline,
              viewportMarginInlineVariants,
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
              viewportPaddingBlockVariants,
            ),

          paddingInline &&
            paddingInline !== padding &&
            matchViewportVariants(
              typeof paddingInline === 'string'
                ? { all: paddingInline }
                : paddingInline,
              viewportPaddingInlineVariants,
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
    return (
      <Suspense fallback={el}>
        <LazyTooltip content={tooltip}>{el}</LazyTooltip>
      </Suspense>
    );
  }

  return el;
};

export const Box = forwardRef(BoxInner);
