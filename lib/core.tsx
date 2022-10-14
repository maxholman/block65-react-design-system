import { ClassValue, clsx } from 'clsx';
import { createElement, PropsWithChildren } from 'react';
import type { Merge } from 'type-fest';
import { Align, alignItems } from './layout.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export type BoxBasedComponentProps<
  T extends keyof ReactHTMLAttributesHacked,
  P extends Record<string, unknown> = Record<string, unknown>,
> = PropsWithChildren<
  Merge<
    ReactHTMLAttributesHacked[T],
    Merge<
      P,
      {
        component?: T;
        align?: Align | undefined;
        className?: ClassValue;
      }
    >
  >
>;

export function Box<T extends keyof ReactHTMLAttributesHacked = 'div'>({
  children,
  component = 'div',
  className,
  align,
  ...props
}: BoxBasedComponentProps<T>) {
  return createElement(
    component,
    {
      ...props,
      className: clsx(align && alignItems[align], className),
    },
    children,
  );
}
