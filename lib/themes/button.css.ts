import { createTheme, type MapLeafNodes } from '@vanilla-extract/css';
import { buttonVars } from '../buttons.css.js';
import { defaultThemeVars } from '../core.css.js';
import { hslVar } from '../utils.js';

const buttonVariantEmptyPlaceholder = {
  fgColor: '',
  bgColor: '',
  borderColor: '',
};

export const buttonDarkThemeTokens = {
  border: {
    radius: '2em',
    width: '1px',
  },
  variant: {
    danger: {
      rest: {
        fgColor: hslVar('var(--red-6-hsl)'),
        bgColor: hslVar('var(--gray-9-hsl)'),
        borderColor: hslVar('var(--gray-8-hsl)'),
      },
      hover: {
        fgColor: hslVar('var(--gray-2-hsl)'),
        bgColor: hslVar('var(--red-6-hsl)'),
        borderColor: hslVar('var(--red-7-hsl)'),
      },
      disabled: {
        fgColor: hslVar('var(--red-3-hsl) / 70%'),
        bgColor: hslVar('var(--gray-9-hsl)'),
        borderColor: hslVar('var(--gray-9-hsl)'),
      },
      active: buttonVariantEmptyPlaceholder,
    },

    default: {
      rest: {
        fgColor: hslVar('var(--gray-3-hsl)'),
        bgColor: hslVar('var(--gray-9-hsl)'),
        borderColor: hslVar('var(--gray-7-hsl)'),
      },
      hover: {
        ...buttonVariantEmptyPlaceholder,
        fgColor: hslVar('var(--gray-2-hsl)'),
        bgColor: hslVar('var(--gray-8-hsl)'),
      },
      disabled: {
        fgColor: hslVar('var(--gray-5-hsl)'),
        bgColor: hslVar('var(--gray-9-hsl)'),
        borderColor: hslVar('var(--gray-8-hsl)'),
      },
      active: buttonVariantEmptyPlaceholder,
    },

    primary: {
      rest: {
        fgColor: hslVar('var(--gray-1-hsl)'),
        bgColor: hslVar('var(--green-5-hsl)'),
        borderColor: hslVar('var(--green-6-hsl)'),
      },
      hover: {
        ...buttonVariantEmptyPlaceholder,
        bgColor: hslVar('var(--green-6-hsl)'),
        borderColor: hslVar('var(--green-7-hsl)'),
      },
      disabled: {
        fgColor: hslVar('var(--gray-0-hsl) / 70%'),
        bgColor: hslVar('var(--green-8-hsl)'),
        borderColor: hslVar('var(--gray-8-hsl)'),
      },
      active: {
        ...buttonVariantEmptyPlaceholder,
      },
    },

    inactive: {
      rest: {
        ...buttonVariantEmptyPlaceholder,
        fgColor: hslVar('var(--gray-4-hsl)'),
        bgColor: hslVar('var(--gray-8-hsl)'),
      },
      active: {
        ...buttonVariantEmptyPlaceholder,
      },
      disabled: {
        ...buttonVariantEmptyPlaceholder,
      },
      hover: {
        ...buttonVariantEmptyPlaceholder,
      },
    },

    invisible: {
      rest: {
        ...buttonVariantEmptyPlaceholder,
        fgColor: hslVar('var(--gray-2-hsl)'),
        bgColor: hslVar(defaultThemeVars.bgColor),
      },
      hover: {
        ...buttonVariantEmptyPlaceholder,
        bgColor: hslVar('var(--gray-9-hsl)'),
      },
      disabled: {
        ...buttonVariantEmptyPlaceholder,
        fgColor: hslVar('var(--gray-6-hsl)'),
        borderColor: hslVar('var(--gray-8-hsl)'),
      },
      active: {
        ...buttonVariantEmptyPlaceholder,
      },
    },
  },
} satisfies MapLeafNodes<typeof buttonVars, string>;

export const buttonDarkThemeClassName = createTheme(
  buttonVars,
  buttonDarkThemeTokens,
);
