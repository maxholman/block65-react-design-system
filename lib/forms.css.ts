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
import { toneL } from './tone.css.js';
import { fontSizeVariantVars } from './typography.css.js';
import { hsl } from './utils.js';

const borderWidthVar = createVar();

export const formInputPasswordIcon = style({
  aspectRatio: '1/1',
});

export const formInputPasswordToggleButton = style({
  cursor: 'pointer',
  selectors: {
    '&:hover,&:focus-visible': {
      backgroundColor: hsl(0, 0, contrastSchemeVars.background1.l),
    },
  },
});

export const formInputHack = style({
  flexGrow: 1,
  flexShrink: 1,
  // this is arguably a little hack because it doesnt seem
  // possible to override the defualt user agent style sheet
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
      pointerEvents: 'none', // paired with tabindex="-1" to prevent focus
    },
  },
});

export const formInputInnerClassName = style([
  fontSizeVariantVars[1],
  {
    selectors: {
      '&::placeholder': {
        color: hsl(0, 0, contrastSchemeVars.foreground2.l),
      },
    },
  },
]);

export const formInputNotCheckRadioClassName = style([
  focusVisibleClassName,
  {
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
  formInputOuterClassName,
  formInputInnerClassName,
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

export const formInputMessage = style({
  vars: {
    [toneL]: contrastSchemeVars.foreground2.l,
  },
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
    lineHeight: genericVars.text.lineHeight.normal,
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
        marginInline: calc.add(
          genericVars.space[5],
          genericVars.border.width[1],
        ),
        display: 'block',
        aspectRatio: '2/1',
        backgroundColor: 'currentColor',
        clipPath: 'polygon(100% 0%, 0 0%, 50% 100%)',
      },
    },
  },
]);

export const fieldLabelStyle = style({
  alignItems: 'center',
});

export const inputLabelStyle = style({
  cursor: 'pointer',
});
