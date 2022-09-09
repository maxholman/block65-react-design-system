import { style, styleVariants } from '@vanilla-extract/css';
import { globalThemeContract } from './themes.css.js';

export const flexRow = style(
  {
    display: 'flex',
    flexDirection: 'row',
  },
  'flexRow',
);

export const flexColumn = style(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  'flexColumn',
);

export const marginBlock = styleVariants(
  {
    tiny: [
      flexColumn,
      {
        marginBlock: globalThemeContract.space.small,
      },
    ],
    small: {
      marginBlock: globalThemeContract.space.small,
    },
    standard: {
      marginBlock: globalThemeContract.space.standard,
    },
    large: {
      marginBlock: globalThemeContract.space.large,
    },
    huge: {
      marginBlock: globalThemeContract.space.huge,
    },
  },
  'marginBlock',
);

export const marginInline = styleVariants(
  {
    tiny: {
      marginInline: globalThemeContract.space.small,
    },
    small: {
      marginInline: globalThemeContract.space.small,
    },
    standard: {
      marginInline: globalThemeContract.space.standard,
    },
    large: {
      marginInline: globalThemeContract.space.large,
    },
    huge: {
      marginInline: globalThemeContract.space.huge,
    },
  },
  'marginInline',
);

export const alignItems = styleVariants(
  {
    start: {
      alignItems: globalThemeContract.align.start,
    },
    center: {
      alignItems: globalThemeContract.align.center,
    },
    end: {
      alignItems: globalThemeContract.align.end,
    },
  },
  'alignItems',
);
