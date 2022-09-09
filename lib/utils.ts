import { clsx } from 'clsx';
import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  ReactNode,
} from 'react';

export function augmentChildren<T extends ReactNode>(
  children: T,
  props: Record<string, unknown> = {},
): T {
  return Children.map(children, (child) =>
    isValidElement(child)
      ? cloneElement(child, {
          ...child.props,
          ...(!!props['className'] && {
            className: clsx(child.props.className, props['className']),
          }),
          children:
            child.type === Fragment
              ? augmentChildren(child.props.children, props)
              : child.props.children,
        })
      : child,
  ) as T;
}
