import { style } from '@vanilla-extract/css';
import { textVariantVars } from './typography.css.js';
import { propsVars, baseVars } from './vars.css.js';

export const tooltipClassName = style({
  width: 'max-content',
  paddingBlock: propsVars.space[2],
  paddingInline: propsVars.space[3],
  backgroundColor: baseVars.color.fgColor,
  color: baseVars.color.bgColor,
  borderRadius: baseVars.border.radius,
  borderWidth: baseVars.border.width,
  fontSize: textVariantVars.size['00'].fontSize,
});
