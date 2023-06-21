// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createVar,
  style,
  styleVariants,
  type ComplexStyleRule,
  type StyleRule,
} from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { toneH } from './tone.css.js';
import { oklch, typedObjectEntries, typedObjectFromEntries } from './utils.js';

export type Viewport = 'mobile' | 'tablet' | 'desktop' | 'wide' | 'all';

export type Responsive<T> = Partial<{
  [key in Viewport]: T;
}>;

export type OrResponsive<T> = T | Responsive<T>;

// accepting null means we can skip default assignments and specifically
// disable when consuming
export type Falsy = false | null | undefined;

export type Rounded = 'medium' | 'none' | 'small' | 'large' | 'maximum';

export const roundedVariants = styleVariants(genericVars.radius, (v) => [
  {
    borderRadius: v,
  },
]);

export const roundedStartStartVariants = styleVariants(
  genericVars.radius,
  (v) => [
    {
      borderStartStartRadius: v,
    },
  ],
);

export const roundedStartEndVariants = styleVariants(
  genericVars.radius,
  (v) => [
    {
      borderStartEndRadius: v,
    },
  ],
);

export const roundedEndStartVariants = styleVariants(
  genericVars.radius,
  (v) => [
    {
      borderEndStartRadius: v,
    },
  ],
);

export const roundedEndEndVariants = styleVariants(genericVars.radius, (v) => [
  {
    borderEndEndRadius: v,
  },
]);

export type Swatch =
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

export const bgSwatchL = createVar();
export const bgSwatchC = createVar();
export const fgSwatchL = createVar();
export const fgSwatchC = createVar();

const bgStyle = {
  backgroundColor: oklch(bgSwatchL, bgSwatchC, toneH),
  color: oklch(fgSwatchL, fgSwatchC, toneH),
};

// this is hard coded to be light, as it is used to
// contrast against solid colours
const commonFg = {
  c: '0',
  l: '98%',
};

const backgroundVariantMatrix: Record<
  Swatch,
  [bg: { c: string; l: string }, fg: { c: string; l: string }]
> = {
  0: [contrastSchemeVars.swatch['0'], contrastSchemeVars.swatch['14']],
  1: [contrastSchemeVars.swatch['1'], contrastSchemeVars.swatch['14']],
  2: [contrastSchemeVars.swatch['2'], contrastSchemeVars.swatch['14']],
  3: [contrastSchemeVars.swatch['3'], contrastSchemeVars.swatch['14']],
  4: [contrastSchemeVars.swatch['4'], contrastSchemeVars.swatch['14']],

  5: [contrastSchemeVars.swatch['5'], contrastSchemeVars.swatch['14']],
  6: [contrastSchemeVars.swatch['6'], commonFg],
  7: [contrastSchemeVars.swatch['7'], commonFg],
  8: [contrastSchemeVars.swatch['8'], commonFg],
  9: [contrastSchemeVars.swatch['9'], commonFg],
  10: [contrastSchemeVars.swatch['10'], commonFg],

  11: [contrastSchemeVars.swatch['11'], commonFg],
  12: [contrastSchemeVars.swatch['12'], contrastSchemeVars.swatch['1']],
  13: [contrastSchemeVars.swatch['13'], contrastSchemeVars.swatch['1']],
  14: [contrastSchemeVars.swatch['14'], contrastSchemeVars.swatch['1']],
  15: [contrastSchemeVars.swatch['15'], contrastSchemeVars.swatch['1']],
};

export const backgroundVariants = styleVariants(
  backgroundVariantMatrix,
  ([bg, fg]) => [
    {
      ...bgStyle,
      vars: {
        [bgSwatchL]: bg.l,
        [bgSwatchC]: bg.c,
        [fgSwatchL]: fg.l,
        [fgSwatchC]: fg.c,
      },
    },
  ],
);

export const foregroundVariants = styleVariants(
  contrastSchemeVars.swatch,
  (swatch) => [
    {
      vars: {
        [fgSwatchL]: swatch.l,
        [fgSwatchC]: swatch.c,
      },
      color: oklch(fgSwatchL, fgSwatchC, toneH),
    },
  ],
);

export const backgroundHoverVariants = styleVariants(
  backgroundVariantMatrix,
  ([bg]) => [
    {
      // this is needed because if you dont have a background set
      // the hover does not take because it just changes the vars
      ...bgStyle,
    },
    {
      selectors: {
        '&:hover': {
          vars: {
            [bgSwatchL]: bg.l,
            [bgSwatchC]: bg.c,
            // [fgSwatchL]: fg.l,
            // [fgSwatchC]: fg.c,
          },
        },
      },
    },
  ],
);

export type Shadow = '1' | '2' | '3' | '4' | '5' | '6';

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
  'cols',
);

const borderAdjust = createVar();
const borderL = createVar();
const borderC = createVar();

const borderBaseClass = style({
  vars: {
    [borderAdjust]: borderL,

    // light
    // [borderAdjust]: calc.add(borderL, '-5%'),

    // dark
    // [borderAdjust]: calc.add(bgSwatchL, '25%'),
  },
  borderStyle: 'solid',
  borderColor: oklch(borderAdjust, borderC, toneH),
});

export const borderWidthVariants = styleVariants(
  genericVars.border.width,
  (space) => [
    borderBaseClass,
    {
      borderWidth: space,
    },
  ],
);

export const borderVariants = styleVariants(contrastSchemeVars.swatch, (s) => [
  borderBaseClass,
  {
    vars: {
      [borderL]: s.l,
      [borderC]: s.c,
    },
  },
]);

export const borderTransparentClass = style({
  borderColor: 'transparent',
});

export const borderHoverVariants = styleVariants(
  contrastSchemeVars.swatch,
  (swatch) => [
    {
      selectors: {
        '&:hover': {
          vars: {
            [borderL]: swatch.l,
            [borderC]: swatch.c,
          },
        },
      },
    },
  ],
);

export const neutralise = style({
  vars: {
    [borderC]: '0',
    [bgSwatchC]: '0',
    [fgSwatchC]: '0',
  },
});

export const neutraliseHover = style({
  selectors: {
    '&:hover': {
      vars: {
        [borderC]: '0',
        [bgSwatchC]: '0',
        [fgSwatchC]: '0',
      },
    },
  },
});

// this must be defined after other display styles so that it takes precedence
export const hiddenClass = style({
  display: 'none',
});
