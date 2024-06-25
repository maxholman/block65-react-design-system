import {
  createGlobalThemeContract,
  fallbackVar,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { createGlobalThemeMapFn } from './css-helpers.js';
import { purposeVariantVars } from './purpose.css.js';
import { baseVars, type Prefix } from './vars.css.js';

/**
 * Badge vars
 */
export const badgeVarsMapFnPrefix = 'badge' satisfies Prefix;
export const badgeVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
    borderStyle: 'solid',
  },
  createGlobalThemeMapFn(badgeVarsMapFnPrefix),
);

const badgeClassName = style({
  borderRadius: baseVars.border.radius,
  borderWidth: baseVars.border.width,
  borderStyle: 'solid',
});

export const badgePurposeClassNames = styleVariants(purposeVariantVars, (v) => [
  badgeClassName,
  {
    color: v.fgColor,
    backgroundColor: v.bgColor,
    borderColor: fallbackVar(v.borderColor, v.bgColor),
  },
]);
