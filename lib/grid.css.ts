import { fallbackVar, style } from '@vanilla-extract/css';

const gridCols = fallbackVar('3');
const gridColWidth = fallbackVar('1fr');

export const gridClass = style({
  display: 'grid',
  gridTemplateColumns: `repeat(${gridCols}, ${gridColWidth})`, // / repeat(${gridCols}, ${gridColWidth})`,
});
