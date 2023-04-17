// eslint-disable-next-line import/no-extraneous-dependencies
import {
  type ComplexStyleRule,
  createVar,
  style,
  styleVariants,
  type StyleRule,
} from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { toneH, toneS } from './tone.css.js';
import { hsl, typedObjectEntries, typedObjectFromEntries } from './utils.js';
import { contrastSchemeVars } from './vars.js';

export type Viewport = 'mobile' | 'tablet' | 'desktop' | 'wide' | 'all';

export type Responsive<T> = Partial<{
  [key in Viewport]: T;
}>;

export type OrResponsive<T> = T | Responsive<T>;

// accepting null means we can skip default assignments and specifically
// disable when consuming
export type Falsy = false | null | undefined;

export type Rounded = keyof typeof genericVars.radius;

export type Shadow = keyof typeof genericVars.boxShadow;

export const roundedVariants = styleVariants(genericVars.radius, (v) => [
  {
    borderRadius: v,
  },
]);

export type Background =
  | 'bright'
  | 'standard'
  | 'subtle'
  | 'sheer'
  | 'transparent';

export const backgroundVariants = styleVariants({
  transparent: {
    backgroundColor: 'transparent',
    // color: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
  },
  sheer: {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.background1.l, 0.5),
    // color: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
  },
  subtle: {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.background1.l),
    // color: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
  },
  standard: {
    backgroundColor: hsl(
      toneH,
      calc.multiply(toneS, 1.25),
      contrastSchemeVars.background2.l,
    ),
    // color: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
  },
  bright: {
    backgroundColor: hsl(
      toneH,
      calc.multiply(toneS, 1),
      contrastSchemeVars.background3.l,
    ),
    // color: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
  },
} satisfies Record<Background, ComplexStyleRule>);
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

export const marginVariants = styleVariants(genericVars.space, (space) => [
  {
    margin: space,
  },
]);

export const boxShadowVariants = styleVariants(
  genericVars.boxShadow,
  (shadow) => [
    {
      boxShadow: shadow,
    },
  ],
);

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
>(
  data: Data,
  mapData: (value: Data[Key], key: Key) => StyleRule,
  debugId: string,
) {
  return typedObjectFromEntries(
    typedObjectEntries(precomputedViewportRules).map(([viewport, mqRule]) => [
      viewport,
      styleVariants(
        data,
        (variant: Data[Key], k: Key): ComplexStyleRule => {
          const rule = mapData(variant, k);

          if (viewport === 'all') {
            return rule;
          }

          return {
            '@media': {
              [mqRule]: rule,
            },
          };
        },
        debugId && `viewport_${viewport}_${debugId}`,
      ),
    ]),
  );
}

export const viewportMarginVariants = viewportStyleVariants(
  genericVars.space,
  (space) => ({
    margin: space,
  }),
  'margin',
);

export const viewportMarginInlineVariants = viewportStyleVariants(
  genericVars.space,
  (space) => ({
    marginInline: space,
  }),
  'marginInline',
);

export const viewportMarginBlockVariants = viewportStyleVariants(
  genericVars.space,
  (space) => ({
    marginBlock: space,
  }),
  'marginBlock',
);

export const viewportPaddingVariants = viewportStyleVariants(
  genericVars.space,
  (space) => ({
    padding: space,
  }),
  'padding',
);

export const viewportPaddingInlineVariants = viewportStyleVariants(
  genericVars.space,
  (space) => ({
    paddingInline: space,
  }),
  'paddingInline',
);

export const viewportPaddingBlockVariants = viewportStyleVariants(
  genericVars.space,
  (space) => ({
    paddingBlock: space,
  }),
  'paddingBlock',
);

export const viewportFlexDirectionVariants = viewportStyleVariants(
  { row: 'row', column: 'column' },
  (_, direction) => ({
    display: 'flex',
    flexDirection: direction,
  }),
  'flexDirection',
);

export const marginInlineVariants = viewportStyleVariants(
  genericVars.space,
  (space) => ({
    marginInline: space,
  }),
  'marginInline',
);

export const paddingVariants = styleVariants(genericVars.space, (space) => [
  {
    padding: space,
  },
]);

export const paddingBlockVariants = styleVariants(
  genericVars.space,
  (space) => [
    {
      paddingBlock: space,
    },
  ],
);

export const paddingInlineVariants = styleVariants(
  genericVars.space,
  (space) => [
    {
      paddingInline: space,
    },
  ],
);

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

export type BorderWeight =
  | 'none'
  | 'subtle'
  | 'normal'
  | 'strong'
  | '00'
  | '0'
  | '1'
  | '2';

const width = createVar();
const borderL = createVar();

const borderBaseClass = style({
  borderStyle: 'solid',
  borderWidth: width,
});

const borderWeight: Record<BorderWeight, StyleRule> = {
  none: {
    borderColor: 'transparent',
  },
  subtle: {
    vars: {
      [borderL]: contrastSchemeVars.foreground4.l,
    },
    borderColor: hsl(toneH, toneS, borderL),
  },
  normal: {
    vars: {
      [borderL]: contrastSchemeVars.foreground4.l,
    },
    borderColor: hsl(toneH, toneS, borderL),
  },
  strong: {
    vars: {
      [borderL]: contrastSchemeVars.foreground4.l,
    },
    borderColor: hsl(toneH, toneS, borderL),
  },
  '0': {
    borderColor: 'transparent',
  },
  '00': {
    vars: {
      [borderL]: contrastSchemeVars.foreground4.l,
    },
    borderColor: hsl(toneH, toneS, borderL),
  },
  '1': {
    vars: {
      [borderL]: contrastSchemeVars.foreground4.l,
    },
    borderColor: hsl(toneH, toneS, borderL),
  },
  '2': {
    vars: {
      [borderL]: contrastSchemeVars.foreground4.l,
    },
    borderColor: hsl(toneH, toneS, borderL),
  },
};

export const borderWeightVariants = styleVariants(borderWeight, (rule) => [
  borderBaseClass,
  rule,
]);

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

export const spaceVariants = styleVariants(genericVars.space, (space) => ({
  gap: space,
}));

export const viewportSpaceVariants = viewportStyleVariants(
  genericVars.space,
  (space) => ({
    gap: space,
  }),
  'space',
);

export type Columns = 1 | 2 | 3 | 4 | 5;

const columnsVariantCols: Record<Columns, Columns> = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
};

export const viewportGridColumnsVariants = viewportStyleVariants(
  columnsVariantCols,
  (cols) => ({
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
  }),
  'cols',
);
