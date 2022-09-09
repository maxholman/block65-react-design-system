import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const colors = {
  blue101a: 'hsl(210deg,70%,15%)',
  blue100: 'rgba(128,34,128,0.56)',
};

const colorProperties = defineProperties({
  properties: {
    color: colors,
    background: colors,
  },
});

export const sprinkles = createSprinkles(colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
