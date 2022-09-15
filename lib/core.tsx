import { ClassValue, clsx } from 'clsx';
import { createElement, PropsWithChildren } from 'react';
import type { Merge } from 'type-fest';
import type { Align } from './theme.css.js';
import { alignItems } from './layout.css.js';
import type { ReactHTMLAttributesHacked } from './types.js';

export function Box<T extends keyof ReactHTMLAttributesHacked>({
  children,
  component,
  className,
  align,
  ...props
}: PropsWithChildren<
  Merge<
    ReactHTMLAttributesHacked[T],
    {
      component: T;
      className?: ClassValue;
      align?: Align | undefined;
    }
  >
>) {
  return createElement(
    component,
    {
      ...props,
      className: clsx(align && alignItems[align], className),
    },
    children,
  );
}

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
        className?: ClassValue;
        align?: Align | undefined;
      }
    >
  >
>;
