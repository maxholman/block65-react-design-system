import { createThemeContract } from '@vanilla-extract/css';

export type CalloutVariant = 'info' | 'warning' | 'critical' | 'success';

type CalloutVariantVars = {
  bgColor: string;
  fgColor: string;
  borderColor: string;
  iconColor: string;
};

const calloutStateVars = {
  bgColor: '',
  fgColor: '',
  borderColor: '',
  iconColor: '',
};

export const calloutVars = createThemeContract({
  border: {
    radius: '',
    width: '',
  },
  variant: {
    info: calloutStateVars,
    warning: calloutStateVars,
    critical: calloutStateVars,
    success: calloutStateVars,
  } satisfies Record<CalloutVariant, CalloutVariantVars>,
});

// export const calloutVariantClassNames = styleVariants(
//   calloutVars.variant,
//   (v) => ({
//     color: v.fgColor,
//     backgroundColor: v.bgColor,
//     borderColor: v.borderColor,
//   }),
// );

// export const calloutClass = style({
//   borderRadius: calloutVars.border.radius,
//   borderWidth: calloutVars.border.width,
//   padding: currentCapHeight,
//   display: 'grid',
//   gridTemplateColumns: 'auto 1fr',
//   rowGap: 0,
//   alignItems: 'start',
// });

// export const calloutTextIconWrapperClass = style({
//   gridColumn: 1,
//   lineHeight: 0,
// });

// export const calloutTextIconWrapperVariantClass = styleVariants(
//   calloutVars.variant,
//   (v) => ({
//     color: v.iconColor,
//   }),
// );

// export const calloutTextIconClass = style({
//   display: 'inline-block',
//   width: '1em',
//   height: '1em',
//   aspectRatio: '1/1',
// });

// export const calloutTextClass = style({
//   gridColumn: 2,
// });
