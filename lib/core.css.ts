import { style, StyleRule, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';

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
});

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

export type TextOverflow = 'ellipsis' | 'clip';

const textOverflowCssProps: Record<TextOverflow, StyleRule> = {
  ellipsis: {
    textOverflow: 'ellipsis',
  },
  clip: {
    textOverflow: 'clip',
  },
};

const textOverflowBase = style({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const textOverflowVariants = styleVariants(
  textOverflowCssProps,
  (value) => [textOverflowBase, value],
);
