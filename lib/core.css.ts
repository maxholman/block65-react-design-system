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
import { borderH, borderS, toneH, toneS } from './tone.css.js';
import { hsl, typedObjectEntries, typedObjectFromEntries } from './utils.js';

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

export type Background = 'none' | '0' | '1' | '2' | '3' | '4';

export type BackgroundHover = Background;

const backgroundStyles = {
  none: {
    backgroundColor: 'transparent',
    color: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
  },
  '0': {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.background0.l),
    color: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
  },
  '1': {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.background1.l),
    color: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
  },
  '2': {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.background2.l),
    color: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
  },
  '3': {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.background3.l),
    color: hsl(toneH, toneS, 100),
  },
  '4': {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.background4.l),
    color: hsl(toneH, toneS, contrastSchemeVars.foreground5.l),
  },
} satisfies Record<Background, ComplexStyleRule>;

export const backgroundVariants = styleVariants(backgroundStyles, (styles) => [
  styles,
]);

export const backgroundHoverVariants = styleVariants(
  typedObjectFromEntries(
    typedObjectEntries(backgroundStyles).map(([key, value]) => [
      key as BackgroundHover,
      [
        {
          selectors: {
            '&:hover': value,
          },
        },
      ],
    ]),
  ),
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

export type BorderVariant = 'transparent' | 'subtle' | 'normal' | 'strong';
export type BorderHoverVariant = BorderVariant;

const borderL = createVar();

const borderBaseClass = style({
  borderStyle: 'solid',
});

const borderVariantStyles: Record<BorderVariant, StyleRule> = {
  transparent: {
    borderColor: 'transparent',
  },
  subtle: {
    vars: {
      [borderL]: contrastSchemeVars.background2.l,
    },
    borderColor: hsl(borderH, borderS, borderL),
  },
  normal: {
    vars: {
      [borderL]: contrastSchemeVars.background3.l,
    },
    borderColor: hsl(borderH, borderS, borderL),
  },
  strong: {
    vars: {
      [borderL]: contrastSchemeVars.background3.l,
    },
    borderColor: hsl(borderH, borderS, borderL),
  },
};

const borderHoverVariantStyles: Record<BorderHoverVariant, StyleRule> = {
  transparent: {
    borderColor: 'transparent',
  },
  subtle: {
    vars: {
      [borderL]: contrastSchemeVars.foreground1.l,
    },
    borderColor: hsl(borderH, borderS, borderL),
  },
  normal: {
    vars: {
      [borderL]: contrastSchemeVars.foreground3.l,
    },
    borderColor: hsl(borderH, borderS, borderL),
  },
  strong: {
    vars: {
      [borderL]: contrastSchemeVars.foreground2.l,
    },
    borderColor: hsl(borderH, borderS, borderL),
  },
};

export const borderVariants = styleVariants(borderVariantStyles, (rule) => [
  borderBaseClass,
  rule,
]);

export const borderHoverVariants = styleVariants(
  borderHoverVariantStyles,
  (rule) => [
    borderBaseClass,
    {
      selectors: {
        '&:hover': rule,
      },
    },
  ],
);

export const borderWidthVariants = styleVariants(
  genericVars.border.width,
  (space) => [
    borderBaseClass,
    {
      borderWidth: space,
    },
  ],
);

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
