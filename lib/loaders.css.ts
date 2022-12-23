import { keyframes, style } from '@vanilla-extract/css';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinnerClass = style({
  height: '1em',
  width: '1em',
  aspectRatio: '1/1',
  display: 'inline-flex',
  verticalAlign: 'text-bottom',
  transformOrigin: 'center center',
  animationName: rotate,
  animationDuration: '.75s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
});

const sss = style({
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '10', // must match the radius in the SVG markup
});

export const spinnerCircleClass = style([
  sss,
  {
    color: hsl(0, 0, colorThemeVars.tones.accent.l),
    // strokeDasharray: '30,360',
    // strokeDashoffset: -80,
  },
]);

export const spinnerCircleClass2 = style([
  sss,
  {
    color: hsl(
      colorThemeVars.tones.accent.h,
      colorThemeVars.tones.accent.s,
      contrastSchemeVars.level1.l,
    ),
    strokeDasharray: '90,360',
    strokeDashoffset: 0,
  },
]);
