// eslint-disable-next-line import/no-extraneous-dependencies
import { fallbackVar, keyframes, style } from '@vanilla-extract/css';
import { contrastSchemeVars } from './schemes/color.css.js';
import { currentCapHeight } from './typography.css.js';
import { hsl } from './utils.js';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinnerClass = style({
  aspectRatio: '1/1',
  height: fallbackVar(currentCapHeight, '1em'),
  width: fallbackVar(currentCapHeight, '1em'),
  display: 'inline-flex',
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
    color: hsl(0, 0, contrastSchemeVars.background0.l),
  },
]);

export const spinnerCircleClass2 = style([
  sss,
  {
    color: hsl(0, 0, contrastSchemeVars.foreground0.l),
    strokeDasharray: '90,360',
    strokeDashoffset: 0,
  },
]);
