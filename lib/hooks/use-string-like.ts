import {
  Children,
  Fragment,
  useCallback,
  type JSXElementConstructor,
  type ReactNode,
} from 'react';
import type { Primitive } from 'type-fest';
import { isValidElementOfType } from '../utils.js';
import { useDesignSystem } from './use-design-system.js';

function nodeIsPrimitive(
  node: ReactNode,
): node is Extract<ReactNode, Primitive> {
  return (
    typeof node === 'string' ||
    typeof node === 'number' ||
    typeof node === 'boolean' ||
    node === null ||
    node === undefined
  );
}

function nodeIsStringLike(
  node: ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stringLikeComponents: JSXElementConstructor<any>[] = [],
): node is Exclude<ReactNode, Primitive> | string {
  if (isValidElementOfType(node, Fragment)) {
    if ('children' in node.props) {
      return (
        (node.props.children && nodeIsPrimitive(node.props.children)) ||
        Children.toArray(node.props.children).every((child) =>
          nodeIsStringLike(child, stringLikeComponents),
        )
      );
    }

    // node is one of the string-like components
    return stringLikeComponents.some((component) => node.type === component);
  }

  return nodeIsPrimitive(node);
}

export function useStringLikeDetector() {
  const { stringLikeComponents } = useDesignSystem();

  return useCallback(
    (node: ReactNode): node is Exclude<ReactNode, Primitive> | string =>
      !!node && nodeIsStringLike(node, stringLikeComponents),
    [stringLikeComponents],
  );
}
