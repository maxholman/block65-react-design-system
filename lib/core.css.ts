// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createVar,
  style,
  styleVariants,
  type StyleRule,
} from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { toneH, toneS } from './tone.css.js';
import { hsl } from './utils.js';
import { contrastSchemeVars } from './vars.js';

// accepting Falsy values provides nice way to turn props off
// accepting null/false means we can skip default assignments and specifically
// disable when consuming
export type Falsy = null | undefined;

export type Rounded = keyof typeof genericVars.radius;

export const roundedVariants = styleVariants(genericVars.radius, (v) => [
  {
    borderRadius: v,
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

export type Space =
  | 'huge'
  | 'large'
  | 'medium'
  | 'small'
  | 'tiny'
  | 'nano'
  | 'none';

export const marginVariants = styleVariants(genericVars.space, (space) => [
  {
    margin: space,
  },
]);

export const marginBlockVariants = styleVariants(genericVars.space, (space) => [
  {
    marginBlock: space,
  },
]);

export const marginInlineVariants = styleVariants(
  genericVars.space,
  (space) => [
    {
      marginInline: space,
    },
  ],
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

export type BorderWeight = 'none' | 'subtle' | 'normal' | 'strong';

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
      [borderL]: contrastSchemeVars.level1.l,
    },
    borderColor: hsl(toneH, toneS, borderL),
  },
  normal: {
    vars: {
      [borderL]: contrastSchemeVars.level1.l,
    },
    borderColor: hsl(toneH, toneS, borderL),
  },
  strong: {
    vars: {
      [borderL]: contrastSchemeVars.level1.l,
    },
    borderColor: hsl(toneH, toneS, borderL),
  },
};

export const borderWeightVariants = styleVariants(borderWeight, (rule) => [
  borderBaseClass,
  rule,
]);
