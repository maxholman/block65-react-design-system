import { style, styleVariants, type StyleRule } from '@vanilla-extract/css';
import { rotate, fadeIn } from './keyframes.css.js';

const rotateAnimation = `${rotate} 0.65s linear infinite`;

// legend: <name> <duration> <timing-function> <delay> <iteration-count> <direction>
const fadeInAnimation = `${fadeIn} 600ms ease 1 900ms forwards`;

export const spinnerClass = style({
  aspectRatio: '1/1',
  transformOrigin: 'center center',
});

export const spinnerAnimationVariantClassNames = styleVariants({
  delay: {
    opacity: 0,
    animation: [rotateAnimation, fadeInAnimation].join(','),
  },
  regular: {
    animation: rotateAnimation,
  },
});

export const inlineSpinnerClass = style({
  display: 'inline-flex',
  width: '1em',
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
