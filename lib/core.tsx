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
  ...props
}: BoxProps<
  T,
  {
    className?: ClassValue;
  }
>) {
  return createElement(component, {
    ...props,
    className: clsx(className),
  });
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
