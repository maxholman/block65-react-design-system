import { style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export type PanelVariant =
  | 'standard'
  | 'ghost'
  | 'subtle'
  | 'neutral'
  | 'transparent';

export const panelClass = style({
  borderRadius: genericVars.radius.medium,
  padding: genericVars.space.medium,
  borderWidth: genericVars.border.weight.normal,
  borderStyle: 'solid',
  borderColor: 'transparent',
});

const variants: Record<
  PanelVariant,
  {
    backgroundColor?: string;
    borderColor?: string;
  }
> = {
  standard: {
    backgroundColor: hsl(
      colorThemeVars.accent.h,
      0,
      contrastSchemeVars.level0.l,
    ),
  },
  neutral: {
    backgroundColor: hsl(
      colorThemeVars.accent.h,
      0,
      contrastSchemeVars.level1.l,
    ),
    borderColor: hsl(colorThemeVars.accent.h, 0, contrastSchemeVars.level3.l),
  },
  ghost: {
    borderColor: hsl(colorThemeVars.accent.h, 0, contrastSchemeVars.level3.l),
  },
  subtle: {
    backgroundColor: hsl(
      colorThemeVars.accent.h,
      colorThemeVars.accent.s,
      contrastSchemeVars.level1.l,
    ),
    borderColor: hsl(
      colorThemeVars.accent.h,
      colorThemeVars.accent.s,
      contrastSchemeVars.level3.l,
    ),
  },
  transparent: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
};

export const panelVariantsClasses = styleVariants(variants, (variant) => [
  panelClass,
  variant,
]);
