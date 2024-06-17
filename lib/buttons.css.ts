import {
  createThemeContract,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './core.css.js';
import { rotate } from './keyframes.css.js';
import { currentCapHeight } from './typography.css.js';

export type ButtonVariant =
  | 'default'
  | 'danger'
  | 'invisible'
  | 'inactive'
  | 'primary';

type ButtonStateVars = {
  rest: {
    bgColor: string;
    fgColor: string;
    borderColor: string;
  };
  hover: {
    fgColor: string;
    bgColor: string;
    borderColor: string;
  };
  disabled: {
    bgColor: string;
    fgColor: string;
    borderColor: string;
  };
  active: {
    bgColor: string;
    fgColor: string;
    borderColor: string;
  };
};

const buttonStateVars = {
  rest: { bgColor: '', fgColor: '', borderColor: '' },
  hover: { bgColor: '', fgColor: '', borderColor: '' },
  disabled: { bgColor: '', fgColor: '', borderColor: '' },
  active: { bgColor: '', fgColor: '', borderColor: '' },
} as const;

export const buttonVars = createThemeContract({
  border: {
    radius: '',
    width: '',
  },
  variant: {
    default: buttonStateVars,
    danger: buttonStateVars,
    primary: buttonStateVars,
    invisible: buttonStateVars,
    inactive: buttonStateVars,
  } satisfies Record<ButtonVariant, ButtonStateVars>,
});

export const iconClass = style({
  height: currentCapHeight,
  aspectRatio: '1/1',
  lineHeight: 0,
});

export const buttonVariantClassNames = styleVariants(
  buttonVars.variant,
  (v) => ({
    color: v.rest.fgColor,
    backgroundColor: v.rest.bgColor,
    borderColor: v.rest.borderColor,
    selectors: {
      '&:hover': {
        color: v.hover.fgColor,
        backgroundColor: v.hover.bgColor,
        borderColor: v.hover.borderColor,
      },
      '&:disabled': {
        color: v.disabled.fgColor,
        backgroundColor: v.disabled.bgColor,
        borderColor: v.disabled.borderColor,
      },
      '&:active': {
        color: v.active.fgColor,
        backgroundColor: v.active.bgColor,
        borderColor: v.active.borderColor,
      },
    },
  }),
);

export const buttonClassName = style([
  {
    cursor: 'pointer',
    userSelect: 'none',
    borderRadius: buttonVars.border.radius,
    borderWidth: buttonVars.border.width,
    selectors: {
      '&[disabled]': {
        pointerEvents: 'none',
        cursor: 'default',
        // filter: 'grayscale(1)',
      },

      // keyboard
      '&:focus-visible': {
        outlineStyle: 'solid',
        outlineOffset: genericVars.border.width['3'],
        outlineWidth: genericVars.border.width['3'],
        // outlineColor: oklch(
        //   contrastSchemeVars.swatch.k0.l,
        //   contrastSchemeVars.swatch.k0.c,
        //   toneH,
        // ),
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
      borderRadius: genericVars.radius['50'],

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
