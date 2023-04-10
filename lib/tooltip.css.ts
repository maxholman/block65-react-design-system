// eslint-disable-next-line import/no-extraneous-dependencies
import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
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
    background: hsl(0, 0, contrastSchemeVars.level5.l, 0.9),
    color: hsl(0, 0, contrastSchemeVars.level0.l),
    padding: genericVars.space[3],
    borderRadius: genericVars.radius.medium,
    pointerEvents: 'none',
    width: 'max-content',
  },
]);

// Used to position the tooltip arrow in javascript, depending on the orientation
export const arrowOffsetVar = createVar();

export const tooltipArrowStyle = style({
  vars: {
    [arrowOffsetVar]: calc.negate(genericVars.space[3]),
  },
  position: 'absolute',
  background: 'inherit',
  aspectRatio: '1/1',
  height: genericVars.space[4],
  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
});
