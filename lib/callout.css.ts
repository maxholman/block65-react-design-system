import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { toneH, toneS } from './tone.css.js';
import { hsl } from './utils.js';

const sizeVar = createVar();

export const calloutClass = style({
  vars: {
    [sizeVar]: genericVars.text.size.normal,
  },
  padding: genericVars.space.tiny,
  display: 'grid',
  borderRadius: genericVars.radius.medium,
  borderColor: hsl(toneH, toneS, contrastSchemeVars.level2.l),
  backgroundColor: hsl(toneH, toneS, contrastSchemeVars.level2.l),
  color: hsl(toneH, toneS, contrastSchemeVars.level5.l),
  gridTemplateColumns: 'auto 1fr',
  columnGap: genericVars.space.tiny,
});

export const calloutIconClass = style({
  gridColumn: 1,
  marginBlockStart: calc(sizeVar).multiply(0.25).toString(),
});

export const calloutChildrenClass = style({
  gridColumn: 2,
  fontSize: sizeVar,
});
