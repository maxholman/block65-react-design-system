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
  globalThemeContract.space,
  (space) => ({
    // marginBlockStart: space,
    selectors: {
      '&:not(:first-child)': { marginBlockStart: space },
    },
  }),
  'marginBlock',
);

export const marginInlineChildren = styleVariants(
  globalThemeContract.space,
  (space) => ({
    selectors: {
      '&:not(:first-child)': { marginInlineStart: space },
    },
  }),
  'marginInlineChildren',
);

export const alignItems = styleVariants(
  globalThemeContract.align,
  (align) => ({
    alignItems: align,
  }),
  'alignItems',
);
