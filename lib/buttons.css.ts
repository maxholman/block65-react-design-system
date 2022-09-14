import { style, styleVariants } from '@vanilla-extract/css';
import { globalThemeVars } from './global-theme.css.js';

export type ButtonVariant = keyof typeof buttonVariants;

const base = style(
  {
    borderWidth: globalThemeVars.border.weight.normal,
    borderStyle: 'solid',
    borderRadius: globalThemeVars.radius.standard,
    padding: globalThemeVars.space.standard,
    textAlign: globalThemeVars.align.center,
    cursor: 'pointer',
    fontSize: globalThemeVars.text.size.normal,
  },
  'base',
);

export const buttonVariants = styleVariants({
  standard: [
    base,
    {
      background: globalThemeVars.color.buttons.accentSurface,
      borderColor: globalThemeVars.color.buttons.accentSurface,
      color: globalThemeVars.color.buttons.accentText,
    },
  ],
  ghost: [
    base,
    {
      background: globalThemeVars.levelTop.surface,
      borderColor: globalThemeVars.color.buttons.accentSurface,
      color: globalThemeVars.color.buttons.accentSurface,
    },
  ],
  subtle: [
    base,
    {
      background: globalThemeVars.color.buttons.subtleSurface,
      borderColor: globalThemeVars.color.buttons.subtleSurface,
      color: globalThemeVars.color.buttons.subtleText,
    },
  ],
});
