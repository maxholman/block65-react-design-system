// eslint-disable-next-line import/no-extraneous-dependencies
import { style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { toneH, toneS } from './tone.css.js';
import { hsl } from './utils.js';

export type BadgeVariant = 'standard' | 'ghost' | 'subtle' | 'transparent';

const base = style({
  cursor: 'default',
  fontWeight: genericVars.text.weight.medium,
  textTransform: 'uppercase',
  borderWidth: genericVars.border.weight.hairline,
  borderStyle: 'solid',
  padding: genericVars.space[2],
  letterSpacing: 'initial',
});

const variantRules: Record<
  BadgeVariant,
  {
    color: string;
    borderColor: string;
    backgroundColor?: string;
    fontWeight?: string;
  }
> = {
  standard: {
    backgroundColor: hsl(toneH, toneS, 50),
    color: hsl(toneH, toneS, 95),
    borderColor: hsl(toneH, toneS, contrastSchemeVars.level3.l),
  },
  ghost: {
    color: hsl(toneH, toneS, contrastSchemeVars.level3.l),
    borderColor: hsl(toneH, toneS, contrastSchemeVars.level3.l),
  },
  subtle: {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.level2.l),
    color: hsl(toneH, toneS, contrastSchemeVars.level5.l),
    borderColor: hsl(toneH, toneS, contrastSchemeVars.level1.l),
  },
  transparent: {
    backgroundColor: 'transparent',
    color: hsl(toneH, toneS, contrastSchemeVars.level3.l),
    fontWeight: genericVars.text.weight.bold,
    borderColor: 'transparent',
  },
};

export const badgeVariants = styleVariants(variantRules, (variant) => [
  base,
  variant,
]);
