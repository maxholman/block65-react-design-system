import { ClassValue, clsx } from 'clsx';
import { createElement, forwardRef, PropsWithChildren, ReactNode } from 'react';
import type { Merge } from 'type-fest';
import {
  marginBlockVariants,
  marginInlineVariants,
  marginVariants,
  paddingBlockVariants,
  paddingInlineVariants,
  paddingVariants,
} from './core.css.js';
import { Align, alignItems } from './layout.css.js';
import { Tooltip } from './tooltip.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export type Space = 'none' | 'large' | 'small' | 'tiny' | 'huge' | 'medium';

export type BoxBasedComponentProps<
  T extends keyof ReactHTMLAttributesHacked,
  P extends Record<string, unknown> = Record<string, unknown>,
> = PropsWithChildren<
  Merge<
    ReactHTMLAttributesHacked[T],
    P & {
      component?: T;
      align?: Align | undefined;
      margin?: Space | undefined;
      marginBlock?: Space | undefined;
      marginInline?: Space | undefined;
      padding?: Space | undefined;
      paddingBlock?: Space | undefined;
      paddingInline?: Space | undefined;
      className?: ClassValue;
      tooltip?: ReactNode;
      // tone
      // rounded
    }
  >
>;

const BoxInner = <T extends keyof ReactHTMLAttributesHacked = 'div'>(
  {
    children,
    component = 'div',
    className,
    align,
    margin,
    marginBlock,
    marginInline,
    padding,
    paddingBlock,
    paddingInline,
    tooltip,
    ...props
  }: BoxBasedComponentProps<T>,
  ref: React.ForwardedRef<ReactHTMLAttributesHacked[T]>,
) => {
  const el = createElement(
    component,
    {
      ...props,
      className:
        clsx(
          align && alignItems[align],
          margin && marginVariants[margin],
          marginBlock && marginBlockVariants[marginBlock],
          marginInline && marginInlineVariants[marginInline],
          padding && paddingVariants[padding],
          paddingBlock && paddingBlockVariants[paddingBlock],
          paddingInline && paddingInlineVariants[paddingInline],
          className,
        ) || undefined,
      ref,
    },
    children,
  );

  if (tooltip) {
    return <Tooltip content={tooltip}>{el}</Tooltip>;
  }

  return el;
};

export const Box = forwardRef(BoxInner);
