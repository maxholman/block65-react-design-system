import {
  style,
  styleVariants,
  type ComplexStyleRule,
  type StyleRule,
} from '@vanilla-extract/css';
import { typedObjectEntries, typedObjectFromEntries } from './utils.js';
import { propsVars } from './vars.css.js';

export type Viewport = 'mobile' | 'tablet' | 'desktop' | 'wide' | 'all';

export type Responsive<T> = Partial<{
  [key in Viewport]: T;
}>;

export type OrResponsive<T> = T | Responsive<T>;

export type Rounded = '0' | '1' | '2' | '3' | '50';

export const roundedVariants = styleVariants(propsVars.radius, (v) => [
  {
    borderRadius: v,
  },
]);

export const roundedStartStartVariants = styleVariants(
  propsVars.radius,
  (v) => [
    {
      borderStartStartRadius: v,
    },
  ],
);

export const roundedStartEndVariants = styleVariants(propsVars.radius, (v) => [
  {
    borderStartEndRadius: v,
  },
]);

export const roundedEndStartVariants = styleVariants(propsVars.radius, (v) => [
  {
    borderEndStartRadius: v,
  },
]);

export const roundedEndEndVariants = styleVariants(propsVars.radius, (v) => [
  {
    borderEndEndRadius: v,
  },
]);

export type TextAlign = 'start' | 'end' | 'center';

export const textAlignVariants = styleVariants({
  start: {
    textAlign: 'start',
  },
  end: {
    textAlign: 'end',
  },
  center: {
    textAlign: 'center',
  },
} satisfies Record<TextAlign, StyleRule>);

export type BorderWidth = '0' | '1' | '2' | '3' | '4';

export type Space =
  | '00'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15';

export const marginVariants = styleVariants(propsVars.space, (space) => [
  {
    margin: space,
  },
]);

const viewportSizes: Record<
  Viewport,
  | Record<never, never>
  | { min: number }
  | { min: number; max: number }
  | { max: number }
> = {
  all: {},

  // WARN: order is very important when not specifying both max and min
  tablet: { max: 60 },
  mobile: { max: 40 },

  // WARN: order is very important when not specifying both max and min
  desktop: { min: 60 },
  wide: { min: 80 },
};

export const precomputedViewportRules = typedObjectFromEntries(
  typedObjectEntries(viewportSizes).map(([viewport, size]) => [
    viewport,
    [
      'screen',
      'min' in size && `(min-width: ${size.min}rem)`,
      'max' in size && `(max-width: ${size.max - 1}.999rem)`,
    ]
      .filter((r): r is string => !!r)
      .join(' and '),
  ]),
);

function viewportStyleVariants<
  Data extends Record<string | number, unknown>,
  Key extends keyof Data,
>(data: Data, mapData: (value: Data[Key], key: Key) => StyleRule) {
  return typedObjectFromEntries(
    typedObjectEntries(precomputedViewportRules).map(([viewport, mqRule]) => [
      viewport,
      styleVariants(data, (variant: Data[Key], k: Key): ComplexStyleRule => {
        const rule = mapData(variant, k);

        if (viewport === 'all') {
          return rule;
        }

        return {
          '@media': {
            [mqRule]: rule,
          },
        };
      }),
    ]),
  );
}

export const viewportMarginVariants = viewportStyleVariants(
  propsVars.space,
  (space) => ({
    margin: space,
  }),
);

export const viewportMarginInlineVariants = viewportStyleVariants(
  propsVars.space,
  (space) => ({
    marginInline: space,
  }),
);

export const viewportMarginBlockVariants = viewportStyleVariants(
  propsVars.space,
  (space) => ({
    marginBlock: space,
  }),
);

export const viewportPaddingVariants = viewportStyleVariants(
  propsVars.space,
  (space) => ({
    padding: space,
  }),
);

export const viewportPaddingInlineVariants = viewportStyleVariants(
  propsVars.space,
  (space) => ({
    paddingInline: space,
  }),
);

export const viewportPaddingBlockVariants = viewportStyleVariants(
  propsVars.space,
  (space) => ({
    paddingBlock: space,
  }),
);

export const viewportFlexDirectionVariants = viewportStyleVariants(
  { row: 'row', column: 'column' },
  (_, direction) => ({
    display: 'flex',
    flexDirection: direction,
  }),
);

export const marginInlineVariants = viewportStyleVariants(
  propsVars.space,
  (space) => ({
    marginInline: space,
  }),
);

export const paddingVariants = styleVariants(propsVars.space, (space) => [
  {
    padding: space,
  },
]);

export const paddingBlockVariants = styleVariants(propsVars.space, (space) => [
  {
    paddingBlock: space,
  },
]);

export const paddingInlineVariants = styleVariants(propsVars.space, (space) => [
  {
    paddingInline: space,
  },
]);

export type Overflow = 'hidden' | 'scroll';

export const overflowVariants = styleVariants({
  hidden: {
    overflow: 'hidden',
  },
  scroll: {
    overflow: 'scroll',
  },
} satisfies Record<Overflow, StyleRule>);

export type TextOverflow = 'ellipsis' | 'clip' | 'break';

const textOverflowCssProps: Record<TextOverflow, StyleRule> = {
  ellipsis: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  clip: {
    textOverflow: 'clip',
    whiteSpace: 'nowrap',
  },
  break: {
    overflowWrap: 'break-word',
    hyphens: 'auto',
  },
};

const textOverflowBase = style({
  display: 'block',
  overflow: 'hidden',
});

export const textOverflowVariants = styleVariants(
  textOverflowCssProps,
  (value) => [textOverflowBase, value],
);


export type TextWrap = 'pretty' | 'balance' | 'nowrap';

export const textWrapVariants = styleVariants({
  balance: {
    textWrap: 'balance'
  },
  pretty: {
    textWrap: 'pretty'
  },
  nowrap: {
      textWrap: 'nowrap'
  }
} satisfies Record<TextWrap, StyleRule>);

export type FlexDirection = 'row' | 'column';

export const flexDirectionVariants = styleVariants(
  {
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
  } satisfies Record<FlexDirection, StyleRule>,
  (props) => props,
);

export const flexGrowClassName = styleVariants<
  Record<`${boolean}`, ComplexStyleRule>
>({
  true: { flexGrow: 1 },
  false: { flexGrow: 0 },
});

export const flexShrinkClass = styleVariants<
  Record<`${boolean}`, ComplexStyleRule>
>({
  true: { flexShrink: 1 },
  false: { flexShrink: 0 },
});

export type Wrap = 'wrap' | 'nowrap' | 'wrapReverse';

export const flexWrapVariants = styleVariants<Record<Wrap, ComplexStyleRule>>({
  wrap: { flexWrap: 'wrap' },
  nowrap: { flexWrap: 'nowrap' },
  wrapReverse: { flexWrap: 'wrap-reverse' },
});

export const spaceVariants = styleVariants(propsVars.space, (space) => ({
  gap: space,
}));

export const viewportSpaceVariants = viewportStyleVariants(
  propsVars.space,
  (space) => ({
    gap: space,
  }),
);

export type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const columnsVariantCols: Record<Columns, Columns> = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
};

export const viewportGridColumnsVariants = viewportStyleVariants(
  columnsVariantCols,
  (cols) => ({
    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
  }),
);

const borderBaseClass = style({
  borderStyle: 'solid',
});

export const borderWidthVariants = styleVariants(
  propsVars.border.width,
  (space) => [
    borderBaseClass,
    {
      borderWidth: space,
    },
  ],
);

// this must be defined after other display styles so that it takes precedence
export const hiddenClass = style({
  display: 'none!important',
});
