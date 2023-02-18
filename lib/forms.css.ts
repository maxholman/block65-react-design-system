import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { genericVars } from './design-system.css.js';
import {
  focusableClassName,
  focusColorVar,
  focusVisibleClassName,
  focusWidthVar,
} from './focusable.css.js';
import { contrastSchemeVars } from './schemes/color.css.js';
import { fontSizeVariantVars } from './typography.css.js';
import { hsl } from './utils.js';

const borderWidthVar = createVar();
const paddingVar = createVar();

export const formInputClassName = style([
  fontSizeVariantVars.normal,
  {
    vars: {
      [borderWidthVar]: genericVars.border.weight.hairline,
      [paddingVar]: '0.65rem',
    },
    padding: paddingVar,
    backgroundColor: hsl(0, 0, contrastSchemeVars.level0.l),
    borderColor: hsl(0, 0, contrastSchemeVars.level4.l),
    borderStyle: 'solid',
    borderWidth: borderWidthVar,
    selectors: {
      '&[type="time"]': {
        display: 'initial',
      },
      '&[readonly]': {
        paddingInline: 0,
        borderInline: 0,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        pointerEvents: 'none', // paired with tabindex="-1" to prevent focus
      },
      '&::placeholder': {
        color: hsl(0, 0, contrastSchemeVars.level4.l),
      },
    },
  },
]);

export const formInputNotCheckRadio = style([
  focusVisibleClassName,
  {
    minHeight: calc.add('2.2rem', paddingVar),
    selectors: {
      '&:focus': {
        // draw the outline over the border so that we can increase
        // thickness without any layout shifts
        outlineOffset: calc(borderWidthVar).negate().toString(),
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
  formInputClassName,
  focusableClassName,
  {
    padding: 'revert',
    cursor: 'pointer',
    color: focusColorVar,

    width: '100%',
    aspectRatio: '1/1',
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
    fontSize: '1.2em',
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
    selectors: {
      '&::before': {
        clipPath:
          'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
        // size and color of the check
        aspectRatio: '1/1',
        // height: '0.35em',
        boxShadow: `inset 1em 1em ${'white'}`,
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
    borderRadius: genericVars.radius.maximum,
    selectors: {
      '&::before': {
        borderRadius: genericVars.radius.maximum,
        // size and colour of the dot
        // height: '0.35em',
        aspectRatio: '1/1',
        boxShadow: 'inset 1em 1em currentColor',
      },
    },
  },
]);

const formInputSelectGridAreaName = 's';

export const formInputSelect = style([
  formInputClassName,
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
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const fieldLabelStyle = style({
  alignItems: 'center',
});

export const fieldLabelTertiaryStyle = style({});

export const inputLabelStyle = style({
  cursor: 'pointer',
});
