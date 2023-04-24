import { clsx, type ClassValue } from 'clsx';
import {
  Suspense,
  createElement,
  forwardRef,
  type ForwardedRef,
  type ReactNode,
} from 'react';
import { isNotFalsy, matchViewportVariants } from './component-utils.js';
import {
  backgroundHoverVariants,
  backgroundVariants,
  borderHoverVariants,
  borderWidthVariants,
  boxShadowVariants,
  flexDirectionVariants,
  roundedVariants,
  textAlignVariants,
  textOverflowVariants,
  viewportFlexDirectionVariants,
  viewportMarginBlockVariants,
  viewportMarginInlineVariants,
  viewportMarginVariants,
  viewportPaddingBlockVariants,
  viewportPaddingInlineVariants,
  viewportPaddingVariants,
  viewportSpaceVariants,
  type Background,
  type BorderHoverVariant,
  type Falsy,
  type FlexDirection,
  type OrResponsive,
  type Rounded,
  type Shadow,
  type Space,
  type TextAlign,
  type TextOverflow,
  borderVariants,
  type BorderVariant,
  type BorderWidth,
} from './core.css.js';
import { borderToneVariants, toneVariants, type Tone } from './tone.css.js';
import { TooltipLazy } from './tooltip-lazy.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';

export type BoxBasedComponentProps<
  T extends keyof ReactHTMLAttributesHacked = 'div',
> = Merge<
  ReactHTMLAttributesHacked[T],
  {
    className?: ClassValue;
    component?: T | undefined;

    space?: OrResponsive<Space> | Falsy;
    flexDirection?: OrResponsive<FlexDirection> | Falsy;

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
    tone?: Tone | Falsy;
    boxShadow?: Shadow | Falsy;
    background?: Background | Falsy;
    backgroundHover?: Background | Falsy;

    borderWidth?: BorderWidth | Falsy;
    borderHover?: BorderHoverVariant | Falsy;
    borderTone?: Tone | Falsy;
    borderVariant?: BorderVariant | Falsy;
  }
>;

const BoxInner = <T extends keyof ReactHTMLAttributesHacked = 'div'>(
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
    boxShadow,

    space,
    flexDirection,
    tone,

    background,
    backgroundHover,

    borderVariant,
    borderTone = borderVariant && tone,
    borderWidth = borderVariant && '2',
    borderHover,

    ...props
  }: BoxBasedComponentProps<T>,
  ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
) => {
  const flexDirectionClass =
    flexDirection &&
    (typeof flexDirection === 'string'
      ? flexDirectionVariants[flexDirection]
      : matchViewportVariants(flexDirection, viewportFlexDirectionVariants));

  const spaceClass =
    space &&
    matchViewportVariants(
      typeof space === 'string' ? { all: space } : space,
      viewportSpaceVariants,
    );

  const el = createElement(
    component || 'div',
    {
      ...props,
      className:
        clsx(
          className,

          isNotFalsy(margin) &&
            marginBlock !== margin &&
            matchViewportVariants(
              typeof margin === 'string' ? { all: margin } : margin,
              viewportMarginVariants,
            ),

          isNotFalsy(marginBlock) &&
            marginBlock !== margin &&
            matchViewportVariants(
              typeof marginBlock === 'string'
                ? { all: marginBlock }
                : marginBlock,
              viewportMarginBlockVariants,
            ),

          isNotFalsy(marginInline) &&
            marginInline !== margin &&
            matchViewportVariants(
              typeof marginInline === 'string'
                ? { all: marginInline }
                : marginInline,
              viewportMarginInlineVariants,
            ),

          isNotFalsy(padding) &&
            matchViewportVariants(
              typeof padding === 'string' ? { all: padding } : padding,
              viewportPaddingVariants,
            ),

          isNotFalsy(paddingBlock) &&
            paddingBlock !== padding &&
            matchViewportVariants(
              typeof paddingBlock === 'string'
                ? { all: paddingBlock }
                : paddingBlock,
              viewportPaddingBlockVariants,
            ),

          isNotFalsy(paddingInline) &&
            paddingInline !== padding &&
            matchViewportVariants(
              typeof paddingInline === 'string'
                ? { all: paddingInline }
                : paddingInline,
              viewportPaddingInlineVariants,
            ),

          textAlign && textAlignVariants[textAlign],
          isNotFalsy(rounded) && roundedVariants[rounded],
          isNotFalsy(boxShadow) && boxShadowVariants[boxShadow],

          tone && toneVariants[tone],

          borderTone && borderToneVariants[borderTone],
          isNotFalsy(borderWidth) && borderWidthVariants[borderWidth],

          borderVariant && borderVariants[borderVariant],

          // activate the border variant if it looks like we need it
          !borderVariant &&
            (borderTone || borderWidth) &&
            borderVariants.normal,
          borderHover && borderHoverVariants[borderHover],

          isNotFalsy(background) && backgroundVariants[background],
          isNotFalsy(backgroundHover) &&
            backgroundHoverVariants[backgroundHover],

          flexDirectionClass,
          !textOverflow && spaceClass,
        ) || undefined,
      ref,
    },
    textOverflow && children ? (
      <span
        className={clsx([
          flexDirectionClass,
          spaceClass,
          textOverflow && textOverflowVariants[textOverflow],
        ])}
      >
        {children}
      </span>
    ) : (
      children
    ),
  );

  if (tooltip) {
    return (
      <Suspense fallback={el}>
        <TooltipLazy content={tooltip}>{el}</TooltipLazy>
      </Suspense>
    );
  }

  return el;
};

export const Box = forwardRef(BoxInner);
