import { styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';

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
