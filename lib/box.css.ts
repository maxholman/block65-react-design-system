import {
  style,
  styleVariants,
  type ComplexStyleRule,
  type StyleRule,
} from '@vanilla-extract/css';
import { typedObjectEntries, typedObjectFromEntries } from './utils.js';
import { generalVars } from './ve.css.js';

export type Viewport = 'mobile' | 'tablet' | 'desktop' | 'wide' | 'all';

export type Responsive<T> = Partial<{
  [key in Viewport]: T;
}>;

export type OrResponsive<T> = T | Responsive<T>;

export type Rounded = '0' | '1' | '2' | '3' | '50';

export const roundedVariants = styleVariants(generalVars.radius, (v) => [
  {
    borderRadius: v,
  },
]);

export const roundedStartStartVariants = styleVariants(
  generalVars.radius,
  (v) => [
    {
      borderStartStartRadius: v,
    },
  ],
);

export const roundedStartEndVariants = styleVariants(
  generalVars.radius,
  (v) => [
    {
      borderStartEndRadius: v,
    },
  ],
);

export const roundedEndStartVariants = styleVariants(
  generalVars.radius,
  (v) => [
    {
      borderEndStartRadius: v,
    },
  ],
);

export const roundedEndEndVariants = styleVariants(generalVars.radius, (v) => [
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

export const marginVariants = styleVariants(generalVars.space, (space) => [
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
  generalVars.space,
  (space) => ({
    margin: space,
  }),
);

export const viewportMarginInlineVariants = viewportStyleVariants(
  generalVars.space,
  (space) => ({
    marginInline: space,
  }),
);

export const viewportMarginBlockVariants = viewportStyleVariants(
  generalVars.space,
  (space) => ({
    marginBlock: space,
  }),
);

export const viewportPaddingVariants = viewportStyleVariants(
  generalVars.space,
  (space) => ({
    padding: space,
  }),
);

export const viewportPaddingInlineVariants = viewportStyleVariants(
  generalVars.space,
  (space) => ({
    paddingInline: space,
  }),
);

export const viewportPaddingBlockVariants = viewportStyleVariants(
  generalVars.space,
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
  generalVars.space,
  (space) => ({
    marginInline: space,
  }),
);

export const paddingVariants = styleVariants(generalVars.space, (space) => [
  {
    padding: space,
  },
]);

export const paddingBlockVariants = styleVariants(
  generalVars.space,
  (space) => [
    {
      paddingBlock: space,
    },
  ],
);

export const paddingInlineVariants = styleVariants(
  generalVars.space,
  (space) => [
    {
      paddingInline: space,
    },
  ],
);

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

export const spaceVariants = styleVariants(generalVars.space, (space) => ({
  gap: space,
}));

export const viewportSpaceVariants = viewportStyleVariants(
  generalVars.space,
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
  generalVars.border.width,
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
