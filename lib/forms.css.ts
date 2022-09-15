import { style } from '@vanilla-extract/css';
import { elevations, panelClass } from './panel.css.js';
import { genericVars } from './theme.css.js';

export const formInput = style(
  [
    elevations.elevationTop,
    panelClass,
    {
      borderWidth: genericVars.border.weight.normal,
      borderStyle: 'solid',
      padding: genericVars.space.standard,
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
          // color: hsl(baseVars.h, baseVars.s, 70),
        },
      },
    },
  ],
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
          fontSize: genericVars.text.size.normal,
          height: '0.7rem',
          // height: '0.65em',
          aspectRatio: '1/1',
          transform: 'scale(0)',
          transition: '120ms transform ease-in-out',
          boxShadow: 'inset 16px 16px var(--accent-color, currentColor)',
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
      borderRadius: genericVars.radius.maximum,
      selectors: {
        '&::before': {
          borderRadius: genericVars.radius.maximum,
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
      padding: genericVars.space.standard,
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
          marginRight: genericVars.space.standard,
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
    fontSize: genericVars.text.size.medium,
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
    userSelect: 'none',
  },
  'inputLabelStyle',
);
