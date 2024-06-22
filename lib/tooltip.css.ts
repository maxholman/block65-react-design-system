import { style } from '@vanilla-extract/css';
import { textVariantVars } from './typography.css.js';
import { propsVars, globalVars } from './vars.css.js';

export const tooltipClassName = style({
  width: 'max-content',
  paddingBlock: propsVars.space[2],
  paddingInline: propsVars.space[3],
  backgroundColor: globalVars.color.fgColor,
  color: globalVars.color.bgColor,
  borderRadius: globalVars.border.radius,
  borderWidth: globalVars.border.width,
  fontSize: textVariantVars.size['00'].fontSize,
});
