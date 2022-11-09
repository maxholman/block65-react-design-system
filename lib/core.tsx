import { ClassValue, clsx } from 'clsx';
import { createElement, PropsWithChildren } from 'react';
import type { Merge } from 'type-fest';
import { marginVariants, paddingVariants } from './core.css.js';
import { Align, alignItems } from './layout.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export type Space = 'none' | 'large' | 'small' | 'tiny' | 'huge' | 'standard';

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
      padding?: Space | undefined;
      className?: ClassValue;
      // tone
      // rounded
    }
  >
>;

export function Box<T extends keyof ReactHTMLAttributesHacked = 'div'>({
  children,
  component = 'div',
  className,
  align,
  margin,
  padding,
  ...props
}: BoxBasedComponentProps<T>) {
  return createElement(
    component,
    {
      ...props,
      className: clsx(
        align && alignItems[align],
        margin && marginVariants[margin],
        padding && paddingVariants[padding],
        className,
      ),
    },
    children,
  );
}
