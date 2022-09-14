import { style, styleVariants } from '@vanilla-extract/css';
import { globalThemeVars } from './global-theme.css.js';
// import { calc } from '@vanilla-extract/css-utils';

export type PanelVariant = keyof typeof panelVariants;
export type PanelElevation = keyof typeof panelElevations;

const base = style(
  {
    // padding: `${globalThemeContract.space.standard} ${calc(
    //   globalThemeContract.space.standard,
    // ).multiply(2)}`,
    padding: globalThemeVars.space.standard,
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
      background: globalThemeVars.levelBottom.surface,
      color: globalThemeVars.levelBottom.text,
    },
  ],
  elevation1: [
    base,
    {
      background: globalThemeVars.level1.surface,
      color: globalThemeVars.level1.text,
    },
  ],
  elevation2: [
    base,
    {
      background: globalThemeVars.level2.surface,
      color: globalThemeVars.level2.text,
    },
  ],
});
