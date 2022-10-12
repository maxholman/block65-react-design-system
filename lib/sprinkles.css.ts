import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { colorVariantVars, colorVars, genericVars } from './theme.css.js';

const colors = {
  blue101a: 'hsl(210deg,70%,15%)',
  blue100: 'rgba(128,34,128,0.56)',
};

const colorProperties = defineProperties({
  properties: {
    align: genericVars.align,
  },
});

export const sprinkles = createSprinkles(colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
