import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './design-system.css.js';
import { rotate } from './keyframes.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { toneH } from './tone.css.js';
import { currentCapHeight } from './typography.css.js';
import { oklch } from './utils.js';

export const iconClass = style({
  height: currentCapHeight,
  aspectRatio: '1/1',
  lineHeight: 0,
});

export const buttonClassName = style([
  {
    // vars: {
    //   [currentCapHeight]: genericVars.text.capHeights[1],
    // },
    cursor: 'pointer',
    userSelect: 'none',
    selectors: {
      '&[disabled]': {
        pointerEvents: 'none',
        cursor: 'default',
        filter: 'grayscale(1)',
      },

      // keyboard
      '&:focus-visible': {
        outlineStyle: 'solid',
        outlineOffset: genericVars.border.width['3'],
        outlineWidth: genericVars.border.width['3'],
        outlineColor: oklch(
          contrastSchemeVars.swatch[0].l,
          contrastSchemeVars.swatch[0].c,
          toneH,
        ),
      },

      // mouse, touch, or stylus
      '&:focus:not(:focus-visible)': {},

      // both
      '&:focus-visible,&:focus:not(:focus-visible)': {},

      // gives us the nice little animation on outlineOffset
      '&:active': {
        outlineOffset: 0,
      },
    },
  },
]);

export const visiblyHiddenClass = style({
  visibility: 'hidden',
});

export const busyButtonClass = style({
  pointerEvents: 'none',
  selectors: {
    '&::after': {
      height: currentCapHeight,
      aspectRatio: '1/1',
      content: '""',
      position: 'absolute',
      margin: 'auto',

      // busy indicator
      borderStyle: 'solid',
      borderWidth: genericVars.border.width['2'],
      borderColor: 'transparent',
      borderTopColor: 'currentColor',
      borderRadius: genericVars.radius.maximum,

      // busy indicator animation
      animationName: rotate,
      animationDuration: '0.75s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
    },
  },
});

export const inlineBleedClass = style({
  marginBlock: calc(genericVars.space[0]).negate().toString(),
});
