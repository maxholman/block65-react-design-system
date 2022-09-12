import { style, styleVariants } from '@vanilla-extract/css';
import { globalThemeContract } from './themes.css.js';
// import { calc } from '@vanilla-extract/css-utils';

export type PanelVariant = keyof typeof panelVariants;
export type PanelElevation = keyof typeof panelElevations;

const base = style(
  {
    // padding: `${globalThemeContract.space.standard} ${calc(
    //   globalThemeContract.space.standard,
    // ).multiply(2)}`,
    padding: globalThemeContract.space.standard,
  },
  'base',
);

export const panelVariants = styleVariants({
  standard: {
    // background: globalVars.level0.surface,
  },
  ghost: {
    // background: globalVars.level0.surface,
  },
  subtle: {
    // background: globalVars.color.buttons.subtle,
    // borderColor: globalVars.color.buttons.subtle,
  },
});

export const panelElevations = styleVariants({
  elevation0: [
    base,
    {
      background: globalThemeContract.levelBottom.surface,
    },
  ],
  elevation1: [
    base,
    {
      background: globalThemeContract.level1.surface,
    },
  ],
  elevation2: [
    base,
    {
      background: globalThemeContract.level2.surface,
    },
  ],
});
