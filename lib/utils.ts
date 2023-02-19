import { clsx } from 'clsx';
import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  type ComponentProps,
  type FC,
  type ReactElement,
  type ReactNode,
} from 'react';
import type { UnionToIntersection, Writable } from 'type-fest';

function flattenChildren(children: React.ReactNode): ReactNode[] {
  return Children.toArray(children).flatMap((child): ReactNode[] => {
    if (
      isValidElement<ComponentProps<typeof Fragment>>(child) &&
      child.type === Fragment
    ) {
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

export function hslValues(
  h: string | number,
  s: string | number,
  l: string | number,
  a: string | number,
) {
  return [h, s, l, ...(a.toString() !== '1' ? [a] : [])].join(',');
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isValidElementOfType<T extends FC<any>>(
  child: ReactNode,
  type: T,
): child is ReactElement<ComponentProps<T>> {
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

// Credit: https://stackoverflow.com/questions/69019873/how-can-i-get-typed-object-entries-and-object-fromentries-in-typescript
type EntriesType =
  | [PropertyKey, unknown][]
  | ReadonlyArray<readonly [PropertyKey, unknown]>;

type UnionObjectFromArrayOfPairs<T extends EntriesType> =
  Writable<T> extends (infer R)[]
    ? R extends [infer key, infer val]
      ? { [prop in key & PropertyKey]: val }
      : never
    : never;

type MergeIntersectingObjects<T> = { [key in keyof T]: T[key] };

type EntriesToObject<T extends EntriesType> = MergeIntersectingObjects<
  UnionToIntersection<UnionObjectFromArrayOfPairs<T>>
>;

export function typedObjectFromEntries<T extends EntriesType>(
  arr: T,
): EntriesToObject<T> {
  return Object.fromEntries(arr) as EntriesToObject<T>;
}

export function typedObjectEntries<T extends Record<string, unknown>>(
  obj: T,
): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
}
