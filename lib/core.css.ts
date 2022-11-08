import { styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';

export const marginVariants = styleVariants(genericVars.space, (space) => [
  {
    margin: space,
  },
]);

export const paddingVariants = styleVariants(genericVars.space, (space) => [
  {
    padding: space,
  },
]);
