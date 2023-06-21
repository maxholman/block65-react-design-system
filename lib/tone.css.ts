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

// export const toneL = createVar();
export const toneH = createVar();

export const toneVariants = styleVariants(colorThemeVars.tones, (tone) => ({
  vars: {
    [toneH]: tone.h,
  },
}));
