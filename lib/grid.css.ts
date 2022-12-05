import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';

export const gridColsVar = createVar();
const gridColWidth = '1fr';

export const gridClass = style({
  display: 'grid',
  gridTemplateColumns: `repeat(${gridColsVar}, ${gridColWidth})`, // / repeat(${gridCols}, ${gridColWidth})`,
});

export const gridVariants = styleVariants(genericVars.space, (space) => [
  gridClass,
  {
    gap: space,
  },
]);
