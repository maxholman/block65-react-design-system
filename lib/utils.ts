import { clsx } from 'clsx';
import {
  Children,
  cloneElement,
  ComponentProps,
  Fragment,
  isValidElement,
  ReactNode,
} from 'react';

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
            ...(!!props['className'] && {
              className: clsx(props['className'], child.props.className),
            }),
          },
          child.type === Fragment
            ? augmentChildren(child.props.children, props)
            : child.props.children,
        )
      : child,
  ) as T;
}

function maybeSuffix(value: string | number, suffix: string): string {
  if (
    typeof value === 'string' &&
    (value.endsWith(suffix) || value.match(/^\w+/))
  ) {
    return value;
  }
  return `${value}${suffix}`;
}

export function hsl(
  h: string | number,
  s: string | number,
  l: string | number,
) {
  return `hsl(${[
    maybeSuffix(h, 'deg'),
    maybeSuffix(s, '%'),
    maybeSuffix(l, '%'),
  ].join(' ')})`;
}
