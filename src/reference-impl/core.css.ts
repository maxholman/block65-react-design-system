import { createVar, styleVariants } from '@vanilla-extract/css';
import { oklch } from '../../lib/utils.js';
import { lchThemeContractVars } from './schemes.css.js';

export type RefBoxVariant = 'solid' | 'ghost' | 'transparent' | 'subtle';

const ph = createVar();
const pc = createVar();

export const toneVariantClassName = styleVariants(
  lchThemeContractVars.tones,
  (tone) => ({
    vars: {
      [pc]: tone.c,
      [ph]: tone.h,
    },
  }),
);

const intensityVars = lchThemeContractVars.intensity;

export const boxVariantClassName = styleVariants(
  {
    solid: {
      bg: 0,
      fg: 5,
    },
    ghost: {
      bg: 1,
      bga: 0.1,
      border: 1,
      fg: 5,
    },
    transparent: {
      bg: null,
      fg: 5,
    },
    subtle: {
      bg: 0,
      fg: 2,
    },
  } satisfies Record<
    RefBoxVariant,
    {
      bg: keyof typeof intensityVars | null;
      fg: keyof typeof intensityVars;
      border?: keyof typeof intensityVars | undefined;
      bga?: number;
    }
  >,
  (variant) => {
    const borderOrBg = 'border' in variant ? variant.border : variant.bg;

    const toLch = (i: keyof typeof intensityVars, a?: number | undefined) =>
      oklch(intensityVars[i].l, pc, ph, a);

    return {
      backgroundColor:
        variant.bg !== null
          ? toLch(variant.bg, 'bga' in variant ? variant.bga : undefined)
          : 'transparent',
      borderColor: borderOrBg !== null ? toLch(borderOrBg) : 'transparent',
      color: toLch(variant.fg),
    };
  },
);

export const boxFgVariantClassName = styleVariants<
  Record<
    RefBoxVariant,
    {
      fg: keyof typeof intensityVars;
      a?: number;
    }
  >,
  RefBoxVariant
>(
  {
    solid: {
      fg: 5,
    },
    ghost: {
      fg: 5,
    },
    transparent: {
      fg: 5,
    },
    subtle: {
      fg: 2,
    },
  },
  (variant) => ({
    color: variant.fg ? oklch(variant.fg, pc, ph, variant.a) : 'inherit',
  }),
);
