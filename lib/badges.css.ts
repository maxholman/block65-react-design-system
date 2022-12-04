import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './design-system.css.js';
import { colorThemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export type BadgeVariant =
  | 'standard'
  | 'neutral'
  | 'ghost'
  | 'subtle'
  | 'transparent';

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

const hue = createVar();

export const badgeToneVariants = styleVariants(
  colorThemeVars.tones,
  (value) => ({
    vars: {
      [hue]: value.h,
    },
    // backgroundColor: hsl(value.h, 100, 80),
    // borderColor: hsl(value.h, 60, 70),
    // color: hsl(value.h, 20, 20),
  }),
);

export const variants: Record<
  BadgeVariant,
  {
    backgroundColor?: string;
    color: string;
    borderColor: string;
  }
> = {
  standard: {
    backgroundColor: hsl(hue, colorThemeVars.accent.s, colorThemeVars.accent.l),
    color: hsl(hue, colorThemeVars.accent.s, 100),
    borderColor: hsl(hue, colorThemeVars.accent.s, 50),
  },
  neutral: {
    backgroundColor: hsl(colorThemeVars.accent.h, 10, 50),
    color: hsl(colorThemeVars.accent.h, 10, '90%'),
    borderColor: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, '90%'),
  },
  ghost: {
    color: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 50),
    borderColor: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 50),
  },
  subtle: {
    backgroundColor: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 90),
    color: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 40),
    borderColor: hsl(colorThemeVars.accent.h, colorThemeVars.accent.s, 90),
  },
  transparent: {
    backgroundColor: 'transparent',
    color: 'inherit',
    borderColor: 'transparent',
  },
};

export const badgeVariantClasses = styleVariants(variants, (variant) => [
  base,
  {
    ...(variant.backgroundColor && {
      backgroundColor: variant.backgroundColor,
    }),
    color: variant.color,
    borderColor: variant.borderColor,
  },
]);

// export const inlineBleedClass = style({
//   marginTop: calc(genericVars.space.small).negate().toString(),
//   marginBottom: calc(`${genericVars.space.small}`).negate().toString(),
// });
