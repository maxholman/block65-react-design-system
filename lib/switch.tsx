import { Children, type ReactNode } from 'react';
import { isValidElementOfType } from './utils.js';

export const Case = (props: { value: unknown; children: ReactNode }) =>
  props.children;

export const Switch = ({
  predicate,
  children,
}: {
  predicate: boolean | ((value: unknown) => boolean);
  children: ReactNode[];
}) =>
  Children.map(children, (child) => {
    if (isValidElementOfType(child, Case)) {
      const theOne =
        typeof predicate === 'function'
          ? predicate(child.props.value)
          : predicate === child.props.value;
      if (theOne) {
        return child;
      }
    }
    return null;
  });
