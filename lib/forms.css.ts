import { style } from '@vanilla-extract/css';
import { genericVars } from './design-system.css.js';
import { elevations } from './panel.css.js';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

export const formInput = style([
  // form inputs always look like a top elevation
  elevations.top,
  {
    padding: genericVars.space.small,
    borderStyle: 'solid',
    borderWidth: genericVars.border.weight.normal,
    borderRadius: genericVars.radius.standard,
    fontSize: genericVars.text.size.normal,
    selectors: {
      '&[readonly]': {
        paddingLeft: 0,
        paddingRight: 0,
        borderLeft: 0,
        borderRight: 0,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
      },
      '&::placeholder': {
        color: hsl(0, 0, contrastSchemeVars.ink.l),
      },
    },
  },
]);

export const formInputCheckRadioBase = style([
  formInput,
  {
    // transform: 'translateY(0.075em)', // magic number
    cursor: 'pointer',
    fontSize: '0.9em',
    height: '0.65em',
    aspectRatio: '1/1',
    color: hsl(colorThemeVars.accent.h, 0, contrastSchemeVars.fg.l),
    selectors: {
      '&:focus-visible,&.focus-visible': {
        outline: 'max(2px, 0.15em) solid currentColor',
        outlineOffset: 'max(2px, 0.15em)',
      },
      '&:focus-within': {
        color: hsl(
          colorThemeVars.accent.h,
          colorThemeVars.accent.s,
          colorThemeVars.accent.l,
        ),
      },
      '&::before': {
        content: '""',
        fontSize: genericVars.text.size.normal,
        height: '0.7rem', // careful with this as it causes the text to jump
        aspectRatio: '1/1',
        // transform: 'scale(0)',
        // transition: '60ms transform ease-in-out',
        boxShadow: `inset 16px 16px ${hsl(
          colorThemeVars.accent.h,
          colorThemeVars.accent.s,
          colorThemeVars.accent.l,
        )}`,
      },
      '&:checked': {
        borderColor: 'currentColor',
        display: 'grid',
        placeContent: 'center',
      },
      '&:checked::before': {
        transform: 'scale(1)',
      },
      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
  },
]);

export const formInputCheckbox = style([
  formInputCheckRadioBase,
  {
    selectors: {
      '&::before': {
        transformOrigin: 'bottom left',
        clipPath:
          'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
      },
    },
  },
]);

export const formInputRadio = style([
  formInputCheckRadioBase,
  {
    borderRadius: genericVars.radius.maximum,
    selectors: {
      '&::before': {
        borderRadius: genericVars.radius.maximum,
      },
    },
  },
]);

const formInputSelectGridareaName = 's';

export const formInputSelect = style([
  formInput,
  {
    cursor: 'pointer',
    gridArea: formInputSelectGridareaName,
  },
]);

const formInputSelectWrapper = style([
  // formInput,
  {
    display: 'grid',
    gridTemplateAreas: JSON.stringify(formInputSelectGridareaName),
    // padding: 0,
  },
]);

export const formInputSelectWrapperMultiple = style([
  formInputSelectWrapper,
  {
    lineHeight: genericVars.text.lineHeight.standard,
  },
]);

export const formInputSelectWrapperSingle = style([
  formInputSelectWrapper,
  {
    alignItems: 'center',
    selectors: {
      '&::after': {
        gridArea: formInputSelectGridareaName,
        content: JSON.stringify(''),
        justifySelf: 'flex-end',
        width: genericVars.space.standard,
        marginRight: genericVars.space.standard,
        aspectRatio: '2/1',
        backgroundColor: 'currentColor',
        clipPath: 'polygon(100% 0%, 0 0%, 50% 100%)',
      },
    },
  },
]);

export const fieldLabelWrapperStyle = style({
  fontSize: genericVars.text.size.medium,
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const fieldLabelStyle = style({
  cursor: 'pointer',
  alignItems: 'center',
});

export const fieldLabelTertiaryStyle = style({
  fontSize: genericVars.text.size.normal,
  // cursor: 'default',
  // pointerEvents: 'none',
});

export const inputLabelStyle = style({
  // cursor: 'pointer',
  userSelect: 'none',
});
