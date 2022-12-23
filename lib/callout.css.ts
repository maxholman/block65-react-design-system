import { style } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { toneH, toneS } from './tone.css.js';
import { hsl } from './utils.js';

export const calloutClass = style({
  padding: genericVars.space.tiny,
  borderStyle: 'solid',
  borderWidth: genericVars.border.weight.normal,
  borderRadius: genericVars.radius.medium,
  backgroundColor: hsl(toneH, toneS, contrastSchemeVars.level2.l),
  borderColor: hsl(toneH, toneS, contrastSchemeVars.level1.l),
  color: hsl(toneH, toneS, contrastSchemeVars.level5.l),
});
