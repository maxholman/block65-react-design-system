import { style } from '@vanilla-extract/css';
import { globalThemeContract } from './themes.css.js';

const formLevelVars = globalThemeContract.levelTop;

export const formInput = style(
  {
    borderWidth: globalThemeContract.border.weight.standard,
    borderStyle: 'solid',
    borderColor: formLevelVars.ink,
    color: formLevelVars.text,
    background: formLevelVars.surface,
    padding: globalThemeContract.space.standard,
    borderRadius: globalThemeContract.radius.standard,
    // lineHeight: 1.6,
    selectors: {
      '&[readonly]': {
        paddingLeft: 0,
        paddingRight: 0,
        borderLeft: 0,
        borderRight: 0,
        borderColor: 'transparent',
      },
    },
  },
  'formInput',
);

export const formInputCheckRadioBase = style(
  [
    formInput,
    {
      // transform: 'translateY(0.075em)', // magic number
      cursor: 'pointer',
      height: '1.15em',
      aspectRatio: '1/1',
      color: 'var(--accent-color, currentColor)',
      selectors: {
        '&:focus': {
          outline: 'max(2px, 0.15em) solid currentColor',
          outlineOffset: 'max(2px, 0.15em)',
        },
        '&:focus-within': {
          color: 'green',
        },
        '&::before': {
          content: '""',
          width: '0.65em',
          // height: '0.65em',
          aspectRatio: '1/1',
          transform: 'scale(0)',
          transition: '120ms transform ease-in-out',
          boxShadow: 'inset 1em 1em var(--accent-color, currentColor)',
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
  ],
  'formInputCheckRadioBase',
);

export const formInputCheckbox = style(
  [
    formInputCheckRadioBase,
    {
      // borderRadius: globalThemeContract.radius.maximum,
      selectors: {
        '&::before': {
          transformOrigin: 'bottom left',
          clipPath:
            'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
        },
      },
    },
  ],
  'formInputCheckbox',
);

export const formInputRadio = style(
  [
    formInputCheckRadioBase,
    {
      borderRadius: globalThemeContract.radius.maximum,
      selectors: {
        '&::before': {
          borderRadius: globalThemeContract.radius.maximum,
        },
      },
    },
  ],
  'formInputRadio',
);

const formInputSelectGridarea = 's';

export const formInputSelect = style(
  [
    {
      cursor: 'pointer',
      gridArea: formInputSelectGridarea,
      paddingRight: '1em',
    },
  ],
  'formInputSelect',
);

export const formInputSelectWrapper = style([
  formInput,
  {
    display: 'grid',
    gridTemplateAreas: JSON.stringify(formInputSelectGridarea),
    alignItems: 'center',
    selectors: {
      '&:not([multiple])::after': {
        gridArea: formInputSelectGridarea,
        justifySelf: 'end',
        content: JSON.stringify(''),
        width: '0.5em',
        height: '0.25em',
        backgroundColor: 'currentColor',
        clipPath: 'polygon(100% 0%, 0 0%, 50% 100%)',
      },
    },
  },
]);

export const labelStyle = style(
  {
    cursor: 'pointer',
    fontWeight: globalThemeContract.text.weight.bold,
  },
  'labelStyle',
);
