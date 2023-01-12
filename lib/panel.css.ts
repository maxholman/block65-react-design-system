import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
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
  borderWidth: genericVars.border.weight.normal,
  borderStyle: 'solid',
  borderColor: 'transparent',
});

// WARN: we need to use this hack to lower the specificity
// so that the props can be overriden by box component
globalStyle(`:where(${panelClass})`, {
  padding: genericVars.space.medium,
});

const variantRules: Record<
  PanelVariant,
  {
    backgroundColor?: string;
    borderColor?: string;
  }
> = {
  standard: {
    backgroundColor: hsl(0, 0, contrastSchemeVars.level0point5.l),
  },
  neutral: {
    backgroundColor: hsl(0, 0, contrastSchemeVars.level1.l),
    borderColor: hsl(0, 0, contrastSchemeVars.level1.l),
  },
  ghost: {
    borderColor: hsl(0, 0, contrastSchemeVars.level1.l),
  },
  subtle: {
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
  transparent: {},
};

export const panelVariants = styleVariants(variantRules, (variant) => [
  panelClass,
  variant,
]);
