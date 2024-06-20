import {
  forwardRef,
  useMemo,
  useState,
  type ForwardedRef,
  type HTMLAttributes,
  type ReactNode,
  type SyntheticEvent,
} from 'react';
import { useThrottledCallback } from './hooks/use-throttled-callback.js';
import { Block, type FlexProps } from './layout.js';
import type { ReactHTMLElementsHacked } from './types.js';
import {
  innerClassName,
  itemClassName,
  windowClassName,
} from './virtual.css.js';

export type VirtualizedListProps<
  T extends keyof ReactHTMLElementsHacked = 'div',
> = FlexProps<T> & {
  numItems: number;
  renderItem: (
    props: { index: number } & HTMLAttributes<HTMLDivElement>,
  ) => ReactNode;
  itemHeight: number | ((props: { index: number }) => number);
  listHeight: number;
  overscan?: number;
};

export const VirtualizedList = forwardRef(
  <T extends keyof ReactHTMLElementsHacked = 'div'>(
    {
      numItems,
      itemHeight,
      renderItem,
      listHeight,
      overscan = 0,
      ...props
    }: VirtualizedListProps<T>,
    forwardedRef?: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => {
    const [scrollTop, setScrollTop] = useState(0);

    const throttledSetScrollTop = useThrottledCallback(setScrollTop, 100);

    const fakeArray = useMemo(
      () => Array.from({ length: numItems }, (_, index) => index),
      [numItems],
    );

    const [innerHeight, items] = fakeArray.reduce<[number, ReactNode[]]>(
      (previousValue, index) => {
        const [itemTop, els] = previousValue;

        const thisHeight =
          typeof itemHeight === 'function' ? itemHeight({ index }) : itemHeight;

        const visible =
          itemTop + thisHeight >= scrollTop - overscan &&
          itemTop <= scrollTop + listHeight + overscan;

        const nextTop = itemTop + thisHeight;

        if (visible) {
          return [
            nextTop,
            [
              ...els,
              renderItem({
                index,
                className: itemClassName,
                style: {
                  top: `${itemTop}px`,
                  height: `${thisHeight}px`,
                },
              }),
            ],
          ];
        }
        return [nextTop, els];
      },
      [0, []],
    );

    return (
      <Block
        className={windowClassName}
        onScroll={(e: SyntheticEvent) =>
          throttledSetScrollTop(e.currentTarget.scrollTop)
        }
        ref={forwardedRef}
        {...props}
      >
        <Block
          className={innerClassName}
          style={{
            height: `${innerHeight}px`,
          }}
        >
          {items}
        </Block>
      </Block>
    );
  },
);
