import { style } from '@vanilla-extract/css';
import { textVariantVars } from './typography.css.js';
import { generalVars, globalVars } from './ve.css.js';

export const tooltipClassName = style({
  width: 'max-content',
  paddingBlock: generalVars.space[2],
  paddingInline: generalVars.space[3],
  backgroundColor: globalVars.color.fgColor,
  color: globalVars.color.bgColor,
  borderRadius: globalVars.border.radius,
  borderWidth: globalVars.border.width,
  fontSize: textVariantVars.size['00'].fontSize,
});
