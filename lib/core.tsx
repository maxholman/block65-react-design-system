import { type Placement } from '@floating-ui/dom';
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
  borderTransparentClass,
  borderVariants,
  borderWidthVariants,
  boxShadowVariants,
  flexDirectionVariants,
  foregroundVariants,
  hiddenClass,
  neutralise,
  neutraliseHover,
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
  type Falsy,
  type FlexDirection,
  type OrResponsive,
  type Overflow,
  type Rounded,
  type Shadow,
  type Space,
  type Swatch,
  type TextAlign,
  type TextOverflow,
  type Tone,
  toneVariants,
} from './core.css.js';
import {
  debugLogger as debugBuildLogger,
  ifDebugBuild,
} from './debug-logger.js';
import { TooltipLazy } from './tooltip-lazy.js';
import type { TooltipProps } from './tooltip.js';
import type {
  Merge,
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';
import {
  fontSizeVariants,
  fontWeightVariants,
  type FontSize,
  type FontWeight,
} from './typography.css.js';
import { objectKeysInclude } from './utils.js';

function resolveAutoSwatch(bg: Swatch | Falsy) {
  if (!bg) {
    return bg;
  }

  const nextBg: Swatch | string = (Number.parseInt(bg, 10) + 1).toString();

  if (objectKeysInclude(backgroundVariants, nextBg)) {
    return nextBg;
  }

  return bg;
}

const AUTO = 'auto';

type BackgroundHover = Swatch | typeof AUTO;

export type BoxProps<T extends keyof ReactHTMLAttributesHacked = 'div'> = Merge<
  ReactHTMLAttributesHacked[T],
  {
    className?: ClassValue;
    component?: T | undefined;

    space?: OrResponsive<Space | Falsy> | Falsy;
    flexDirection?: OrResponsive<FlexDirection> | Falsy;

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
    fontWeight?: FontWeight | Falsy;

    overflow?: Overflow | Falsy;

    rounded?: Rounded | Falsy;
    roundedStart?: Rounded | Falsy;
    roundedStartStart?: Rounded | Falsy;
    roundedStartEnd?: Rounded | Falsy;
    roundedEnd?: Rounded | Falsy;
    roundedEndStart?: Rounded | Falsy;
    roundedEndEnd?: Rounded | Falsy;

    tone?: Tone | Falsy;
    boxShadow?: Shadow | Falsy;

    background?: Swatch | Falsy;
    backgroundHover?: BackgroundHover | Falsy;

    foreground?: Swatch | Falsy;

    border?: Swatch | Falsy;
    borderHover?: Swatch | Falsy;
    borderWidth?: BorderWidth | Falsy;
  }
>;

const bgFgMap: Record<Swatch, Swatch> = {
  '0': '15',
  '1': '12',
  '2': '12',
  '3': '12',
  '4': '12',
  '5': '15',
  '6': '15',
  '7': '15',
  '8': '15',
  '9': '15',
  '10': '14',
  '11': '3',
  '12': '3',
  '13': '3',
  '14': '3',
  '15': '4',
};

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

    fontSize,
    fontWeight,

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

    boxShadow,

    space,
    flexDirection,

    background,
    backgroundHover,

    foreground = isNotFalsy(background) && bgFgMap[background],

    border,
    borderHover,
    borderWidth = border || borderHover ? '1' : undefined,

    // tone is defaulted only if backgrounds are required
    tone = isNotFalsy(background || backgroundHover || border || borderHover)
      ? 'neutral'
      : undefined,

    ...props
  }: BoxProps<T>,
  ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
) => {
  ifDebugBuild(() => {
    if (background && background === backgroundHover) {
      debugBuildLogger('WARN: background === backgroundHover');
    }
    if (+(backgroundHover || 0) + 1 === +(background || 0)) {
      debugBuildLogger(`WARN: use backgroundHover=${AUTO}`);
    }
    if (border && border === borderHover) {
      debugBuildLogger('WARN: border === borderHover');
    }
  });

  const resolvedBackgroundHover =
    backgroundHover === AUTO ? resolveAutoSwatch(background) : backgroundHover;

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

          isNotFalsy(boxShadow) && boxShadowVariants[boxShadow],

          isNotFalsy(tone) && toneVariants[tone],

          tone === 'neutral' && neutralise,
          tone === 'neutral' &&
            (borderHover || resolvedBackgroundHover) &&
            neutraliseHover,

          (isNotFalsy(border) && borderVariants[border]) ||
            borderTransparentClass,
          isNotFalsy(borderHover) && borderHoverVariants[borderHover],
          isNotFalsy(borderWidth) && borderWidthVariants[borderWidth],

          isNotFalsy(foreground) && foregroundVariants[foreground],

          isNotFalsy(background) && backgroundVariants[background],

          isNotFalsy(resolvedBackgroundHover) &&
            resolvedBackgroundHover !== background &&
            backgroundHoverVariants[resolvedBackgroundHover],

          flexDirectionClass,

          overflow && overflowVariants[overflow],
          textOverflow && textOverflowVariants[textOverflow],

          fontSize && fontSizeVariants[fontSize],
          fontWeight && fontWeightVariants[fontWeight],
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
};

export const Box = forwardRef(BoxInner);
