// eslint-disable-next-line import/no-extraneous-dependencies
import { style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export type PanelVariant = 'standard' | 'ghost' | 'subtle' | 'transparent';

export const panelClass = style({
  borderWidth: genericVars.border.weight.normal,
  borderStyle: 'solid',
  borderColor: 'transparent',
});

const variantRules: Record<
  PanelVariant,
  {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
  }
> = {
  standard: {
    color: hsl(0, 0, contrastSchemeVars.level5.l),
    backgroundColor: hsl(0, 0, contrastSchemeVars.level0point5.l),
  },
  ghost: {
    color: hsl(0, 0, contrastSchemeVars.level5.l),
    backgroundColor: hsl(0, 0, contrastSchemeVars.level0point5.l),
    borderColor: hsl(0, 0, contrastSchemeVars.level1.l),
  },
  subtle: {
    color: hsl(0, 0, contrastSchemeVars.level5.l),
    backgroundColor: hsl(
      colorThemeVars.tones.accent.h,
      colorThemeVars.tones.accent.s,
      contrastSchemeVars.level0point5.l,
    ),
    borderColor: hsl(
      colorThemeVars.tones.accent.h,
      colorThemeVars.tones.accent.s,
      contrastSchemeVars.level1.l,
    ),
  },
  transparent: {
    color: hsl(0, 0, contrastSchemeVars.level5.l),
  },
};

export const panelVariants = styleVariants(variantRules, (variant) => [
  panelClass,
  variant,
]);
