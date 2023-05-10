// eslint-disable-next-line import/no-extraneous-dependencies
import { style } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { fontSizeVariants } from './typography.css.js';
import { hsl } from './utils.js';

export const tooltipClass = style([
  fontSizeVariants[0],
  {
    position: 'absolute',
    top: '0',
    left: '0',
    background: hsl(0, 0, contrastSchemeVars.foreground0.l, 0.9),
    color: hsl(0, 0, contrastSchemeVars.background0.l),
    padding: genericVars.space[4],
    borderRadius: genericVars.radius.medium,
    pointerEvents: 'none',
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
  background: 'inherit',
  aspectRatio: '1/1',
  height: genericVars.space[5],
  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
}); */
