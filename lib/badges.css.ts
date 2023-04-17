// eslint-disable-next-line import/no-extraneous-dependencies
import type { StyleRule } from '@vanilla-extract/css';
import { style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { toneH, toneL, toneS } from './tone.css.js';
import { hsl } from './utils.js';

export type BadgeVariant = 'standard' | 'ghost' | 'subtle' | 'transparent';

const base = style({
  cursor: 'default',
  fontWeight: genericVars.text.weight.medium,
  textTransform: 'uppercase',
  borderWidth: genericVars.border.weight.hairline,
  borderStyle: 'solid',
});

const variantRules: Record<
  BadgeVariant,
  {
    borderColor: string;
  } & Pick<StyleRule, 'color' | 'backgroundColor' | 'fontWeight' | 'vars'>
> = {
  standard: {
    vars: {
      [toneL]: contrastSchemeVars.foreground0.l,
    },
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.foreground2.l),
    borderColor: hsl(toneH, toneS, contrastSchemeVars.foreground2.l),
  },
  ghost: {
    color: hsl(toneH, toneS, contrastSchemeVars.foreground2.l),
    borderColor: hsl(toneH, toneS, contrastSchemeVars.foreground2.l),
  },
  subtle: {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.background2.l),
    color: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
    borderColor: hsl(toneH, toneS, contrastSchemeVars.foreground4.l),
  },
  transparent: {
    backgroundColor: 'transparent',
    color: hsl(toneH, toneS, contrastSchemeVars.foreground2.l),
    fontWeight: genericVars.text.weight.bold,
    borderColor: 'transparent',
  },
};

export const badgeVariants = styleVariants(variantRules, (variant) => [
  base,
  variant,
]);
