import { type ClassValue, clsx } from 'clsx';
import {
  createElement,
  type ForwardedRef,
  forwardRef,
  type ReactElement,
  type ReactNode,
} from 'react';
import {
  marginBlockVariants,
  marginInlineVariants,
  marginVariants,
  paddingBlockVariants,
  paddingInlineVariants,
  paddingVariants,
  type Rounded,
  roundedVariants,
  type Space,
  type TextAlign,
  textAlignVariants,
  type TextOverflow,
  textOverflowVariants,
  borderWeightVariants,
  type BorderWeight,
  type Falsy,
} from './core.css.js';
import { type Align, alignItemsVariants } from './layout.css.js';
import { type Tone, toneVariants } from './tone.css.js';
import { Tooltip } from './tooltip.js';
import type {
  ReactHTMLAttributesHacked,
  ReactHTMLElementsHacked,
} from './types.js';

type Merge<A, B> = Omit<A, keyof B> & B;

export type BoxBasedComponentProps<T extends keyof ReactHTMLAttributesHacked> =
  Merge<
    ReactHTMLAttributesHacked[T],
    {
      className?: ClassValue;
      component?: T;

      align?: Align | Falsy;
      margin?: Space | Falsy;
      marginBlock?: Space | Falsy;
      marginInline?: Space | Falsy;
      padding?: Space | Falsy;
      paddingBlock?: Space | Falsy;
      paddingInline?: Space | Falsy;
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

          margin && marginVariants[margin],
          marginBlock &&
            marginBlock !== margin &&
            marginBlockVariants[marginBlock],
          marginInline &&
            marginInline !== margin &&
            marginInlineVariants[marginInline],

          padding && paddingVariants[padding],
          paddingBlock &&
            paddingBlock !== padding &&
            paddingBlockVariants[paddingBlock],
          paddingInline &&
            paddingInline !== padding &&
            paddingInlineVariants[paddingInline],

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
