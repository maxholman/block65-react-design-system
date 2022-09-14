import { style, styleVariants } from '@vanilla-extract/css';
import { globalThemeVars } from './global-theme.css.js';

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
  globalThemeVars.space,
  (space) => ({
    // marginBlockStart: space,
    selectors: {
      '&:not(:first-child)': { marginBlockStart: space },
    },
  }),
  'marginBlock',
);

export const marginInlineChildren = styleVariants(
  globalThemeVars.space,
  (space) => ({
    selectors: {
      '&:not(:first-child)': { marginInlineStart: space },
    },
  }),
  'marginInlineChildren',
);

export const alignItems = styleVariants(
  globalThemeVars.align,
  (align) => ({
    alignItems: align,
  }),
  'alignItems',
);
