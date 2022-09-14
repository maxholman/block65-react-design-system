import { style } from '@vanilla-extract/css';
import { globalThemeVars } from './global-theme.css.js';

const formLevelVars = globalThemeVars.levelTop;

export const formInput = style(
  {
    borderWidth: globalThemeVars.border.weight.normal,
    borderStyle: 'solid',
    borderColor: formLevelVars.ink,
    color: formLevelVars.text,
    background: formLevelVars.surface,
    padding: globalThemeVars.space.standard,
    borderRadius: globalThemeVars.radius.standard,
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
      fontSize: '0.9em',
      height: '0.65em',
      aspectRatio: '1/1',
      color: 'var(--accent-color, currentColor)',
      selectors: {
        '&:focus-visible,&.focus-visible': {
          outline: 'max(2px, 0.15em) solid currentColor',
          outlineOffset: 'max(2px, 0.15em)',
        },
        '&:focus-within': {
          color: 'green',
        },
        '&::before': {
          content: '""',
          height: '0.75em',
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
      borderRadius: globalThemeVars.radius.maximum,
      selectors: {
        '&::before': {
          borderRadius: globalThemeVars.radius.maximum,
        },
      },
    },
  ],
  'formInputRadio',
);

const formInputSelectGridareaName = 's';

export const formInputSelect = style(
  [
    {
      cursor: 'pointer',
      gridArea: formInputSelectGridareaName,
      padding: globalThemeVars.space.standard,
    },
  ],
  'formInputSelect',
);

export const formInputSelectWrapper = style(
  [
    formInput,
    {
      display: 'grid',
      gridTemplateAreas: JSON.stringify(formInputSelectGridareaName),
      alignItems: 'center',
      padding: 0,
      selectors: {
        '&::after': {
          gridArea: formInputSelectGridareaName,
          justifySelf: 'end',
          content: JSON.stringify(''),
          width: '0.5em',
          height: '0.25em',
          backgroundColor: 'currentColor',
          marginRight: globalThemeVars.space.standard,
          clipPath: 'polygon(100% 0%, 0 0%, 50% 100%)',
        },
      },
    },
  ],
  'formInputSelectWrapper',
);

export const fieldLabelStyle = style(
  {
    cursor: 'pointer',
    fontSize: globalThemeVars.text.size.medium,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  'fieldLabelStyle',
);

export const fieldLabelTertiaryStyle = style(
  {
    cursor: 'default',
    pointerEvents: 'none',
  },
  'fieldLabelTertiaryStyle',
);

export const inputLabelStyle = style(
  {
    cursor: 'pointer',
  },
  'inputLabelStyle',
);
