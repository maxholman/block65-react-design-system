import {
  fallbackVar,
  keyframes,
  style,
  styleVariants,
  type StyleRule,
} from '@vanilla-extract/css';
import { currentCapHeight } from './typography.css.js';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinnerClass = style({
  aspectRatio: '1/1',
  transformOrigin: 'center center',
  animationName: rotate,
  animationDuration: '.75s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
});

export const inlineSpinnerClass = style({
  display: 'inline-flex',
  height: fallbackVar(currentCapHeight, '1em'),
  width: fallbackVar(currentCapHeight, '1em'),
});

export type SpinnerSize = '1' | '2' | '3' | '4' | '5';

export const spinnerSizeVariantClassNames = styleVariants({
  1: {
    height: '1rem',
    width: '1rem',
  },
  2: {
    height: '2rem',
    width: '2rem',
  },
  3: {
    height: '3rem',
    width: '3rem',
  },
  4: {
    height: '4rem',
    width: '4rem',
  },
  5: {
    height: '5rem',
    width: '5rem',
  },
} satisfies Record<SpinnerSize, StyleRule>);

const circleBase = style({
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '10', // must be less than the radius in the SVG markup
});

export const trackCircleClassName = style([
  circleBase,
  {
    color: 'transparent',
  },
]);

export const runnerCircleClassName = style([
  circleBase,
  {
    color: 'currentColor',
    strokeDasharray: '90,360',
    strokeDashoffset: 0,
  },
]);
