import type { Placement } from '@floating-ui/dom';
import { clsx, type ClassValue } from 'clsx';
import {
  Suspense,
  createElement,
  forwardRef,
  type ForwardedRef,
  type ReactNode,
} from 'react';
import coreStyles from './box.module.scss';
import typographyStyles from './typography.module.scss';
import {
  borderWidthVariants,
  flexDirectionVariants,
  hiddenClass,
  overflowVariants,
  roundedEndEndVariants,
  roundedEndStartVariants,
  roundedStartEndVariants,
  roundedStartStartVariants,
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
  type BorderWidth,
  type FlexDirection,
  type OrResponsive,
  type Overflow,
  type Rounded,
  type Space,
  type TextAlign,
  type TextOverflow,
} from './box.css.js';
import { isNotFalsy, matchViewportVariants } from './component-utils.js';
import { TooltipLazy } from './tooltip-lazy.js';
import type { TooltipProps } from './tooltip.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
  Falsy,
} from './types.js';
import type {
  FontSize,
  FontWeight,
  LineHeight,
  TextWrap,
} from './typography.js';

function getCapSizeClassName(size: FontSize | Falsy) {
  return size && typographyStyles[`capSize-${size}`];
}

function getFontSizeClassName(size: FontSize | Falsy) {
  return size && typographyStyles[`fontSize-${size}`];
}

function getFontWeightClassName(weight: FontWeight | Falsy) {
  return weight && typographyStyles[`fontWeight-${weight}`];
}

function getLineHeightClassName(height: LineHeight | Falsy) {
  return height && typographyStyles[`lineHeight-${height}`];
}

export type BoxProps<T extends keyof ReactHTMLElementsHacked = 'div'> = Merge<
  ReactHTMLAttributesHacked[T],
  {
    className?: ClassValue;
    component?: T | undefined;

    space?: OrResponsive<Space | Falsy> | Falsy;
    flexDirection?: OrResponsive<FlexDirection> | Falsy;
    flexGrow?: OrResponsive<boolean> | Falsy;

    margin?: OrResponsive<Space> | Falsy;
    marginBlock?: OrResponsive<Space> | Falsy;
    marginInline?: OrResponsive<Space> | Falsy;

    padding?: OrResponsive<Space> | Falsy;
    paddingBlock?: OrResponsive<Space> | Falsy;
    paddingInline?: OrResponsive<Space> | Falsy;

    tooltip?: ReactNode;
    tooltipInitialPlacement?: Placement | Falsy;

    textAlign?: TextAlign | Falsy;
    textOverflow?: TextOverflow | Falsy;

    fontSize?: FontSize | Falsy;
    capSize?: FontSize | Falsy;
    fontWeight?: FontWeight | Falsy;
    lineHeight?: LineHeight | Falsy;
    textWrap?: TextWrap | Falsy;

    overflow?: Overflow | Falsy;

    rounded?: Rounded | Falsy;
    roundedStart?: Rounded | Falsy;
    roundedStartStart?: Rounded | Falsy;
    roundedStartEnd?: Rounded | Falsy;
    roundedEnd?: Rounded | Falsy;
    roundedEndStart?: Rounded | Falsy;
    roundedEndEnd?: Rounded | Falsy;

    borderWidth?: BorderWidth | Falsy;
  }
>;

export const Box = forwardRef(
  <T extends keyof ReactHTMLElementsHacked = 'div'>(
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

      fontSize,
      capSize,
      fontWeight,
      lineHeight,
      textWrap,

      overflow,

      tooltip,
      tooltipInitialPlacement,

      rounded,
      roundedStart,
      roundedStartStart,
      roundedStartEnd,
      roundedEnd,
      roundedEndStart,
      roundedEndEnd,

      space,

      flexDirection,
      flexGrow,

      borderWidth,

      ...props
    }: BoxProps<T>,
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

            spaceClass,

            // we dont extract out the prop, we just force a display none
            // so we can keep the element attribute for accessibility?
            props.hidden && hiddenClass,

            isNotFalsy(flexGrow)
              ? coreStyles[`flexGrow-${flexGrow ? 1 : 0}`]
              : undefined,

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

            isNotFalsy(roundedStart) && [
              roundedStartStartVariants[roundedStart],
              roundedStartEndVariants[roundedStart],
            ],
            isNotFalsy(roundedEnd) && [
              roundedEndStartVariants[roundedEnd],
              roundedEndEndVariants[roundedEnd],
            ],

            isNotFalsy(roundedStartStart) &&
              roundedStartStartVariants[roundedStartStart],
            isNotFalsy(roundedStartEnd) &&
              roundedStartEndVariants[roundedStartEnd],
            isNotFalsy(roundedEndStart) &&
              roundedEndStartVariants[roundedEndStart],
            isNotFalsy(roundedEndEnd) && roundedEndEndVariants[roundedEndEnd],

            isNotFalsy(borderWidth) && borderWidthVariants[borderWidth],

            flexDirectionClass,

            overflow && overflowVariants[overflow],
            textOverflow && textOverflowVariants[textOverflow],
            textWrap && coreStyles[`textWrap-${textWrap}`],

            getFontSizeClassName(fontSize),
            getCapSizeClassName(capSize),
            getFontWeightClassName(fontWeight),
            getLineHeightClassName(lineHeight),
          ) || undefined,
        ref,
      },
      children,
    );

    if (tooltip) {
      const tooltipProps: TooltipProps = {
        content: tooltip,
        ...(tooltipInitialPlacement && {
          initialPlacement: tooltipInitialPlacement,
        }),
      };
      return (
        <Suspense fallback={el}>
          <TooltipLazy {...tooltipProps}>{el}</TooltipLazy>
        </Suspense>
      );
    }

    return el;
  },
);
