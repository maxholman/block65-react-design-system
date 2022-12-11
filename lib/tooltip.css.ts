import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export const tooltipClass = style({
  position: 'absolute',
  top: '0',
  left: '0',
  background: hsl(0, 0, contrastSchemeVars.level5.l),
  color: hsl(0, 0, contrastSchemeVars.level0.l),
  fontWeight: genericVars.text.weight.bold,
  fontFamily: 'sans-serif',
  padding: `${genericVars.space.tiny} ${genericVars.space.small}`,
  borderRadius: genericVars.radius.medium,
  fontSize: genericVars.text.size.small,
  pointerEvents: 'none',
  width: 'max-content',
});

export const arrowoffsetVar = createVar();

export const tooltipArrowStyle = style({
  vars: {
    [arrowoffsetVar]: calc(genericVars.space.tiny).negate().toString(),
  },
  position: 'absolute',
  background: 'inherit',
  height: genericVars.space.small,
  borderRadius: genericVars.radius.large,
  borderBottomRightRadius: '0',
  aspectRatio: '1/1',
  transform: 'rotate(45deg)',
});
