import { createTheme, type MapLeafNodes } from '@vanilla-extract/css';
import { buttonVars } from '../button.css.js';
import { hslVar } from '../utils.js';

export const buttonDarkThemeTokens = {
  border: {
    radius: '0.5em',
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
      active: {
        fgColor: hslVar('var(--gray-2-hsl)'),
        bgColor: hslVar('var(--red-7-hsl)'),
        borderColor: hslVar('var(--red-9-hsl)'),
      },
    },

    default: {
      rest: {
        fgColor: hslVar('var(--gray-3-hsl)'),
        bgColor: hslVar('var(--gray-9-hsl)'),
        borderColor: hslVar('var(--gray-7-hsl)'),
      },
      hover: {
        fgColor: hslVar('var(--gray-2-hsl)'),
        bgColor: hslVar('var(--gray-8-hsl)'),
        borderColor: hslVar('var(--gray-7-hsl)'),
      },
      disabled: {
        fgColor: hslVar('var(--gray-5-hsl)'),
        bgColor: hslVar('var(--gray-9-hsl)'),
        borderColor: hslVar('var(--gray-8-hsl)'),
      },
      active: {
        fgColor: hslVar('var(--gray-2-hsl)'),
        bgColor: hslVar('var(--gray-8-hsl)'),
        borderColor: hslVar('var(--gray-8-hsl)'),
      },
    },

    primary: {
      rest: {
        fgColor: hslVar('var(--gray-1-hsl)'),
        bgColor: hslVar('var(--green-5-hsl)'),
        borderColor: hslVar('var(--green-6-hsl)'),
      },
      hover: {
        fgColor: hslVar('var(--gray-1-hsl)'),
        bgColor: hslVar('var(--green-6-hsl)'),
        borderColor: hslVar('var(--green-7-hsl)'),
      },
      disabled: {
        fgColor: hslVar('var(--gray-0-hsl) / 70%'),
        bgColor: hslVar('var(--green-8-hsl)'),
        borderColor: hslVar('var(--gray-8-hsl)'),
      },
      active: {
        fgColor: hslVar('var(--gray-1-hsl)'),
        bgColor: hslVar('var(--green-6-hsl)'),
        borderColor: hslVar('var(--green-7-hsl)'),
      },
    },

    inactive: {
      rest: {
        fgColor: hslVar('var(--gray-4-hsl)'),
        bgColor: hslVar('var(--gray-8-hsl)'),
        borderColor: hslVar('var(--gray-8-hsl)'),
      },
      active: {
        fgColor: hslVar('var(--gray-4-hsl)'),
        bgColor: hslVar('var(--gray-8-hsl)'),
        borderColor: hslVar('var(--gray-8-hsl)'),
      },
      disabled: {
        fgColor: hslVar('var(--gray-4-hsl)'),
        bgColor: hslVar('var(--gray-8-hsl)'),
        borderColor: hslVar('var(--gray-8-hsl)'),
      },
      hover: {
        fgColor: hslVar('var(--gray-4-hsl)'),
        bgColor: hslVar('var(--gray-8-hsl)'),
        borderColor: hslVar('var(--gray-8-hsl)'),
      },
    },

    invisible: {
      rest: {
        borderColor: 'transparent',
        fgColor: hslVar('var(--gray-2-hsl)'),
        bgColor: 'transparent',
      },
      hover: {
        borderColor: 'transparent',
        fgColor: hslVar('var(--gray-2-hsl)'),
        bgColor: hslVar('var(--gray-9-hsl)'),
      },
      disabled: {
        fgColor: hslVar('var(--gray-6-hsl)'),
        bgColor: 'transparent',
        borderColor: hslVar('var(--gray-8-hsl)'),
      },
      active: {
        borderColor: 'transparent',
        fgColor: hslVar('var(--gray-2-hsl)'),
        bgColor: hslVar('var(--gray-10-hsl)'),
      },
    },
  },
} satisfies MapLeafNodes<typeof buttonVars, string>;

export const buttonDarkThemeClassName = createTheme(
  buttonVars,
  buttonDarkThemeTokens,
);
