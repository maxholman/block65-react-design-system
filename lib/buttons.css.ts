import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './design-system.css.js';
import { rotate } from './keyframes.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { toneH, toneS } from './tone.css.js';
import { currentCapHeight } from './typography.css.js';
import { hsl } from './utils.js';

export type ButtonVariant =
  | 'none'
  | 'solid'
  | 'ghost'
  | 'subtle'
  | 'transparent';

export const iconClass = style({
  width: '1em',
  maxHeight: '1em',
  aspectRatio: '1/1',
});

export const buttonClassName = style([
  {
    vars: {
      [currentCapHeight]: genericVars.text.capHeights[1],
    },
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
        outlineColor: hsl(toneH, toneS, contrastSchemeVars.foreground0.l),
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
      borderWidth: genericVars.border.width['3'],
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

export const withIconClass = style({
  display: 'inline-flex',
  minWidth: 0,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});
