// eslint-disable-next-line import/no-extraneous-dependencies
import { style, styleVariants, type StyleRule } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { toneH, toneS } from './tone.css.js';
import { hsl } from './utils.js';

export type AvatarVariant =
  | 'standard'
  | 'ghost'
  | 'subtle'
  | 'transparent'
  | 'image';

const avatarClassName = style({
  vars: {
    [toneS]: '60%',
  },
  display: 'grid',
  placeItems: 'center',
  // outlineWidth: genericVars.border.weight.thick,
  // outlineStyle: 'solid',
  // outlineOffset: calc.negate(genericVars.border.weight.thick),
  width: '4.25ch',
  height: '4.25ch',
  aspectRatio: '1/1',
  color: hsl(toneH, toneS, contrastSchemeVars.foreground4.l),
  fontWeight: genericVars.text.weight.bold,
  textTransform: 'uppercase',
});

export const avatarImgClass = style({
  objectFit: 'cover',
  objectPosition: 'center',
  overflow: 'hidden',
  aspectRatio: '1/1',
});

const numberOfColours = 100;

export const identClasses = [
  ...Array.from({ length: numberOfColours }).map((_, i) =>
    style({
      vars: {
        [toneH]: `${Math.round(i * (360 / numberOfColours))}`,
      },
    }),
  ),
] as const;

const variantRules: Record<
  AvatarVariant,
  {
    // outlineColor: string;
  } & Pick<StyleRule, 'backgroundColor' | 'vars'>
> = {
  standard: {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.foreground2.l),
    // outlineColor: hsl(toneH, toneS, contrastSchemeVars.foreground2.l, 0.25),
  },
  ghost: {
    // outlineColor: hsl(toneH, toneS, contrastSchemeVars.foreground2.l, 0.25),
  },
  subtle: {
    backgroundColor: hsl(toneH, toneS, contrastSchemeVars.background2.l),
    // outlineColor: hsl(toneH, toneS, contrastSchemeVars.foreground4.l, 0.25),
  },
  transparent: {
    backgroundColor: 'transparent',
    // outlineColor: 'transparent',
  },
  image: {
    backgroundColor: hsl(0, 0, 90),
    // outlineColor: 'transparent',
  },
};

export const avatarVariants = styleVariants(variantRules, (variant) => [
  avatarClassName,
  variant,
]);
