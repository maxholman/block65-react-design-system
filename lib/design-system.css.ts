// eslint-disable-next-line import/no-extraneous-dependencies
import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const genericVars = createThemeContract({
  text: {
    capHeights: {
      '00': 'cap-height-00',
      '0': 'cap-height-0',
      '1': 'cap-height-1',
      '2': 'cap-height-2',
      '3': 'cap-height-3',
      '4': 'cap-height-4',
      '5': 'cap-height-5',
    },
    weight: {
      thin: 'text-weight-thin',
      extraLight: 'text-weight-extra-light',
      light: 'text-weight-light',
      normal: 'text-weight-normal',
      medium: 'text-weight-medium',
      semiBold: 'text-weight-semi-bold',
      bold: 'text-weight-bold',
      heavy: 'text-weight-heavy',
    },
    lineHeight: {
      standard: 'text-line-height-standard',
    },
  },
  border: {
    weight: {
      none: 'border-weight-none',
      hairline: 'border-weight-hairline',
      thin: 'border-weight-thin',
      normal: 'border-weight-normal',
      thick: 'border-weight-thick',
    },
  },
  radius: {
    none: 'radius-none',
    small: 'radius-small',
    medium: 'radius-medium',
    large: 'radius-large',
    maximum: 'radius-tight',
  },
  space: {
    '000': 'space-000',
    '00': 'space-00',
    '0': 'space-0',
    '1': 'space-1',
    '2': 'space-2',
    '3': 'space-3',
    '4': 'space-4',
    '5': 'space-5',
    '6': 'space-6',
    '7': 'space-7',
    '8': 'space-8',
    '9': 'space-9',
    '10': 'space-10',
    '11': 'space-11',
    '12': 'space-12',
    '13': 'space-13',
    '14': 'space-14',
    '15': 'space-15',
  },
  shadowStrength: {
    '1': 'shadow-strength-1',
  },
  shadowColor: {
    '1': 'shadow-color-1',
  },
  boxShadow: {
    '1': 'box-shadow-1',
    '2': 'box-shadow-2',
    '3': 'box-shadow-3',
    '4': 'box-shadow-4',
    '5': 'box-shadow-5',
    '6': 'box-shadow-6',
  },
});

export const genericThemeClass = createTheme(genericVars, {
  text: {
    capHeights: {
      '00': '0.5rem',
      '0': '0.75rem',
      '1': '1rem',
      '2': '1.1rem',
      '3': '1.25rem',
      '4': '1.5rem',
      '5': '2rem',
      // '6': '2.5rem',
      // '7': '3rem',
      // '8': '3.5rem',
    },
    weight: {
      thin: '100',
      extraLight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semiBold: '500',
      bold: '600',
      heavy: '900',
    },
    lineHeight: {
      standard: '1.5',
    },
  },
  border: {
    weight: {
      none: '0',
      hairline: '0.075rem',
      thin: '0.1rem',
      normal: '0.125rem',
      thick: '0.25rem',
    },
  },
  radius: {
    none: '0',
    small: '0.125em',
    medium: '0.25em',
    large: '0.5em',
    maximum: '50%',
  },

  space: {
    '000': '-.5rem',
    '00': '-.25rem',
    '0': '0rem',
    '1': '.125rem',
    '2': '.25rem',
    '3': '.5rem',
    '4': '.75rem',
    '5': '1rem',
    '6': '1.25rem',
    '7': '1.5rem',
    '8': '1.75rem',
    '9': '2rem',
    '10': '3rem',
    '11': '4rem',
    '12': '5rem',
    '13': '7.5rem',
    '14': '10rem',
    '15': '15rem',
  },
  shadowStrength: {
    '1': '1%',
  },
  shadowColor: {
    '1': '220 3% 15%',
  },
  boxShadow: {
    /**
     *   --shadow-1: 0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%));
  --shadow-2:
    0 3px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 7px 14px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%));
  --shadow-3:
    0 -1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 1px 2px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 2px 5px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 4px 12px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 12px 15px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));
  --shadow-4:
    0 -2px 5px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 1px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 2px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 9px 9px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 16px 16px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%));
  --shadow-5:
    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 2px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 10px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 20px 20px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 40px 40px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));
  --shadow-6:
    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 3px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 7px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 12px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 22px 18px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 41px 33px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%)),
    0 100px 80px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));
     */
    '1': `0 1px 2px -1px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 9%))`,
    '2': `0 3px 5px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 3%)), 0 7px 14px -5px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 5%))`,
    '3': `0 -1px 3px 0 hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 2%)), 0 1px 2px -5px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 2%)), 0 2px 5px -5px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 4%)), 0 4px 12px -5px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 5%)), 0 12px 15px -5px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 7%))`,
    '4': `0 -2px 5px 0 hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 2%)), 0 1px 1px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 3%)), 0 2px 2px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 3%)), 0 5px 5px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 4%)), 0 9px 9px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 5%)), 0 16px 16px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 6%))`,
    '5': `0 -1px 2px 0 hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 2%)), 0 2px 1px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 3%)), 0 5px 5px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 3%)), 0 10px 10px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 4%)), 0 20px 20px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 5%)), 0 40px 40px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 7%))`,
    '6': `0 -1px 2px 0 hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 2%)), 0 3px 2px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 3%)), 0 7px 5px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 3%)), 0 12px 10px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 4%)), 0 22px 18px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 5%)), 0 41px 33px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 6%)), 0 100px 80px -2px hsl(${genericVars.shadowColor[1]} / calc(${genericVars.shadowStrength[1]} + 7%))`,
  } satisfies Record<`${number}`, string>,
});
