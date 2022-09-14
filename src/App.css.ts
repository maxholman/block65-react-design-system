import { createThemeContract, globalStyle } from '@vanilla-extract/css';

export const localThemeVars = createThemeContract({
  color: {
    brand: null,
  },
  font: {
    body: null,
  },
});

globalStyle(':focus, :focus-visible', {
  outline: 'revert',
});

globalStyle('body, html', {
  fontFamily: 'Inter',
});
