import { fallbackVar, style, styleVariants } from '@vanilla-extract/css';
import { purposeVariantVars } from './purpose.css.js';
import { globalVars } from './vars.css.js';

const badgeClassName = style({
  borderRadius: globalVars.border.radius,
  borderWidth: globalVars.border.width,
  borderStyle: 'solid',
});

export const badgeVariantClassNames = styleVariants(purposeVariantVars, (v) => [
  badgeClassName,
  {
    color: v.fgColor,
    backgroundColor: v.bgColor,
    borderColor: fallbackVar(v.borderColor, v.bgColor),
  },
]);
