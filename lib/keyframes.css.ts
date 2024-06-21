import { keyframes } from '@vanilla-extract/css';

export const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});
