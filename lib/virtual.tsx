import {
  forwardRef,
  useMemo,
  useState,
  type HTMLAttributes,
  type ForwardedRef,
} from 'react';
import type { Merge } from 'type-fest';
import { useThrottledCallback } from './hooks/use-throttled-callback.js';
import { Block } from './layout.js';
import {
  innerClassName,
  itemClassName,
  windowClassName,
} from './virtual.css.js';

export type VirtualizedListProps = Merge<
  HTMLAttributes<HTMLDivElement>,
  {
    numItems: number;
    renderItem: (
      props: { index: number } & HTMLAttributes<HTMLDivElement>,
    ) => JSX.Element;
    itemHeight: number | ((props: { index: number }) => number);
    listHeight: number;
    overscan?: number;
  }
>;

export const VirtualizedList = forwardRef(
  (
    {
      numItems,
      itemHeight,
      renderItem,
      listHeight,
      overscan = 0,
      ...props
    }: VirtualizedListProps,
    forwardedRef?: ForwardedRef<HTMLDivElement | null>,
  ) => {
    const [scrollTop, setScrollTop] = useState(0);

    const throttledSetScrollTop = useThrottledCallback(setScrollTop, 100);

    const fakeArray = useMemo(
      () => Array.from({ length: numItems }, (_, index) => index),
      [numItems],
    );

    const [innerHeight, items] = fakeArray.reduce<[number, JSX.Element[]]>(
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
        overflow="scroll"
        className={windowClassName}
        onScroll={(e) => throttledSetScrollTop(e.currentTarget.scrollTop)}
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
