import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { fontSizeVariants } from './typography.css.js';
import { hsl } from './utils.js';

export const tooltipClass = style([
  fontSizeVariants.small,
  {
    position: 'absolute',
    top: '0',
    left: '0',
    background: hsl(0, 0, contrastSchemeVars.level5.l),
    color: hsl(0, 0, contrastSchemeVars.level0.l),
    fontWeight: genericVars.text.weight.bold,
    padding: genericVars.space.tiny,
    borderRadius: genericVars.radius.medium,
    pointerEvents: 'none',
    width: 'max-content',
  },
]);

// Used to position the tooltip arrow in javascript, depending on the orientation
export const arrowOffsetVar = createVar();

export const tooltipArrowStyle = style({
  vars: {
    [arrowOffsetVar]: calc(genericVars.space.small)
      .divide(4)
      .negate()
      .toString(),
  },
  position: 'absolute',
  background: 'inherit',
  height: '0.5rem',
  width: '1.5rem',
  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
});
