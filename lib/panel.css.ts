import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { backgroundColorVars, genericVars } from './theme.css.js';
import { hsl } from './utils.js';

export type PanelVariant = 'none' | 'standard' | 'ghost' | 'subtle';
export type PanelElevation = 'none' | 'bottom' | '1' | '2' | '3' | 'top';

export const panelClass = style({
  borderRadius: genericVars.radius.standard,
  padding: genericVars.space.standard,
  borderWidth: genericVars.border.weight.normal,
  borderStyle: 'solid',
  borderColor: 'transparent',
  flex: 1,
});

const panelVariants: Record<
  PanelVariant,
  {
    background?: string;
    borderStyle?: string;
  }
> = {
  none: {
    background: 'red',
    borderStyle: 'none',
  },
  standard: {
    // background: baseVars.surface,
    // color: baseVars.text,
    borderStyle: 'none',
  },
  ghost: {
    background: 'unset',
    // borderColor: hsl(
    //   selfElevationVars.h,
    //   calc(selfElevationVars.s).subtract('90%').toString(),
    //   selfElevationVars.l,
    // ),
    // borderColor: hsl(
    //   backgroundColorVars.h,
    //   calc(backgroundColorVars.s).subtract('90%').toString(),
    //   '90%',
    // ),
    // color: hsl(
    //   selfElevationVars.h,
    //   calc(selfElevationVars.s).subtract('90%').toString(),
    //   calc(selfElevationVars.l).subtract('90%').toString(),
    // ),
  },
  subtle: {
    // color: baseVars.text,
    // borderColor: baseVars.text,
    borderStyle: 'none',
  },
};

export const panelVariantsClasses = styleVariants(panelVariants, (variant) => [
  panelClass,
  variant,
]);

const elevationLightnessAdjust: Record<
  PanelElevation,
  { border: number; bg: number; color: number }
> = {
  none: {
    bg: 1.15,
    border: 1,
    color: 0.4,
  },
  bottom: {
    bg: 1.2,
    border: 1,
    color: 0.4,
  },
  '1': {
    bg: 1.25,
    border: 1.05,
    color: 0.4,
  },
  '2': {
    bg: 1.3,
    border: 1.1,
    color: 0.4,
  },
  '3': {
    bg: 1.35,
    border: 1.15,
    color: 0.4,
  },
  top: {
    bg: 1.4,
    border: 1.2,
    color: 0.4,
  },
};

const elevationBgLVar = createVar();
const elevationBorderLVar = createVar();
export const elevationColorLVar = createVar();

export const elevations = styleVariants(
  elevationLightnessAdjust,
  ({ border, bg, color }) => {
    const colorL = calc(backgroundColorVars.l).multiply(color).toString();
    const bgL = calc(backgroundColorVars.l).multiply(bg).toString();
    const borderL = calc(backgroundColorVars.l).multiply(border).toString();
    return {
      vars: {
        [elevationBgLVar]: bgL,
        [elevationBorderLVar]: borderL,
        [elevationColorLVar]: colorL,
      },
      backgroundColor: hsl(backgroundColorVars.h, backgroundColorVars.s, bgL),
      borderColor: hsl(backgroundColorVars.h, backgroundColorVars.s, borderL),
      color: hsl(backgroundColorVars.h, backgroundColorVars.s, colorL),
    };
  },
);
