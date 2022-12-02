import { style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { colorThemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export type PanelVariant = 'standard' | 'ghost' | 'subtle';

export const panelClass = style({
  borderRadius: genericVars.radius.medium,
  padding: genericVars.space.medium,
  borderWidth: genericVars.border.weight.normal,
  borderStyle: 'solid',
  borderColor: 'transparent',
  flex: 1,
  // transition: 'all 0.1s ease-in-out',
});

const panelVariants: Record<
  PanelVariant,
  {
    backgroundColor?: string;
    borderStyle?: string;
  }
> = {
  standard: {
    borderStyle: 'none',
  },
  ghost: {
    backgroundColor: 'unset',
  },
  subtle: {
    borderStyle: 'none',
    backgroundColor: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 50),
  },
};

export const panelVariantsClasses = styleVariants(panelVariants, (variant) => [
  panelClass,
  variant,
]);
