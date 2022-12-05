import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';

export const listColsVar = createVar();
const listColWidth = '1fr';

export const listClass = style({
  display: 'grid',
  gridTemplateColumns: `repeat(${listColsVar}, ${listColWidth})`,
  // gridAutoFlow: 'column',
  listStyleType: '',
  listStylePosition: 'inside',
});

export const listItemClass = style({
  display: 'list-item',
});

export const listVariants = styleVariants(genericVars.space, (space) => [
  listClass,
  {
    gap: space,
  },
]);
