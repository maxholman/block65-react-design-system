import { style, styleVariants } from '@vanilla-extract/css';
import { genericVars } from './theme.css.js';

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

export const marginBlockChildren = styleVariants(
  genericVars.space,
  (space) => ({
    // marginBlockStart: space,
    selectors: {
      '&:not(:first-child)': { marginBlockStart: space },
    },
  }),
  'marginBlockChildren',
);

export const marginInlineChildren = styleVariants(
  genericVars.space,
  (space) => ({
    selectors: {
      '&:not(:first-child)': { marginInlineStart: space },
    },
    // flex: 1,
  }),
  'marginInlineChildren',
);

export const alignItems = styleVariants(
  genericVars.align,
  (align) => ({
    alignItems: align,
  }),
  'alignItems',
);
