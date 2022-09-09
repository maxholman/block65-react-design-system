import { createThemeContract } from '@vanilla-extract/css';

export const localThemeVars = createThemeContract({
  color: {
    brand: null,
  },
  font: {
    body: null,
  },
});
