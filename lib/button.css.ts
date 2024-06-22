import {
  createGlobalThemeContract,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { createGlobalThemeMapFn } from './css-helpers.js';
import { typedObjectEntries, typedObjectFromEntries } from './utils.js';
import { generalVars, globalVars } from './ve.css.js';

export type ButtonVariant =
  | 'default'
  | 'danger'
  | 'invisible'
  | 'inactive'
  | 'primary';

export type ButtonState = 'active' | 'disabled' | 'hover' | 'rest';

const buttonStateVarsShape = {
  active: { bgColor: '', fgColor: '', borderColor: '' },
  disabled: { bgColor: '', fgColor: '', borderColor: '' },
  hover: { bgColor: '', fgColor: '', borderColor: '' },
  rest: { bgColor: '', fgColor: '', borderColor: '' },
} satisfies Record<ButtonState, { bgColor: ''; fgColor: ''; borderColor: '' }>;

export const buttonVariantVars = createGlobalThemeContract(
  {
    default: buttonStateVarsShape,
    danger: buttonStateVarsShape,
    primary: buttonStateVarsShape,
    invisible: buttonStateVarsShape,
    inactive: buttonStateVarsShape,
  } satisfies Record<ButtonVariant, typeof buttonStateVarsShape>,
  createGlobalThemeMapFn('button'),
);

export const buttonVariantClassNames = styleVariants(
  buttonVariantVars,
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

export const buttonStateClassNames = typedObjectFromEntries(
  typedObjectEntries(buttonVariantVars).map(([variant, stateVars]) => [
    variant,
    styleVariants(stateVars, (state) => ({
      color: state.fgColor,
      backgroundColor: state.bgColor,
      borderColor: state.borderColor,
    })),
  ]),
);

export const buttonClassName = style([
  {
    cursor: 'pointer',
    userSelect: 'none',
    borderRadius: globalVars.border.radius,
    borderWidth: globalVars.border.width,
    selectors: {
      '&[disabled]': {
        pointerEvents: 'none',
        cursor: 'default',
        // filter: 'grayscale(1)',
      },

      // keyboard
      '&:focus-visible': {
        outlineStyle: 'solid',
        outlineOffset: generalVars.border.width['3'],
        outlineWidth: generalVars.border.width['3'],
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

export const iconClass = style({
  aspectRatio: '1/1',
  lineHeight: 0,
});

export const visiblyHiddenClass = style({
  visibility: 'hidden',
});

export const busyButtonClass = style({
  pointerEvents: 'none',
});

export const inlineBleedClass = style({
  marginBlock: calc(generalVars.space[0]).negate().toString(),
});
