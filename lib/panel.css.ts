import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { backgroundColorVars, genericVars } from './theme.css.js';
import { hsl } from './utils.js';

export type PanelVariant = keyof typeof panelVariants;
export type PanelElevation = keyof typeof elevationLightnessAdjust;

const elevationLightnessAdjust = {
  elevationNone: {
    border: '15%',
    bg: '100%',
    text: '-50%',
  },
  elevationBottom: {
    border: '5%',
    bg: '20%',
    text: '-50%',
  },
  elevation1: {
    border: '10%',
    bg: '21%',
    text: '-40%',
  },
  elevation2: {
    border: '15%',
    bg: '22%',
    text: '-40%',
  },
  elevation3: {
    border: '15%',
    bg: '24%',
    text: '-40%',
  },
  elevationTop: {
    border: '15%',
    bg: '100%',
    text: '-40%',
  },
};

export const panelClass = style({
  borderRadius: genericVars.radius.standard,
  padding: genericVars.space.standard,
  flex: 1,
  borderWidth: genericVars.border.weight.normal,
  borderStyle: 'solid',
  borderColor: 'transparent',
});

export const panelVariants = styleVariants(
  {
    elevationNone: [
      panelClass,
      {
        background: 'red',
        borderStyle: 'none',
      },
    ],
    standard: [
      panelClass,
      {
        // background: baseVars.surface,
        // color: baseVars.text,
        borderStyle: 'none',
      },
    ],
    ghost: [
      panelClass,
      {
        background: 'none',
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
    ],
    subtle: [
      panelClass,
      {
        // color: baseVars.text,
        // borderColor: baseVars.text,
        borderStyle: 'none',
      },
    ],
  },
  'variants',
);

export const elevations = styleVariants(
  elevationLightnessAdjust,
  ({ border, bg, text }) => ({
    backgroundColor: hsl(
      backgroundColorVars.h,
      backgroundColorVars.s,
      calc(backgroundColorVars.l).add(bg).toString(),
    ),
    borderColor: hsl(
      backgroundColorVars.h,
      backgroundColorVars.s,
      calc(backgroundColorVars.l).add(border).toString(),
    ),
    color: hsl(
      backgroundColorVars.h,
      backgroundColorVars.s,
      calc(backgroundColorVars.l).add(text).toString(),
    ),
  }),
  'elevations',
);
