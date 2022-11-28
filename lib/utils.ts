import { clsx } from 'clsx';
import {
  Children,
  cloneElement,
  ComponentProps,
  FC,
  Fragment,
  isValidElement,
  ReactElement,
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
) {
  return [h, s, l].join(' ');
}

export function hsl(
  h: string | number,
  s: string | number,
  l: string | number,
) {
  return `hsl(${hslValues(
    maybeSuffix(h, 'deg'),
    maybeSuffix(s, '%'),
    maybeSuffix(l, '%'),
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
