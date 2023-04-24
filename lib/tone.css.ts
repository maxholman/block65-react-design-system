// eslint-disable-next-line import/no-extraneous-dependencies
import { createVar, styleVariants } from '@vanilla-extract/css';
import { colorThemeVars } from './schemes/color.css.js';

export type Tone =
  | 'accent'
  | 'warn'
  | 'neutral'
  | 'critical'
  | 'promo'
  | 'positive'
  | 'info';

export const toneH = createVar();
export const toneS = createVar();
export const toneL = createVar();

export const toneVariants = styleVariants(colorThemeVars.tones, (tone) => ({
  vars: {
    [toneH]: tone.h,
    [toneS]: tone.s,
  },
}));

export const borderH = createVar();
export const borderS = createVar();
export const borderToneVariants = styleVariants(
  colorThemeVars.tones,
  (tone) => ({
    vars: {
      [borderH]: tone.h,
      [borderS]: tone.s,
    },
  }),
);
