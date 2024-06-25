import { createGlobalThemeContract, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { createGlobalThemeMapFn } from './css-helpers.js';
import {
  focusableClassName,
  focusColorVar,
  focusVisibleClassName,
  focusWidthVar,
} from './focusable.css.js';
import { purposeVariantVars } from './purpose.css.js';
import { globalVars, type Prefix, propsVars } from './vars.css.js';
import { textVariantVars } from './typography.css.js';

/**
 * Form control vars
 */
export const formControlVarsMapFnPrefix = 'formControl' satisfies Prefix;
export const formControlVars = createGlobalThemeContract(
  {
    // border: {
    //   radius: '',
    //   width: '',
    // },
    outline: {
      width: '',
    },
  },
  createGlobalThemeMapFn(formControlVarsMapFnPrefix),
);

export const formInputPasswordIcon = style({
  aspectRatio: '1/1',
});

export const formInputPasswordToggleButton = style({
  cursor: 'pointer',
  selectors: {
    '&:hover,&:focus-visible': {
      // we dont use the backgroundHover prop for this because we
      // are also using it for focus-visible
      // backgroundColor: oklch(contrastSchemeVars.swatch.v6.l, 0, 0),
    },
  },
});

export const formInputHack = style({
  flexGrow: 1,
  flexShrink: 1,
  // this is arguably a little hack because it doesn't seem
  // possible to override the default user agent style sheet
  // for input width
  width: '100%',
});

export const formInputOriginIcon = style({
  maxHeight: '1em',
  width: '1em',
  aspectRatio: '1/1',
});

export const formInputOuterClassName = style({
  selectors: {
    '&[type="time"]': {
      display: 'initial',
      // this is a little hack for chrome
      alignItems: 'center',
    },
    '&[readonly]': {
      cursor: 'text',
    },
  },
});

export const formInputInnerClassName = style([
  {
    selectors: {
      '&::placeholder': {},
    },
  },
]);

export const formInputFocusNotCheckRadioClassName = style([
  focusVisibleClassName,
  {
    outlineWidth: formControlVars.outline.width,
    borderRadius: globalVars.border.radius,
    borderColor: purposeVariantVars.default.muted.borderColor,
    selectors: {
      '&:focus': {
        // draw the outline over the border so that we can increase
        // thickness without any layout shifts
        // outlineOffset: calc(borderWidthVar).negate().toString(),
        borderColor: 'transparent',

        outlineStyle: 'solid',
        outlineColor: focusColorVar,
        outlineWidth: focusWidthVar,
      },
      '&:focus-visible': {
        borderColor: focusColorVar,
      },
    },
  },
]);

export const formInputCheckRadioBase = style([
  formInputOuterClassName,
  formInputInnerClassName,
  focusableClassName,
  {
    padding: 'revert',
    cursor: 'pointer',
    color: focusColorVar,

    aspectRatio: '1/1',

    alignSelf: 'center',
    justifySelf: 'center',

    selectors: {
      '&:focus-visible': {
        outlineStyle: 'solid',
        outlineColor: focusColorVar,
        outlineOffset: focusWidthVar,
        outlineWidth: focusWidthVar,
      },
      '&:focus-within': {
        color: focusColorVar,
      },
      '&:active': {
        outlineColor: focusColorVar,
      },
      '&::before': {
        content: '""',
        transform: 'scale(0)',
        transition: '100ms transform ease-in-out',
        height: '0.5em',
      },
      '&:checked': {
        display: 'grid',
        placeContent: 'center',
      },
      '&:checked::before': {
        transform: 'scale(1)',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        filter: 'grayscale(1)',
      },
    },
  },
]);

export const formInputCheckRadioWrapper = style([
  {
    display: 'grid',
    gridTemplateColumns: '1em auto',
    // fontSize: '1.2em',
  },
]);

export const formInputCheckRadioLabel = style({
  alignSelf: 'center',
  gridColumn: 2,
});

export const formInputCheckRadioMessage = style({
  gridColumn: 2,
  gridRow: 2,
});

export const formInputCheckboxInput = style([
  formInputCheckRadioBase,
  {
    width: '100%',
    borderRadius: propsVars.radius[2],

    selectors: {
      '&::before': {
        clipPath:
          'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
        // size and color of the check
        aspectRatio: '1/1',
        // height: '0.35em',
        boxShadow: `inset 1em 1em ${globalVars.color.accent}`,
      },
      '&:checked': {
        // background/border of the check
        borderColor: 'currentColor',
        backgroundColor: 'currentColor',
      },
    },
  },
]);

export const formInputRadioInput = style([
  formInputCheckRadioBase,
  {
    borderRadius: '50%',
    width: '1rem',
    selectors: {
      '&::before': {
        height: '0.5rem',
        aspectRatio: '1/1',
        borderRadius: '50%',
        boxShadow: `inset 1em 1em ${globalVars.color.accent}`,
      },
    },
  },
]);

const formInputSelectGridAreaName = 's';

export const formInputSelect = style([
  formInputOuterClassName,
  formInputInnerClassName,
  {
    cursor: 'pointer',
    gridArea: formInputSelectGridAreaName,
  },
]);

const formInputSelectWrapper = style({
  display: 'grid',
  gridTemplateAreas: JSON.stringify(formInputSelectGridAreaName),
});

export const formInputSelectWrapperMultiple = style([
  formInputSelectWrapper,
  {
    lineHeight: textVariantVars.lineHeight.normal,
  },
]);

export const formInputSelectWrapperSingle = style([
  formInputSelectWrapper,
  {
    alignItems: 'center',
    selectors: {
      '&::after': {
        cursor: 'pointer',
        pointerEvents: 'none',
        gridArea: formInputSelectGridAreaName,
        content: JSON.stringify(''),
        justifySelf: 'flex-end',
        width: '0.75em',
        // the same as the inline padding for inputs + border size
        marginInline: calc.add(propsVars.space[5], propsVars.border.width[1]),
        display: 'block',
        aspectRatio: '2/1',
        backgroundColor: 'currentColor',
        clipPath: 'polygon(100% 0%, 0 0%, 50% 100%)',
      },
    },
  },
]);

export const inputLabelStyle = style({
  cursor: 'pointer',
});
