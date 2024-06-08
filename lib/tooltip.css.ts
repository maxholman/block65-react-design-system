// eslint-disable-next-line import/no-extraneous-dependencies
import { style } from '@vanilla-extract/css';
import { fontSizeVariants } from './typography.css.js';

export const tooltipClass = style([
  fontSizeVariants[0],
  {
    position: 'absolute',
    top: '0',
    left: '0',
    width: 'max-content',
  },
]);

// Used to position the tooltip arrow in javascript, depending on the orientation
/* export const arrowOffsetVar = createVar();

export const tooltipArrowClass = style({
  vars: {
    [arrowOffsetVar]: calc.negate(genericVars.space[4]),
  },
  position: 'absolute',
  aspectRatio: '1/1',
  height: genericVars.space[5],
  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
}); */
