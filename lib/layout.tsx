import { forwardRef, type ForwardedRef } from 'react';
import { Box, type BoxProps } from './box.js';
import {
  alignItemsVariants,
  alignSelfVariants,
  justifyContentVariants,
  justifySelfInlineVariants,
  type Placement,
} from './layout.css.js';
import type { Falsy, Merge, ReactHTMLElementsHacked } from './types.js';

export type FlexProps<T extends keyof ReactHTMLElementsHacked = 'div'> = Merge<
  BoxProps<T>,
  {
    alignSelf?: Placement | Falsy;
    alignItems?: Placement | Falsy;

    /**
     * This is a `Grid` child style
     *
     * Use `flexGrow` on a sibling to justify in a flex container or `justifyContent`
     * on the parent if it is a only child
     */
    justifySelf?: Placement | Falsy;

    justifyContent?: Placement | Falsy;
  }
>;

export const Flex = forwardRef(
  <T extends keyof ReactHTMLElementsHacked = 'div'>(
    {
      alignSelf,
      alignItems,
      justifySelf,
      justifyContent,
      className,
      ...props
    }: FlexProps<T>,
    ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => (
    <Box
      ref={ref}
      className={[
        className,

        alignItems && alignItemsVariants[alignItems],
        alignSelf && alignSelfVariants[alignSelf],

        justifyContent && justifyContentVariants[justifyContent],

        justifySelf && justifySelfInlineVariants[justifySelf],
      ]}
      {...props}
    />
  ),
);

export const Block = forwardRef(
  <T extends keyof ReactHTMLElementsHacked = 'div'>(
    props: FlexProps<T>,
    ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => <Flex ref={ref} flexDirection="column" space="7" {...props} />,
);

export const Inline = forwardRef(
  <T extends keyof ReactHTMLElementsHacked = 'div'>(
    props: FlexProps<T>,
    ref: ForwardedRef<ReactHTMLElementsHacked[T]>,
  ) => (
    <Flex
      ref={ref}
      flexDirection="row"
      alignItems="center"
      space="3"
      flexWrap
      {...props}
    />
  ),
);
