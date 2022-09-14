import { createThemeContract, globalStyle } from '@vanilla-extract/css';

export const localThemeVars = createThemeContract({
  color: {
    brand: null,
  },
  font: {
    body: null,
  },
});

globalStyle(':where(html) :focus,:focus-visible', {
  outline: 'revert',
});

globalStyle(':where(html)', {
  fontFamily: 'Inter',
});
