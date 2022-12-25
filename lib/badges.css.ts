import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { toneH, toneS } from './tone.css.js';
import { hsl } from './utils.js';

export type BadgeVariant = 'standard' | 'ghost' | 'subtle' | 'transparent';

const basePadding = createVar();

const base = style({
  vars: {
    [basePadding]: genericVars.space.nano,
  },
  cursor: 'default',
  borderStyle: 'solid',
  display: 'flex',
  fontSize: genericVars.text.size.nano,
  fontWeight: genericVars.text.weight.medium,
  textTransform: 'uppercase',
  borderWidth: genericVars.border.weight.hairline,
  borderRadius: genericVars.radius.small,
  flexDirection: 'row',
  alignItems: 'center',
  padding: `${calc(basePadding).divide(2).toString()} ${basePadding}`,
  justifyContent: 'center',
  letterSpacing: 'initial',
});

const variantRules: Record<
  BadgeVariant,
  {
    backgroundColor?: string;
    color: string;
    borderColor: string;
    fontWeight?: string;
  }
> = {
  standard: {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.level3.l),
    color: hsl(toneH, toneS, contrastSchemeVars.level0.l),
    borderColor: hsl(toneH, toneS, contrastSchemeVars.level3.l),
  },
  ghost: {
    color: hsl(toneH, toneS, contrastSchemeVars.level3.l),
    borderColor: hsl(toneH, toneS, contrastSchemeVars.level3.l),
  },
  subtle: {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.level2.l),
    color: hsl(toneH, toneS, contrastSchemeVars.level4.l),
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
