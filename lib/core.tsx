import { ClassValue, clsx } from 'clsx';
import { createElement, PropsWithChildren } from 'react';
import type { ReactHTMLAttributesHacked } from './types.js';

type BoxProps<T extends keyof ReactHTMLAttributesHacked, P> = PropsWithChildren<
  {
    component: T;
  } & P &
    Omit<ReactHTMLAttributesHacked[T], keyof P>
>;

export function Box<T extends keyof ReactHTMLAttributesHacked>({
  component,
  className,
  children,
  ...props
}: BoxProps<
  T,
  {
    className?: ClassValue;
  }
>) {
  return createElement(
    component,
    {
      ...props,
      className: clsx(className),
    },
    children,
  );
}

export type BoxBasedComponentProps<
  T extends keyof ReactHTMLAttributesHacked,
  P,
> = PropsWithChildren<
  {
    component?: T;
  } & P &
    Omit<ReactHTMLAttributesHacked[T], keyof P>
>;
