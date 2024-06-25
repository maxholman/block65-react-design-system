import {
  createGlobalThemeContract,
  createVar,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { createGlobalThemeMapFn } from './css-helpers.js';
import { purposeVariantVars } from './purpose.css.js';
import { globalVars, type Prefix } from './vars.css.js';

/**
 * Callout vars
 */
export const calloutVarsMapFnPrefix = 'callout' satisfies Prefix;
export const calloutVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
    padding: '',
  },
  createGlobalThemeMapFn(calloutVarsMapFnPrefix),
);

const calloutClassName = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  borderStyle: 'solid',
  borderRadius: globalVars.border.radius,
  borderWidth: globalVars.border.width,
  padding: calloutVars.padding,
});

const iconColorVar = createVar();
export const calloutStyleVariants = styleVariants(
  purposeVariantVars,
  (variant) => [
    calloutClassName,
    {
      backgroundColor: variant.muted.bgColor,
      borderColor: variant.muted.borderColor,
      color: variant.muted.fgColor,
      vars: {
        [iconColorVar]: variant.fgColor,
      },
    },
  ],
);

export const iconWrapperClassName = style({
  gridColumn: 1,
  lineHeight: 0,
});

export const iconClassName = style({
  display: 'inline-block',
  width: '1em',
  height: '1em',
  aspectRatio: '1/1',
  color: iconColorVar,
});

export const textClassName = style({
  display: 'block',
  gridColumn: 2,
  alignSelf: 'center',
});
