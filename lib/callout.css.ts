import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { purposeVariantVars } from './purpose.css.js';
import { calloutVars, globalVars } from './vars.css.js';

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
