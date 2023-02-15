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
} from './core.css.js';
import { type Align, alignItemsVariants } from './layout.css.js';
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

      align?: Align | undefined;
      margin?: Space | undefined;
      marginBlock?: Space | undefined;
      marginInline?: Space | undefined;
      padding?: Space | undefined;
      paddingBlock?: Space | undefined;
      paddingInline?: Space | undefined;
      tooltip?: ReactNode;
      textAlign?: TextAlign | undefined;
      textOverflow?: TextOverflow | undefined;

      rounded?: Rounded | undefined;
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
          marginBlock && marginBlockVariants[marginBlock],
          marginInline && marginInlineVariants[marginInline],

          padding && paddingVariants[padding],
          paddingBlock && paddingBlockVariants[paddingBlock],
          paddingInline && paddingInlineVariants[paddingInline],

          textAlign && textAlignVariants[textAlign],

          rounded && roundedVariants[rounded],
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
