import { clsx } from 'clsx';
import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  type JSXElementConstructor,
  type ComponentProps,
  type FC,
  type ReactElement,
  type ReactNode,
} from 'react';
import type { Entries } from 'type-fest';

function flattenChildren(children: ReactNode): ReactNode[] {
  return Children.toArray(children).flatMap((child): ReactNode[] => {
    if (isValidElement(child) && child.type === Fragment) {
      return flattenChildren(child.props.children);
    }
    return [child];
  }, []);
}

export function augmentChildren<T extends ReactNode>(
  children: T,
  props: Record<string, unknown> = {},
): T {
  return Children.map(flattenChildren(children), (child) =>
    isValidElement(child)
      ? cloneElement(
          child,
          {
            ...child.props,
            ...(!!props.className && {
              className: clsx(props.className, child.props.className),
            }),
          },
          ...(child.type === Fragment
            ? augmentChildren(child.props.children, props)
            : child.props.children),
        )
      : child,
  ) as T;
}

function maybeSuffix(value: string | number, suffix: string): string {
  if (
    typeof value === 'string' &&
    (value.endsWith(suffix) ||
      value.startsWith('var(') ||
      value.startsWith('calc('))
  ) {
    return value;
  }
  return `${value}${suffix}`;
}

function hslValues(
  h: string | number,
  s: string | number,
  l: string | number,
  a: string | number,
) {
  return [h, s, l, ...(a.toString() !== '1' ? ['/', a] : [])].join(' ');
}

export function hsl(
  h: string | number,
  s: string | number,
  l: string | number,
  a: string | number = 1,
) {
  return `hsl(${hslValues(
    maybeSuffix(h, 'deg'),
    maybeSuffix(s, '%'),
    maybeSuffix(l, '%'),
    a,
  )})`;
}

export function oklch(
  l: string | number,
  c: string | number,
  h: string | number,
  a: string | number | undefined = 1,
) {
  return `oklch(${hslValues(maybeSuffix(l, '%'), c, h, a)})`;
}

export function isValidElementOfType<
  T extends
    | keyof JSX.IntrinsicElements
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | JSXElementConstructor<any>,
>(child: ReactNode, type: T): child is ReactElement<ComponentProps<T>> {
  return isValidElement(child) && child.type === type;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cloneElementIfValidElementOfType<T extends FC<any>>(
  child: ReactNode,
  type: T,
  props: Partial<ComponentProps<T>>,
): typeof child {
  return isValidElementOfType(child, type) ? cloneElement(child, props) : child;
}

export const typedObjectFromEntries = Object.fromEntries as <
  Key extends PropertyKey,
  TEntries extends ReadonlyArray<readonly [Key, unknown]>,
>(
  values: TEntries,
) => {
  [K in Extract<TEntries[number], readonly [Key, unknown]>[0]]: Extract<
    TEntries[number],
    readonly [K, unknown]
  >[1];
};

export function typedObjectKeys<T extends string>(
  obj: Record<T, unknown>,
): T[] {
  return Object.keys(obj) as T[];
}

export function objectKeysInclude<T extends string>(
  obj: Record<T, unknown>,
  key: T | unknown,
): key is T {
  return Object.keys(obj).includes(`${key}`);
}

export function typedObjectEntries<T extends Record<string, unknown>>(obj: T) {
  return Object.entries(obj) as Entries<T>;
}
