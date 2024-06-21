import { style } from '@vanilla-extract/css';
import { genericVars, globalVars } from './box.css.js';
import { textVariantVars } from './typography.css.js';

export const tooltipClassName = style({
  width: 'max-content',
  paddingBlock: genericVars.space[2],
  paddingInline: genericVars.space[3],
  backgroundColor: globalVars.color.fgColor,
  color: globalVars.color.bgColor,
  borderRadius: globalVars.border.radius,
  borderWidth: globalVars.border.width,
  fontSize: textVariantVars.size['00'].fontSize,
});
