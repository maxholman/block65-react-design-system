import {
  Children,
  Fragment,
  isValidElement,
  useCallback,
  type JSXElementConstructor,
  type ReactNode,
} from 'react';
import type { Primitive } from 'type-fest';
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
  if (isValidElement(node)) {
    // Fragments are string like if all their children are string like
    if (node.type === Fragment) {
      return Children.toArray(node.props.children).every((child) =>
        nodeIsStringLike(child, stringLikeComponents),
      );
    }

    // element is at least one of the string-like components
    return stringLikeComponents.some((component) => node.type === component);
  }

  if (Array.isArray(node)) {
    return node.every((child) => nodeIsStringLike(child, stringLikeComponents));
  }

  return nodeIsPrimitive(node);
}

/** @private - not intended for public API */
export function useStringLikeDetector() {
  const { stringLikeComponents } = useDesignSystem();

  return useCallback(
    (node: ReactNode): node is Exclude<ReactNode, Primitive> | string =>
      !!node && nodeIsStringLike(node, stringLikeComponents),
    [stringLikeComponents],
  );
}
