import {
  createGlobalThemeContract,
  fallbackVar,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { createGlobalThemeMapFn } from './css-helpers.css.js';
import { purposeVariantVars } from './purpose.css.js';

export const badgeVars = createGlobalThemeContract(
  {
    border: {
      radius: '',
      width: '',
    },
  },
  createGlobalThemeMapFn('badge-default'),
);

const badgeClassName = style({
  borderRadius: badgeVars.border.radius,
  borderWidth: badgeVars.border.width,
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
