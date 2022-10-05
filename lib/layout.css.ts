import { style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './theme.css.js';

export const flexRow = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const flexColumnVariants = styleVariants(genericVars.space, (space) => [
  flexColumn,
  {
    gap: space,
  },
]);

export const flexRowVariants = styleVariants(genericVars.space, (space) => [
  flexRow,
  {
    gap: space,
  },
]);

export const alignItems = styleVariants(genericVars.align, (align) => ({
  alignItems: align,
}));
