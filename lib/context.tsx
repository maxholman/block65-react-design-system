import {
  Children,
  createContext,
  isValidElement,
  JSXElementConstructor,
  ReactNode,
  useCallback,
  useContext,
} from 'react';
import type { Primitive } from 'type-fest';
import type { ColorScheme, ContrastScheme } from './schemes/color.css.js';

export const Context = createContext<{
  colorScheme: ColorScheme;
  contrastScheme: ContrastScheme;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stringLikeComponents?: JSXElementConstructor<any>[];
}>({
  colorScheme: 'auto' as ColorScheme,
  contrastScheme: 'auto' as ContrastScheme,
});

export function useDesignSystem() {
  return useContext(Context);
}

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
): boolean {
  if (isValidElement(node)) {
    if ('children' in node.props) {
      return (
        nodeIsPrimitive(node.props.children) ||
        Children.toArray(node.props.children).every((child) =>
          nodeIsStringLike(child, stringLikeComponents),
        )
      );
    }

    return stringLikeComponents.some((component) => node.type === component);
  }

  return nodeIsPrimitive(node);
}

export function useStringLikeDetector() {
  const { stringLikeComponents } = useContext(Context);
  return useCallback(
    (children: ReactNode) => {
      const result =
        !!stringLikeComponents &&
        nodeIsStringLike(children, stringLikeComponents);
      return result;
    },
    [stringLikeComponents],
  );
}
