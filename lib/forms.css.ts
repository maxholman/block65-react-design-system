import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './design-system.css.js';
import { colorThemeVars, contrastSchemeVars } from './schemes/color.css.js';
import { hsl } from './utils.js';

const borderWidthVar = createVar();

export const formInput = style({
  vars: {
    [borderWidthVar]: genericVars.border.weight.hairline,
  },
  padding: genericVars.space.small,
  borderColor: hsl(0, 0, contrastSchemeVars.fg2.l),
  borderStyle: 'solid',
  borderWidth: genericVars.border.weight.hairline,
  borderRadius: genericVars.radius.medium,
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
      color: hsl(0, 0, contrastSchemeVars.fg2.l),
    },
  },
});

export const formInputNotCheckRadio = style({
  selectors: {
    '&:focus-visible': {
      outline: 'max(2px, 0.15em) solid currentColor',
      outlineColor: hsl(
        colorThemeVars.accent.h,
        colorThemeVars.accent.s,
        colorThemeVars.accent.l,
      ),
      outlineOffset: calc(borderWidthVar).negate().toString(),
    },
  },
});

export const formInputCheckRadioBase = style([
  formInput,
  {
    padding: 'revert',
    cursor: 'pointer',
    fontSize: '1em',
    height: genericVars.text.size.medium,
    aspectRatio: '1/1',
    color: hsl(
      colorThemeVars.accent.h,
      colorThemeVars.accent.s,
      contrastSchemeVars.fg.l,
    ),
    // WARN: this is a bit hacky to get perfect alignment
    // and still support multiple lines for radio/check labels
    // I'm unsure how to deal with it correctly as it is linked to line-height
    // which doesnt apply to this input
    marginTop: '0.1em',
    selectors: {
      '&:focus-visible': {
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
        height: '0.5em', // careful with this as it causes the text to jump
        aspectRatio: '1/1',
        transform: 'scale(0)',
        transition: '100ms transform ease-in-out',
        boxShadow: `inset 1em 1em ${hsl(
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

export const formInputCheckRadioWrapper = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
});

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
    selectors: {
      '&::before': {
        transformOrigin: 'bottom left',
        clipPath:
          'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
      },
    },
  },
]);

export const formInputRadioInput = style([
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

const formInputSelectGridAreaName = 's';

export const formInputSelect = style([
  formInput,
  {
    cursor: 'pointer',
    gridArea: formInputSelectGridAreaName,
  },
]);

const formInputSelectWrapper = style([
  // formInput,
  {
    display: 'grid',
    gridTemplateAreas: JSON.stringify(formInputSelectGridAreaName),
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
        gridArea: formInputSelectGridAreaName,
        content: JSON.stringify(''),
        justifySelf: 'flex-end',
        width: genericVars.space.medium,
        marginRight: genericVars.space.medium,
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
  alignItems: 'center',
});

export const fieldLabelTertiaryStyle = style({
  fontSize: genericVars.text.size.normal,
  // cursor: 'default',
  // pointerEvents: 'none',
});

export const inputLabelStyle = style({
  cursor: 'pointer',
  // userSelect: 'none',
});
